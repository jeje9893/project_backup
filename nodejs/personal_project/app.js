var express= require('express');
var app = express();
var router = require('./main.js')(app);

app.set('views', '/Users/jk/Desktop/nodejs/personal_project/views');
app.set('view engine','pug');

var _port = 3000;
app.use(express.static('public'));

app.listen(_port, function(){
    console.log("PORT : " + _port);
});

