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
