source /home/ec2-user/.bash_profile

yum update -y
yum install nodejs npm -y --enablerepo=epel
cd /var/application/
npm config set registry http://registry.npmjs.org/
npm install -g pm2
npm install
