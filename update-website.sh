#!/bin/bash

docker kill updated-website
docker build . -t updated-website 

docker run -d --rm -p80:3000 --name updated-website updated-website 
