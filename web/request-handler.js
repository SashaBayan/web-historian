var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');

// require more modules/folders here!

var actions = {
  GET: function (req, res) {
    sendResponse(res, 'success!', 200);
  },
  POST: function (req, res) {},
  OPTIONS: function (req, res) {},
}


exports.handleRequest = function (req, res) {
  if(actions[req.method]){
    actions[req.method](req, res);
  }
  console.log(res)
  res.end(archive.paths.list);
};
