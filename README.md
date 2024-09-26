# Yesh Tikvah Project

This project makes use of modern web development to create a highly optimized sharing platform, both in terms of performance and exceptional user experience.

## About this Project

This project is built with React, Node, headless Wordpress and uses the following technologies and libraries:

- Auth0
- Sass
- Bootstrap
- RadixUI
- React Router
- Axios
- JSON Server
- Docker Containers
- Vitest
- React Testing Library
- Storybook

Please follow these instructions carefully to setup this project on your machine.

**Create a `.env` File:**

- In the root directory of the project, you'll find a sample `.env` file called sample.env. Make a copy and save it as `.env`.
- Fill in all values marked as "<ADD>"

## Running the App

Now that you have configured your environment variables, you can run the React app using the following commands:
docker compose up -d front --build
You can then go to:
http://localhost:8080/ - phpmyadmin
http://localhost:8000 – wordpress
http://localhost:5173 – main application
http://localhost:3000 – json server

## Running Tests

Run docker compose up test --build and the visit:

http://localhost:51204/vitest/

## Documentation

Run docker compose up storybook --build and the visit:

http://localhost:6006/
