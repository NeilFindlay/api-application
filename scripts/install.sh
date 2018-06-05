source /home/ec2-user/.bash_profile

cd /var/application/
npm config set registry http://registry.npmjs.org/
npm install -g pm2
npm install
