from flask import Blueprint, render_template

views = Blueprint(__name__,"home")

@views.route("/home")
def home():
    return render_template("index.html")

@views.route("/about")
def about():
    return render_template("about.html")
