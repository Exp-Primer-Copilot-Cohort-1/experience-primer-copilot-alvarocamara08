// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var comments = require('./comments.json');
var _ = require('lodash');

var COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Get comments
app.get('/api/comments', function(req, res) {
  res.setHeader('Cache-Control', 'no-cache');
  res.json(comments);
});

// Add comment
app.post('/api/comments', function(req, res) {
  var newComment = {
    id: Date.now(),}
})