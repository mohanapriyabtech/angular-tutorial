function greeting(user) {
    return "welcome " + user;
}
var user = "hello world";
// console.log(greeting(user))
var word = "hello";
function add(a, b) {
    return a + b;
}
// console.log(add(4,5))
var age;
age = "20";
var a = "hello";
a = 20;
var array = ["one", "two", 1];
var object = {
    name: "mohana",
    age: 4
};
var employess = [
    { name: "mohana", age: 4, isMajor: true },
    { name: "mohana", age: 4, isMajor: true },
];
var employess_one = [
    { name: "mohana", age: 4, isMajor: true },
    { name: "mohana", age: 4, isMajor: true },
];
var employess_two = null; // union type
var employess_1 = [
    { name: undefined, age: null, isMajor: true },
    { name: "mohana", age: 4, isMajor: true },
];
/** ================================================*/
// Type assertions
var employee_2 = [
    { name: undefined, age: null, isMajor: true },
    { name: "mohana", age: 4, isMajor: true },
];
var employee_3 = employee_2; //   <employee_one[]>employee_2
var employee_4 = [
    { age: null, isMajor: true },
    { name: "mohana", age: 4, isMajor: true },
];
if (!employee_4[0].name) {
    // console.log(!employee_4[0].name,"c")
}
//========================================================
var object1 = { name: "mohana", age: 4, isMajor: true };
function printPersonName() {
    // console.log(object1.name)
}
printPersonName();
function fun1(name) {
    // console.log(object1.name)
}
fun1('veera');
//======================================================
// enum Color { Red , green, blue}
// let backgroundColor = Color.Red  //result 0
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 3] = "blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
// console.log(backgroundColor)
//==========================================================
var log = function () { return console.log('message'); };
var draw1 = function (point) {
    // console.log("hello")
};
var funct1 = function () {
};
draw1({ e: 1, f: 2, g: 3, draw: funct1 });
//=======================================================
var Point2 = /** @class */ (function () {
    function Point2() {
        this.draw2 = function () {
            // console.log(this.h)
        };
        this.draw3 = function (point) {
            // console.log("hello")
        };
    }
    return Point2;
}());
//let shape1 :Point2 = new Point2() // object
var shape1 = new Point2(); // object
shape1.h = 5;
shape1.i = 4;
shape1.j = 6;
shape1.draw2();
//=========================================
var Point3 = /** @class */ (function () {
    function Point3(h, i, j) {
        var _this = this;
        this.draw2 = function () {
            console.log(_this.j);
        };
        this.h = h;
        this.i = i;
    }
    return Point3;
}());
//let shape1 :Point2 = new Point2() // object
var shape2 = new Point3(5, 4, 6); // object
shape2.draw2();
//==============================================
