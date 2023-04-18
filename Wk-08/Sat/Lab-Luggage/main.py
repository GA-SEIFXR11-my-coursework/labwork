from flask import Flask, render_template, redirect, request

import luggage_check

app = Flask(__name__)

@app.route("/")
def html_root():
    return redirect("/form", code=302)

@app.route("/form")
def html_form():
    return render_template("luggage_check.html")

@app.route("/result")
def html_result():
    height_cm = request.args.get("height_cm")
    width_cm = request.args.get("width_cm")
    depth_cm = request.args.get("depth_cm")
    weight_kg = request.args.get("weight_kg")
    try:
        height = int(height_cm)
        width = int(width_cm)
        depth = int(depth_cm)
        weight = int(weight_kg)
    except:
        print("Parsed values are not numbers. This should've been prevented prior to call.")
        return render_template("bad_page.html")
    reasons = luggage_check.check(height,width,depth,weight)
    if len(reasons) == 0:
        return render_template("result_success.html")
    else:
        return render_template("result_fail.html", reasons=reasons)
    return # should never reach here

if __name__ == "__main__":
    app.run(debug=True)