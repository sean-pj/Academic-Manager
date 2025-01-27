# Academic-Manager

## Installing Python Packages

1. Make sure you have Python installed
2. Navigate into the the Academic-Manager repo folder
3. Run `python -m venv venv`, if that doesn't work try `py -m venv venv`
4. Activate the virtual environment (venv)  
    * Windows: `.\venv\Scripts\activate`
    * Mac/Linux: `source venv/bin/activate`
5. Run `pip install -r requirements.txt` (while in the venv)
6. Do whatever django stuff you need to do  

Run `deactivate` to the leave the virtual environment

If you want to run the django commands in Vscode terminal use:
`Ctrl + Shift + P` type `Python: Select Interpreter` and select the venv version