from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hellow from asdf!'

@app.route('/message')
def return_message():
    return {'message': 'Wonderfullow evening today!!'}

@app.route('/myHtmlPage')
def my_html_page():
    return """
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <h1> Heyiie there! </h1>
    <p> Isn't it a lovely day today!? </p>
  </body>
</html>
"""

@app.route("/sayHello/<user_name>")
def say_hello(user_name):
    return f"Hello {user_name}, How are you today?"

@app.route("/page/<page_number>")
def load_page(page_number):
    return f"""
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <h3> You have opened page number {page_number} </h3>
  </body>
</html>
"""

@app.route("/page/<page_1>/<page_2>/<page_3>")
def load_page_numbers(page_1, page_2, page_3):
    return f"""
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <h3> You have opened page number {page_1} first. </h3>
    <h3> The you opened page number {page_2}. </h3>
    <h3> Lastly you chose to open the page number {page_3}. </h3>
  </body>
</html>
"""

@app.route('/htmlMessage')
def home():
    template = render_template("my_html.html", message="We bake Hash browns forever :D")
    print(template)
    return template

@app.route('/custom/<name>')
def custom(name):
    return render_template("name.html", user_name=name)


app.run(debug=True)
