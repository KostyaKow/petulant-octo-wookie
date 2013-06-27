#!/bin/bash

if [[ "`uname`" == 'Linux' ]]; then
   if [[ "" == "`uname -a | awk '{print $3}' | grep .*ARCH`" ]]; then
      echo "error: Not running Arch"
      exit -1
   fi
elif [[ "`uname`" == 'freebsd' ]]; then
   echo "error: not configured for FreeBSD yet"
   exit -1
fi 

if [[ "`ps -e | grep nginx`"  == "" ]]; then #ps auxww for bsd
   cp config_stuff/nginx.conf /etc/nginx/nginx.conf
   nginx &
fi

rm /usr/share/nginx/html/*
cp -R src/html/* /usr/share/nginx/html
cp -R src/userjs/* /usr/share/nginx/html
node src/serverjs/index.js
