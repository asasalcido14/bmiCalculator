const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
//this is the code that you have to use every time you use bodyParser
// ({extended: true}) --

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("the result of the calculator " + result);
});

app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html")

})

app.post("/bmiCalculator", function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);
  //calculate a new variable for BMI

res.send("Your BMI is " + bmi);

});

app.listen(3300, function() {
  console.log("Server started on port 3300");
});
