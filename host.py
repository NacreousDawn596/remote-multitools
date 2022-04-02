import flask, sys, os, gtts

app = flask.Flask(__name__)

@app.route("/torch/<bool>")
def torch(bool):
    os.system(f"termux-torch {bool}")
    return "oki"

@app.route("/volume/<vol>")
def volume(vol):
    os.system(f"termux-volume music {(int(vol)*15)/100}")
    return "oki"

@app.route("/vibrate/<duration>")
def vibrate(duration):
    os.system(f"termux-vibrate -d {int(duration)} -f")
    return "oki"

@app.route("/call/<num>")
def call(num):
    os.system(f"termux-telephony-call {num}")
    return 'oki'
    
@app.route("/say/<txt>")
def say(txt):
    gtts.gTTS(txt, lang="en").save(f"temp.mp3")
    os.system("mpg123 temp.mp3")
    os.remove("temp.mp3")
    return "oki"
 
@app.route("/exit")
def exit():
    sys.exit()
    return "done"
    
app.run(host=os.popen("ip addr | grep 'inet 192'").read().split("inet ")[1].split("/")[0])