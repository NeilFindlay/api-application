source /home/ec2-user/.bash_profile

cd /var/application/
pm2 stop all
pm2 start app.js
sudo service nginx restart