//data type
//number
console.log(10 * 5);
console.log(Math.PI);
console.log(+"10");
console.log(isNaN("Asukwo"));

//String 
//sequences of unicode character
console.log("Hello");
console.log("super duper".length);
console.log("chris".charAt(4));
console.log("Hello"+""+"World"+"!");
console.log("I want to be uppercase!!!".toUpperCase());

//Boolean
var shouldBeTrue =false;
if (shouldBeTrue === true){
    console.log("Hello");
}
else{
    console.log("This var is not true");
}
//the following evaluation to true
var hascontent = "asukwoanso";

//the following evaluation to false
var doesNotHaveContent = "";
var isZero = 0;
var nonAssignedVariable;
console.log(typeof nonAssignedVariable);
console.log(Boolean(nonAssignedVariable));

//Object
//collection of name-valve pairs
var myObject = new Object();
myObject['1'] = "mike";
myObject['2'] = "Asukwo";
myObject['3'] = "Anso";

var myOtherObject ={
    1: "mike",
    2: "Asukwo",
    3: "Anso",
    4:  "Ben",
};
myOtherObject['unique valve'] = "Blessing";
var anotherObject = {
    firstName: "Asukwo",
    lastName: "Anso",
    age: 57,
    numbers: {
        mobile: "09027578470",
        home: "flat-1010",
    },
    address:"block 2 flat 5 jabi.",
};
var donut = {
    type: "coconut",
    glazed: true,
    sweetness: 9,
    hasChocolate: false,
    sayType: function() {
        console.log("type:" + this.type);
    },
    showSweetness:function() {
     console.log("sweetness:" + this.sweetness + "/10");
   },
};
//Constructor pattern for creating objects
function Donut(type, sweetness, hasChocolate){
    this.type = type;
    this.glazed = this.glazed;
    this.sweetness = sweetness;
    this.hasChocolate = hasChocolate;
    this.sayType = function() {
        console.log("Type:" + this.type);
    };
    this.showSweetness = function() {
        console.log("sweetness:" + this.sweetness + "/10");
    };
}
var coconutDonut = new Donut("coconut", false, 9,true);
(coconutDonut);