from flask import Blueprint, render_template

views = Blueprint(__name__,"home")

@views.route("/home")
def home():
    return render_template("index.html")

@views.route("/projects")
def all_projects():
    return render_template("projects.html")

@views.route("/guppi")
def guppi():
    return render_template("guppi.html")