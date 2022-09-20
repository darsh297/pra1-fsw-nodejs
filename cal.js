function add(a,b)
{  console.log("Addition of a and b is :")
   return a+b;
}
function subtract(a,b)
{  console.log("Substaction of a and b is :")
   return a-b;
}
function multiply(a,b)
{  console.log("Multiplication of a and b is :")
   return a*b;
}
function divison(a,b)
{  console.log("Divison of a and b is :")
   return a/b;
}

var Darshan = "H";
module.exports.ADD = add;
module.exports.SUB = subtract;
module.exports.MUL = multiply;
module.exports.DIV = divison;

module.exports.mn = Darshan ;
