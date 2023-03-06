export HTTP_PORT = 8088

up:
	docker-compose up

up-build:
	docker-compose up --build

ssh:
	docker exec -it notes-app-vite /bin/bash

stop:
	docker-compose down