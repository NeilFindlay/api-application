#!/bin/bash
yum update -y
yum install nodejs npm -y --enablerepo=epel
wget https://aws-codedeploy-us-west-2.s3.amazonaws.com/latest/install
chmod +x ./install
./install auto
service codedeploy-agent start