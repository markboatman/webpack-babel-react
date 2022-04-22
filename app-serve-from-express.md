# Procedure to make webpack-babel-react app servable from express

## Build a nodeJS express server

- Install express
  \> npm install express
- Write an nodeJS express app that servers up your one page react app

```
const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
// get an instance of express
const app = express();
// build the path, join puts in the '/' for us
const publicPath = path.join(__dirname, '..', 'public');
// register some middleware, runs on every request
// Serve any static request to the website root '/' from the project public dir
app.use(express.static(publicPath));

// if somebody makes a get request to /anything send them index.html
// because this is a one page react app
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

```

## To deply to heroku

- add some scripts to package.json that heroku is expecting.

1. "start" the server to serve our one page react app
2. "heroku-postbuild" - rebuild the react app after if a new one is uploaded to heroku

```
    "start": "node server/server.js",
    "heroku-postbuild": "npm run build-prod"
```
