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

  switch(req.method) {
    case 'OPTIONS':
      res.writeHead(200, headers);
      res.end();
      break;

    case 'GET':
      if(req.url === '/random') {
        res.writeHead(200, headers);
        res.send('I received your command => ', req.url)
        res.end(randomGetGenerator());
      }
      break;

    default:
      break;


  }

  next(); // invoke next() at the end of a request to help with testing!
};


