#!/bin/bash

DOCKER_IMAGE="tommy1997/tstats_srv_img"
DOCKER_CONTAINER_NAME="tstats_srv_container"

#build and push new image
docker build -t $DOCKER_IMAGE .
docker push $DOCKER_IMAGE

#recreate image/container in remote
ssh -t tomeu@192.168.1.196 "
    docker stop $DOCKER_CONTAINER_NAME
    docker rm $DOCKER_CONTAINER_NAME
    docker rmi $DOCKER_IMAGE

    docker pull $DOCKER_IMAGE
    docker run -d -p 8080:8080 --name $DOCKER_CONTAINER_NAME -e DB_HOST='172.18.0.2' -e DB_NAME='db_tstats' -e DB_USERNAME='mysql_user' -e DB_PASSWORD='mysql_password' --network node-api-network $DOCKER_IMAGE"