from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/form')
def my_form():
    return render_template('FirstForm.html')

@app.route('/greet')
def greet():
    user_name = request.args.get('username')
    password = request.args.get('pass')
    fav_food = request.args.get('favourite_food')
    return f"<h3>Hi {user_name}. Your password is {password} and favourite food is {fav_food}.</h3>"


app.run(debug=True)