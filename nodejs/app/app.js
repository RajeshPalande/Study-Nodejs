// //In Node run http to port
// var http = require('http');

// var myServer = http.createServer(function(req,res){
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write("<h1>Code Run To Display, Hi.....</h1>");
//     res.end();
// });
// myServer.listen(3000);
// console.log("go to port 3000");

//In express run port
var express = require('express');
var reload = require('reload');
var app = express();

var dataFile = require('./data/data.json');

app.set('port',process.env.PORT || 3000);

app.set('appData',dataFile);

app.set('view engine','ejs');
app.set('views','app/views');

app.locals.siteTitle = "Study Node Express";
app.locals.allFriends = dataFile.friends;

app.use(express.static('app/public'));

app.use(require('./routers/index'));
app.use(require('./routers/friends'));
app.use(require('./routers/feedback'));
app.use(require('./routers/api'));
app.use(require('./routers/chat'));


var Server = app.listen(app.get('port'),function(){
    console.log('listen port ' + app.get('port'));
});


reload(Server,app);