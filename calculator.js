const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("the result of the calculator" + result);

})


app.listen(3200, function(){
    console.log("server started on port 3200");
});