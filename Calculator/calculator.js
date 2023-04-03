const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.post("/bmiCalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = Math.round(weight / (height * height));

  res.send("Your BMI is " + bmi + ".");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
