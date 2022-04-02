clear
echo "downloading dependencies and libs"
sleep 1
apt-get install python termux-api -y
clear
pip install flask gtts
clear
echo 'oki, now you can launch it by executing "python3 host.py" ^^'