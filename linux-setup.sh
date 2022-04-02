clear
echo "dowloading dependencies and libs"
sleep 1
sudo apt-get install nodejs npm figlet -y
clear
sudo pacman -Sy nodejs npm figlet
clear
sudo dnf install nodejs npm figlet
clear
sudo npm install electron -g
clear
figlet done
echo 'now, you can just launch the interface by executing "electron connect.js 127.0.0.1:5000", don`t forget to change 127.0.0.1:5000 by your phone`s local ip after executing the host.py'