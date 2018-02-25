var inputData = process.argv[2];

if(inputData.indexOf("+") > -1)
{
    var addition = require("./addition.js");
    console.log(inputData + " = " + addition(inputData));
}
else if(inputData.indexOf("-") > -1)
{
    var subtraction = require("./subtraction.js");
    console.log(inputData + " = " + subtraction(inputData));
}
else if(inputData.indexOf("*") > -1)
{
    var multiplication = require("./multiplication.js");
    console.log(inputData + " = " + multiplication(inputData));
}
else if(inputData.indexOf("/") > -1)
{
    var division = require("./division.js");
    console.log(inputData + " = " + division(inputData));
}