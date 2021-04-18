# Company Search

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
    
    In backend directory, Run migration and make changes to database. 

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

## Email Activation

  In terminal you'll receive something as follow: 

  ```shell
  ---------- MESSAGE FOLLOWS ----------
  
  Subject: Account activation on localhost:8000
  From: testing@example.com
  To: demo@demo.com
  
  You are receiving this email because you need to finish activation process on localhost:8000.
  
  Please go to the following page to activate account:
  http://localhost:8000/activate/MTE/ala82e-581a9c33e6f47dbc88c9770fa01df90d
  ```
  
  Activate account on `http://localhost:3000/#/activate/MTE/ala82e-581a9c33e6f47dbc88c9770fa01df90d`

## Reset Password

  After entering the email, in terminal you'll receive something as follow:

  ```shell
  ---------- MESSAGE FOLLOWS ----------
  Subject: Password reset on localhost:8000
  From: testing@example.com
  To: demo@demo.com
  
  You're receiving this email because you requested a password reset for your user account at localhost:8000.

  Please go to the following page and choose a new password:
  http://localhost:8000/password/reset/confirm/MTQ/ala947-e0435fd7deda326f2e2aebeee25003ac
  ```
  
  Change password on `http://localhost:3000/#/password/reset/confirm/MTQ/ala947-e0435fd7deda326f2e2aebeee25003ac`

## Reset Password Confirmation

  After entering the new password, in terminal you'll receive something as follow:

  ```shell
  ---------- MESSAGE FOLLOWS ----------
  Subject: localhost:8000 - Your password has been successfully changed!
  From: testing@example.com
  To: demo@demo.com
  
  Your password has been changed!

  Thanks for using our site!
  ```