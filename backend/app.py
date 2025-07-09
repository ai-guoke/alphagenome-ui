from flask import Flask, request, jsonify
from flask_cors import CORS
from alphagenome.models import dna_client
import numpy as np
import json

app = Flask(__name__)
# Update CORS to allow requests from the new frontend port
CORS(app, resources={r"/predict": {"origins": "http://localhost:6666"}})

# It's better to load the model once when the app starts
# and get the API key from a secure place, but for this example
# we'll use the one you provided.
API_KEY = 'AIzaSyAGgILARUu6YhJUFl2zSmAUMPF1KBskqHM'
model = dna_client.create(API_KEY)

# Correctly define a JSON encoder that can handle NumPy arrays
class CustomJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return json.JSONEncoder.default(self, obj)

app.json_encoder = CustomJSONEncoder

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    sequence = data.get('sequence')

    if not sequence:
        return jsonify({'error': 'No sequence provided'}), 400

    # The model expects a specific length, so we'll pad the sequence.
    # 2048 is one of the supported lengths (2KB).
    padded_sequence = sequence.center(2048, 'N')

    try:
        output = model.predict_sequence(
            sequence=padded_sequence,
            requested_outputs=[dna_client.OutputType.RNA_SEQ],
        )

        prediction_values = output.rna_seq.values

        response_data = {
            'prediction_shape': prediction_values.shape,
            'prediction_slice': prediction_values[:10, :].tolist() # send first 10 rows
        }

        return jsonify(response_data)

    except Exception as e:
        # Log the full error to the console for debugging
        print(f"An error occurred during prediction: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # Make the server accessible within the Docker network
    app.run(host='0.0.0.0', debug=True)
