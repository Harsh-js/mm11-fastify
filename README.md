# betting-socket

To install docker in ubuntu run below commands in your terminal

===================================================================================
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
apt-cache policy docker-ce
sudo apt install docker-ce
sudo systemctl status docker
===================================================================================

Clone the whole repository to your system then run below command to build docker image and then run a conatiner with that image

To Build Docker Image run below Command
Docker build -t betting .

Run Below Command to start the container
docker run -it --name betting -p 4008:4008 -p 4009:4009 -d betting

To check all running containers
docker ps -a

To read the container logs
docket logs [CONTAINER_ID]

To stop conatiner or remove conatiner run below command
docker stop betting # To stop the container
docker rm -fbetting #To delete the container

To deploy new code changes just create new image with another name and run docker conatiner with new image
