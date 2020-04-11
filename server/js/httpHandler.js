const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

// function to randomly generate a "get" option
const randomGetGenerator = function() {
  console.log('server-side: invoked (randomGetGenerator method)')
  const getOption = ['up', 'down', 'left', 'right'];

  // return the random option
  return Math.floor(getOption[Math.random() * getOption.length])
}

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  // if the method is an OPTION and the end-point if root
  if(req.method === 'OPTIONS' && req.url === '/') {

    console.log()
    res.writeHead(200, headers);
    res.end();
  }

  // if GET request for random generated option and end-point is root
  if(req.method === 'GET' && req.url === '/') {

    console.log('random generated => ', randomGetGenerator())

     res.writeHead(200, headers);
     res.end(randomGetGenerator());
   }

  next(); // invoke next() at the end of a request to help with testing!
};


