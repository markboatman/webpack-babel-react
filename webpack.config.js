// This is a nodeJS file
// must define and export the web config object
const path = require('path');
// __dirname is a nodeJS thing
console.log(__dirname);

// Tell webpack the entry point => tell it the output
module.exports = {
  entry: './src/app.js',
  output: {
    // this has to be an absolute path
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  // any file in our project is a module, what do we want to do with these modules
  module: {
    // define a rules array, only one array element/object in out case.
    // loader section, tell webpack to run files that match a test through a pre-compiler (babel-loader)
    // bebel-loader is an entry point for bundlers like webpack I guess
    rules: [
      {
        // what loader do we want to use
        loader: 'babel-loader',
        // set up regex, if file in project matches, run it through the loader
        test: /\.js$/,
        // don't use the loader on anything in the node_modules folder
        exclude: /node_mudules/,
      },
    ],
  },
  // this is where you give wepback the source map type
  // https://webpack.js.org/configuration/devtool/#root
  // old version was cheap-module-eval-source-map
  devtool: 'eval-cheap-module-source-map',

  // tells webpack where to serve static files from, i.e. index.html
  // If you build and serve with webpack-dev-server bundle.js is in ram
  // so not public/bundle.js file is produced
  // https://webpack.js.org/configuration/dev-server/#directory
  // This is different than Andrew's
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  // I added this, Andrew does not have this
  mode: 'development',
  // mode: 'none',
  // mode: 'production',
};
