# Academic-Manager

## Installing Python Packages

1. Make sure you have **Python and Pip** installed
2. Navigate into the the Academic-Manager repo folder
3. Run `python -m venv venv`, if that doesn't work try `py -m venv venv`
4. Activate the virtual environment (venv)  
    * Windows: `.\venv\Scripts\activate`
    * Mac/Linux: `source venv/Scripts/activate`
5. Run `pip install -r requirements.txt` (while in the venv)
6. Type 'py manage.py runserver' or 'python manage.py runserver'
7. Click on the link (opens django development server)  

Run `deactivate` to the leave the virtual environment

If you want to run the django commands in Vscode terminal use:
`Ctrl + Shift + P` type `Python: Select Interpreter` and select the venv version
