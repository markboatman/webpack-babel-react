import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import validator from 'validator';
import { add, multiply } from './utils/utils.js';
import './utils/utils';
import './app.css';

let email = 'mark@yahoo.com';
console.log('app.js has loaded baby!');
console.log(`Is ${email} a valid email address? ${validator.isEmail(email)}`);
console.log(`6 plus 4 is ${add(6, 4)}`);
console.log(`6 times 4 is ${multiply(6, 4)}`);

const jsxTemplate = (
  <div class="main-div" id="divId">
    <p class="main-p">
      This is JSX from app.js new with a div and the new render setup
    </p>
  </div>
);

// This is react 18 style app render
const container = document.getElementById('root');
const appRoot = createRoot(container);
appRoot.render(jsxTemplate);
// This is the old way
// ReactDOM.render(jsxTemplate, document.getElementById('root'));

// ReactDOM.render(jsxTemplate, document.getElementById('root'));
// cause an error to see if source map, i.e. "devtool", assignment is working in webpack.config.js
// Locate using chrome console and clicking on source file to the right of error.
console.log(junkVar);
