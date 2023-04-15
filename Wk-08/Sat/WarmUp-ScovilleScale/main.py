from flask import Flask
import scoville

app = Flask(__name__)

@app.route("/scoville/<in_score>")
def html_scoville_app(in_score):
    page = f"""
        <h1>Invalid score value</h1>
    """
    try:
        score = int(in_score)
    except:
        return page
    output = scoville.scoville_app(score)
    page = f"""
        <h1>Scoville Score: {score}</h1>
        <p>{output}</p>
    """
    return page

app.run(debug=True)