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
<hr>

## Authentication

  ### Backend 

  In `settings.py`, I set the authorization type to `rest_framework_simplejwt`. The Auth Headers will have a `Bearer` token. I have a custom Token subclass in `views.py` in `accounts` to encode user's username and email in the tokens. I will use this in the frontend. 
  
  In the `urls.py` of the project, I have set `djoser.urls` to handle `auth` routes, which handles creating and activating a user, as well as reseting password and confirming new password. 

  I also have `auth/jwt/create/` and `auth/jwt/refresh/` routes to handle login, and return my custom Token. 
  
  ### Frontend

  In `index.js`, I have an event listener that checks for `jwtToken` (the access token passed by the auth api) in localStorage. If it exists, I decode the token, then check if the token has expired, and lastly give Redux store a preloaded state of the authenticated user. If it has expired, I remove the `jwtToken` from localStorage, reset Auth headers in axios, and pass in an empty object as the Redux preloaded state.

  When user logins, I save the authenticated user into Redux store and localStorage with `access`, `refresh`, and `jwtToken` keys. I also update the axios headers to verify future API requests. This header matches `settings.py` using the `Bearer` prefix.

  ```js
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  ```

  When user logouts, I remove the keys in localStorage, and delete the `Authorization` header from axios. 

  ### Frontend Routes

  When user is authenticated and token has not expired, Redux store has a session slice with `isAuthenticated`. I pass this boolean value to `routes_util` to create `AuthRoutes` and `ProtectedRoutes`. If a user is logged in, user will be redirected when trying to access Auth Routes (login, signup). If a user is not authenticated, user will be redirected when trying to access Protected Routes (companies).

<hr>

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
<hr>

## Favorites

  ### Backend

  In `Company` model, I have a `ManyToMany` field with `UserAccount` model.

  To add, remove and filter favorite, user makes `POST` requests to function views in `companies`. The views check if `request.user.is_anonymous` and returns `401` if user is not authenticated. 

  I add and remove `request.user` in add or remove favorite. And filter `favorites=request.user.id` to get current user's favorites. 

  ### Frontend

  In Redux store, there is a slice that saves users' search actions. When a user filter favorites, `state.search.favoriteFilter` will be true. 

  In `company_index_container`, `mapStateToProps` will override `companies` from `selectAllCompanies` to `selectUserFavorite`. This selector function will use the `state.user.favorites` array of company IDs and map to the `state.entities.all` to get the favorite companies.

  To get user's favorites, `search_container` will `fetchUserFavorites` on mount. And on `postFavorite` and `removeFavorite`, `userReducer` will update the `favorites` array in the Redux store.

## Search

  `fetchAllCompanies` takes in a query string. If the query string is not empty, it will add to the axios `GET` request.

  ```js
  axios.get(`/api/companies?search=${query}`);
  ```

  `fetchAllCompanies` is used for search and for showing all companies in general. Later on we can add page numbers for pagination and will not have to create a new function for it.

  In the backend, `CompanyList` is a class based view that will check if `request.query_params` exists. If it does, we filter with: 

  ```python
  name__icontains=request.query_params["search"]
  ```

  Otherwise, we get all companies and return to the frontend.