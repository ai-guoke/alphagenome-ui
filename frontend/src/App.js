import React, { useState, useRef } from 'react';
import './App.css';

const DNAIcon = () => (
  <svg className="header-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 2C7.5 4 7.5 7 9.5 9S14.5 13 14.5 15 11.5 19 9.5 21" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14.5 3C16.5 5 16.5 8 14.5 10S9.5 14 9.5 16s3 4 5 6" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 5H7" stroke="#3c4043" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 19H20" stroke="#3c4043" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 12H7" stroke="#3c4043" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 12H20" stroke="#3c4043" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 19H7" stroke="#3c4043" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 5H20" stroke="#3c4043" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);


function App() {
  const [sequence, setSequence] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handlePredict = async () => {
    setIsLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sequence }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Prediction failed');
      }

      setPrediction(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSequence(e.target.result);
      };
      reader.readAsText(file);
    } else {
      setError("Please upload a valid .txt file.");
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };


  return (
    <div className="App">
      <header className="header">
        <DNAIcon />
        <h1>AlphaGenome</h1>
      </header>

      <div className="main-container">
        <div className="card input-card">
          <div className="input-header">
            <h2>Input Sequence</h2>
            <button onClick={triggerFileSelect} className="button upload-btn">
              Upload .txt File
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
              accept=".txt"
            />
          </div>
          <textarea
            value={sequence}
            onChange={(e) => setSequence(e.target.value)}
            placeholder="Paste a long DNA sequence here, or upload a file..."
          />
          <button onClick={handlePredict} className="button predict-button" disabled={isLoading || !sequence}>
            {isLoading ? 'Predicting...' : 'Predict'}
          </button>
        </div>

        <div className="card output-card">
          <h2>Results</h2>
          <div className="output-container">
            {isLoading && <div className="loader"></div>}
            {!isLoading && !error && !prediction && (
              <p>Prediction results will appear here.</p>
            )}
            {error && (
              <div className="error">
                <pre>{error}</pre>
              </div>
            )}
            {prediction && (
              <div className="result">
                <pre>{JSON.stringify(prediction, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
