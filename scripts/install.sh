source /home/ec2-user/.bash_profile

yum update -y
yum install nginx nodejs npm -y --enablerepo=epel
cd /var/application/
cp -f /var/application/templates/nginx.conf /etc/nginx/nginx.conf
npm config set registry http://registry.npmjs.org/
npm install -g pm2
npm install
