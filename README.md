# AlphaGenome Web UI

This project provides a web-based user interface for interacting with the AlphaGenome model. It allows users to input a DNA sequence and receive predictions from the model.

## Project Structure

-   `/backend`: A Python Flask server that handles requests, communicates with the AlphaGenome API, and returns predictions.
-   `/frontend`: A React application that provides the user interface.

## Setup and Installation

### Prerequisites

-   Python 3.10+
-   Node.js and npm

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create and activate a Python virtual environment:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3.  **Install the required Python packages:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Set your AlphaGenome API Key:**
    Open `backend/app.py` and replace the placeholder API key with your actual API key.

5.  **Run the backend server:**
    ```bash
    python app.py
    ```
    The server will start on `http://localhost:5000`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install the required npm packages:**
    ```bash
    npm install
    ```

3.  **Run the frontend development server:**
    ```bash
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.

## How to Use

1.  Open the web application in your browser.
2.  Enter a DNA sequence into the text area, or upload a `.txt` file containing the sequence.
3.  Click the "Predict" button.
4.  The prediction results from the AlphaGenome model will be displayed in the results panel.

---

# AlphaGenome 网页界面

本项目为 AlphaGenome 模型提供了一个基于网页的用户界面。它允许用户输入 DNA 序列并从模型接收预测结果。

## 项目结构

-   `/backend`: 一个 Python Flask 服务器，负责处理请求，与 AlphaGenome API 通信，并返回预测结果。
-   `/frontend`: 一个 React 应用程序，提供用户界面。

## 安装与设置

### 环境要求

-   Python 3.10+
-   Node.js 和 npm

### 后端设置

1.  **进入后端目录:**
    ```bash
    cd backend
    ```

2.  **创建并激活 Python 虚拟环境:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # Windows 系统请使用 `venv\Scripts\activate`
    ```

3.  **安装所需的 Python 包:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **设置您的 AlphaGenome API 密钥:**
    打开 `backend/app.py` 文件，并将占位符 API 密钥替换为您的真实 API 密钥。

5.  **运行后端服务器:**
    ```bash
    python app.py
    ```
    服务器将在 `http://localhost:5000` 上启动。

### 前端设置

1.  **进入前端目录:**
    ```bash
    cd frontend
    ```

2.  **安装所需的 npm 包:**
    ```bash
    npm install
    ```

3.  **运行前端开发服务器:**
    ```bash
    npm start
    ```
    应用程序将在您的浏览器中打开，地址为 `http://localhost:3000`。

## 如何使用

1.  在浏览器中打开 web 应用程序。
2.  在文本区域输入 DNA 序列，或上传包含序列的 `.txt` 文件。
3.  点击 “Predict” (预���) 按钮。
4.  来自 AlphaGenome 模型的预测结果将显示在结果面板中。