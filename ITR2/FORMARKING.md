# README

Here are some instructions for checking our DB using SQLite.

## Packages

You need Python installed as well as Django: [https://docs.djangoproject.com/en/5.1/topics/install/](https://docs.djangoproject.com/en/5.1/topics/install/)

Theres also a tutorial in our main README where you can install packages using a venv if preferred.

Our db uses SQLite please install here: [https://www.sqlite.org/index.html](https://www.sqlite.org/index.html)

## Populating the DB

1. Navigate to `src/academic_manager` in your terminal
2. Run `py manage.py makemigrations` and `py manage.py migrate` (sets up columns and rows in SQL)
3.    Run `py manage.py populate_db` should say `Successfully populated database` (populates columns with stub info)

Note: the `py` part of the command can be different depending on the system (can be `python` instead of `py`)

## Checking the DB in SQLite

Most commands should be similar to normal SQL

1. Open SQLite in terminal or open sqlite3.exe
2. open the db using `.open db.sqlite3`
2. `.tables` to view headers

### Example
* `SELECT * from auth_user;` Show all users
* `SELECT * from students_student;` selects student models. The relationship to its user will be shown as an ID in the user_id column
* `SELECT * from teachers_teacher;` selects student models. The relationship to its user will be shown as an ID in the user_id column
* `SELECT * FROM auth_user WHERE id = 41` select a specific id
* `SELECT * from courses_course_students` to view the many_to_many relationship with students or `SELECT * from courses_course_teachers` to view the many_to_many relationship with teachers. Only shows student and teacher ids