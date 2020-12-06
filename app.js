var express = require("express"),
    http = require("http"),
    path = require("path"),
    app = express(),
	port = Number(process.env.PORT || 12000);

app.use(express.static(path.join(__dirname, "static")));

http.createServer(app).listen(port, function(){
    console.log("Express server listening on port "+port);
});
