# AlphaGenome Web UI

This project provides a web-based user interface for interacting with the AlphaGenome model. It allows users to input a DNA sequence and receive predictions from the model.

## Project Structure

-   `/backend`: A Python Flask server that handles requests, communicates with the AlphaGenome API, and returns predictions.
-   `/frontend`: A React application that provides the user interface.

## Deployment

### Docker Compose (Recommended)

This is the easiest way to get the application running with a single command.

1.  **Prerequisites:**
    -   [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) must be installed.

2.  **Set your AlphaGenome API Key:**
    Open `backend/app.py` and replace the placeholder API key with your actual API key.

3.  **Build and run the services:**
    From the project root directory, run:
    ```bash
    docker-compose up --build
    ```

4.  **Access the application:**
    Open your web browser and navigate to `http://localhost:6666`.

### Manual Setup

Follow these steps if you prefer to run the services manually without Docker.

**Prerequisites:**
-   Python 3.10+
-   Node.js and npm

**Backend Setup:**
1.  Navigate to the `backend` directory: `cd backend`
2.  Create and activate a Python virtual environment:
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```
3.  Install packages: `pip install -r requirements.txt`
4.  Set your API key in `backend/app.py`.
5.  Run the server: `python app.py`. It will be available at `http://localhost:5000`.

**Frontend Setup:**
1.  Navigate to the `frontend` directory: `cd frontend`
2.  Install packages: `npm install`
3.  Run the development server: `npm start`. The application will open at `http://localhost:6666`.

---

# AlphaGenome 网页界面

本项目为 AlphaGenome 模型提供了一个基于网页的用户界面。它允许用户输入 DNA 序列并从模型接收预测结果。

## 项目结构

-   `/backend`: 一个 Python Flask 服务器，负责处理请求，与 AlphaGenome API 通信，并返回预测结果。
-   `/frontend`: 一个 React 应用程序，提供用户界面。

## 部署

### Docker Compose (推荐)

这是使用单个命令运行应用程序的最简单方法。

1.  **环境要求:**
    -   必须安装 [Docker](https://docs.docker.com/get-docker/) 和 [Docker Compose](https://docs.docker.com/compose/install/)。

2.  **设置您的 AlphaGenome API 密钥:**
    打开 `backend/app.py` 文件，并将占位符 API 密钥替换为您的真实 API 密钥。

3.  **构建并运行服务:**
    在项目根目录中，运行：
    ```bash
    docker-compose up --build
    ```

4.  **访问应用:**
    打开您的网络浏览器并访问 `http://localhost:6666`。

### 手动设置

如果您希望在没有 Docker 的情况下手动运行服务，请按照以下步骤操作。

**环境要求:**
-   Python 3.10+
-   Node.js 和 npm

**后端设置:**
1.  进入 `backend` 目录: `cd backend`
2.  创建并激活 Python 虚拟环境:
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # Windows 系统请使用 `venv\Scripts\activate`
    ```
3.  安装依赖��: `pip install -r requirements.txt`
4.  在 `backend/app.py` 中设置您的 API 密钥。
5.  运行服务器: `python app.py`。服务将在 `http://localhost:5000` 上可用。

**前端设置:**
1.  进入 `frontend` 目录: `cd frontend`
2.  安装依赖包: `npm install`
3.  运行开发服务器: `npm start`。应用程序将在 `http://localhost:6666` 打开。
