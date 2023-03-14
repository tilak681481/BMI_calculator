//jshint esversion6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
})

app.post("/", function (request, response) {
    const a = Number(request.body.age);
    const h = Number(request.body.height) / 100;
    const w = Number(request.body.weight);

    const bmi = (w / (h ** 2));

    if (bmi < 18.5) {
        response.send("your bmi is" + bmi + "  &      You are Underweight!");
    }
    else if (18.5 <= bmi & bmi <= 24.9) {
        response.send("your bmi is" + bmi + "  &      You are in healthy weight range");
    }
    else if (25 <= bmi & bmi < 29.9) {
        response.send("your bmi is" + bmi + "  &     You are in overweight range")
    }
    else {
        response.send("your bmi is" + bmi + "   &     You are in obese range")
    }

})

app.listen(5505, function () {

    console.log("Server started on Port 5505");
});
