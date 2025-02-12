# Academic-Manager
 
## Installing Python Packages

1. Make sure you have **Python and Pip** installed and the repo cloned
2. Navigate into the the Academic-Manager repo folder
3. Run `python -m venv venv`, if that doesn't work try `py -m venv venv`
4. Activate the virtual environment (venv)  
    * Windows: `.\venv\Scripts\activate`
    * Mac/Linux: `source venv/Scripts/activate`
5. Run `pip install -r requirements.txt` (while in the venv)
6. Do whatever Django stuff you need to do

Run `deactivate` to the leave the virtual environment

If you want to run the django commands in Vscode terminal use:
`Ctrl + Shift + P` type `Python: Select Interpreter` and select the venv version

## Running Django

1. Make sure you have the virtual environment activated (using `\venv\Scripts\activate`)
2. Navigate into the **academic_manager** folder (Not the Academic-Manager repo folder but the folder *within* Academic-Manager)
3. Run `py manage.py migrate` (sets up the database)
4. Run `py manage.py runserver` (might be python not py for mac)
5. Click on the link to view the site (Usually `http://127.0.0.1:8000/`)

## Running React

1. Make sure you have **Node.js + npm** installed and the repo is cloned. You can verify your Node.js and npm installation by simply running `node -v` and `npm -v` in the terminal. If you get version numbers as the output, you're good to go.
2. Make sure your repo is up-to-date by running `git pull origin main` in the terminal. 
3. Navigate into the classroom-app directory by running `cd classroom-app`
4. Once you're in the react app folder, run `npm install` in the terminal. This will install all the required dependancies.
5. Now you're able to run the development server with `npm run dev`
6. You can now make start making changes locally to the React app. Vite will automatically reload the app in the browser whenever you save your changes.

## How to Test Django Models

1. Make sure you have the database set up using `py manage.py makemigrations` then `py manage.py migrate`
2. Create an admin user using `py manage.py createsuperuser` (just put in any information for the username, password, etc. The database is not pushed to github and you can always reset everything if you mess up)
3. Run django using `py manage.py runserver` and go to `http://127.0.0.1:8000/admin/`
4. Use the username and password you created earlier
5. Use the GUI to create and test the models

Note: every time you update a model, you need to run `py manage.py makemigrations` and `py manage.py migrate` to update the db.

## Commit Guidelines

Make your commits following [these conventions](https://www.conventionalcommits.org/en/v1.0.0/)

```
<type>[optional scope]: <description>

[optional body] 

[optional footer(s)]
```
 
* fix: a commit that fixes a bug
* feat: a commit that adds new functionality
* docs: a commit that adds or improves documentation.
* test: a commit that adds unit tests
* perf: a commit that improves performance, without functional changes
* chore: a catch-all type for any other commits 
