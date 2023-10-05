import sys
from flask import Flask, request, redirect, url_for, render_template
from views import views

app = Flask(__name__)
app.register_blueprint(views, url_prefix="/")

@app.errorhandler(404)
def not_found(e):
    return render_template('404.html'), 404

@app.route("/")
def home():
    return redirect(url_for('views.home'))

#if __name__ == '__main__':
    #if sys.platform == 'win32':
        #app.run(host='0.0.0.0', debug=True)
