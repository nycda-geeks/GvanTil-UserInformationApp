var express = require('express');
var fs = require('fs')

var app = express();

app.set('views', '.src/views');
app.set('view engine', 'jade');

