# dockerProject

----LAB 1&2

docker build -t project:latest . 

docker run --rm -d -p 8080:8080 project

http://localhost:8080/


---LAB 3

docker stack deploy -c docker-compose.yaml project-stack

docker service scale project-stack_mywebsite1=7

docker stack rm project-stack