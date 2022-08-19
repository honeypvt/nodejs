const express = require("express");
const app = express();
app.get("/",function(request,response){
    //console.log(request);
    response.send("<h1 style=color:red>Hello</h1>");
});

app.get("/",function(req,res){
res.send("I am Sree");
});

app.listen(3000,function(){
    console.log("Server started at 3000 Port");
});
