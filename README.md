# Compnay Search

## Usage
### Install Dependencies
1.  **Install dependencies**

    In main directory, start python virtual environment and install requirements.

    ```shell
    python -m venv virtualenv

    source virtualenv/bin/activate

    python -m pip install -r requirepemnts.txt
    ```
    In frontend directory, install node packages with npm package manager.

    ```shell
    npm install
    ```

2. **Start Servers**

    Inside frontend directory, following script uses `Concurrently` to first run the backend server then start the frontend server.

    ```shell
    npm run dev
    ```

    Project is now visible on `localhost:3000`.