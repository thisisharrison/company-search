# Compnay Search

## Usage
### Install Dependencies
1.  **Install dependencies**

    In main directory, start python virtual environment and install requirements.

    ```python
    python -m venv virtualenv

    source virtualenv/bin/activate

    python -m pip install -r requirepemnts.txt
    ```
    In frontend directory, install node packages with npm package manager.

    ```js
    npm install
    ```
    
2. **Database and Migrations**

    Create database with following psql command. 

    ```shell
    psql
    CREATE DATABASE company_search;
    ```
    
    Run migration and make changes to database. 

    ```python
    python manage.py migrate
    ```

3. **Start Servers**

    Inside frontend directory, following script uses `Concurrently` to first run the backend server then start the frontend server.

    ```js
    npm run dev
    ```

    Project is now visible on `localhost:3000`.

4. **Start Email Server**
    
    Set up email development server with following command. We will receive the emails locally and display them to the terminal.
    
    ```python
    python -m smtpd -n -c DebuggingServer localhost:1025
    ```