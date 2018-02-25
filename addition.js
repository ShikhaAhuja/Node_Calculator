module.exports = function(data)
{
    var operand1 = parseInt(data.substring(0,data.indexOf("+")));
    var operand2 =  parseInt(data.substring(data.indexOf("+")+1));
    return operand1 + operand2;
}