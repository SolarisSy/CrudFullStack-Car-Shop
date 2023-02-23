<h1 align="center">
🚗 CrudFullStack Car Shop
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone or download
```terminal
$ git clone https://github.com/NickError404/CrudFullStack-Car-Shop.git

$ yarn # or npm i
```

## project structure
```terminal
package.json
frontend/
   package.json
api/
.env (to create .env, check [prepare your secret session])
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd frontend          // go to client frontend
$ yarn # or npm i    // npm install packages
and 
$ cd api              // go to api
$ npm i                // npm install packages

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level

$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 8800)
### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```
# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
axios: ^0.27.2 | bcrypt-nodejs: ^0.0.3
babel-preset-stage-1: ^6.1.18|body-parser: ^1.15.2
lodash: ^3.10.1 | cors: ^2.8.5
react: ^16.2.0 | dotenv: ^2.0.0
react-dom: ^18.2.0 | express: ^4.14.0
react-router-dom: ^6.7.2 | mongoose: ^4.7.4
redux: ^3.7.2 | morgan: ^1.7.0
