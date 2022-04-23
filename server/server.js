const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
// get an instance of express
const app = express();
// build the path, join puts in the '/' for us
const publicPath = path.join(__dirname, '..', 'public');
// register some middleware, runs on every request
// Serve any request to the website root '/' from the project public dir
app.use(express.static(publicPath));

// if somebody makes a get request to /* send them index.html
// because this is a single-page react app
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
