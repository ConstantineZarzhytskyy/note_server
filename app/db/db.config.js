var mongoose = require('mongoose');
var Note = require('./model/note.model');
var User = require('./model/user.model');
var Folder = require('./model/folder.model');
var Marker = require('./model/marker.model');

var localDbPath = 'mongodb://localhost/test';
var mlabURL = 'mongodb://admin:admin@ds017070.mlab.com:17070/note';

exports.connectToDataBase = function () {
  return mongoose.connect(mlabURL);
};

exports.Note = Note;
exports.Folder = Folder;
exports.User = User;
exports.Marker = Marker;
