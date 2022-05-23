<h1 align="center"> Anstagram </h1> <a name="top"> </a>

<h5 align="center">  By: <a href="https://github.com/Kristen-Reid">Kristen Reid</a>

<h2> About </h2>
* [Anstagram](https://anstagram-ag.herokuapp.com) is a clone of Instagram. Anstagram is where anime lovers can share posts of images from their favorite anime and manga with each other!

   - [Features](#features)
   - [Technologies Used](#tech)
   - [How to use our application](#howto)
   
   
   
<h2> Features </h2> <a name="features"></a>
   
 * Splash Page 
    * Log in, sign up or log in as a demo user.
   
 * Home Page 
    * View posts of logged in user and other users that the logged in user follows.
    * Like and comment on a followed user's post.
   
 * User Profile Page
    * View logged in user's and followed user's profile information.
    * Follow/Unfollow a user.
    * View all posts made by user.
   
 * User Post Page 
    * View a user's specific post complete with their description and comments.
    * Like and comment on a user's post.

<h2>Technologies Used</h2> <a name="tech"></a>
   
   <img src="https://user-images.githubusercontent.com/93681149/167308732-afeeb5f2-d9a1-47ab-b8d9-82cd44b00b7e.svg" width="60px" align="left">
   <img src="https://user-images.githubusercontent.com/93681149/167308602-b05ea259-dd61-4df9-8f45-d7daeece6491.svg" width="60px" align="left">
   <img src="https://user-images.githubusercontent.com/93681149/167308754-79d7f324-d62d-461e-aa15-32487f495403.svg" width="60px" align="left">
   <img src="https://user-images.githubusercontent.com/93681149/167308772-5912f7f3-522a-4fe5-b176-575a91455823.svg" width="60px" align="left">
   <img src="https://user-images.githubusercontent.com/93681149/167308802-46d28d53-dc35-4146-86f1-2afa9fdcbac0.svg" width="60px" align="left">
   <img src="https://user-images.githubusercontent.com/93681149/167308823-588c1cbe-ef15-47ba-8d3f-944710a00ac6.svg" width="60px" align="left">
   <img src="https://user-images.githubusercontent.com/93681149/167308846-24aa684c-2a5d-4d32-b365-4a0de8714408.svg" width="60px" align="left">
   <img src="https://user-images.githubusercontent.com/93681149/167308866-01f03689-0b65-4ddd-803f-4a23a0253e35.svg" width="60px" align="left">
   <img src="https://user-images.githubusercontent.com/93681149/167308908-2aacacf3-d30a-4b00-97ed-3c034e5bcadd.svg" width="60px" align="left">
   <img src="https://user-images.githubusercontent.com/93681006/169758080-3b516c5d-07f0-4f70-bdb0-0cdcce566d4a.svg" width=60px>

  
   
   

<h2> Getting started </h2><a name="howto"></a>
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/Fiasco071/ToTheMoon.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***


*IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

<br>

## Helpful commands
|    Command            |    Purpose    |
| -------------         | ------------- |
| `pipenv shell`        | Open your terminal in the virtual environment and be able to run flask commands without a prefix |
| `pipenv run`          | Run a command from the context of the virtual environment without actually entering into it. You can use this as a prefix for flask commands  |
| `flask db upgrade`    | Check in with the database and run any needed migrations  |
| `flask db downgrade`  | Check in with the database and revert any needed migrations  |
| `flask seed all`      | Just a helpful syntax to run queries against the db to seed data. See the **app/seeds** folder for reference and more details |
