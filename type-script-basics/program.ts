function greeting(user){
    return "welcome "+user
}
let user = "hello world"
// console.log(greeting(user))


var word = "hello"

function add(a: number , b: number) {
    return a+b 
}
// console.log(add(4,5))


 let age:string ;
    age = "20"

let a : any = "hello" ;
    a = 20

let array : (string|number)[]= ["one","two",1]

let object :{
    name : string;
    age : number;
} = {
    name :"mohana",
    age : 4 
} 
//  console.log(object ,"age")   // normal

//  let obj1 :{
//     name : string;
//     age : number;
// } []= { name :"mohana"} 
//  console.log(obj1 ,"age")   // wrong
//==============================================

type employee = {
    name : string;
    age : number;
    isMajor: boolean
}

let employess : employee [] = [
    { name :"mohana", age : 4 ,isMajor : true },
    { name :"mohana", age : 4 ,isMajor : true },
]


let employess_one : employee [] | null  = [      // union type
    { name :"mohana", age : 4 ,isMajor : true },
    { name :"mohana", age : 4 ,isMajor : true },
]

let employess_two : employee [] | null = null  // union type


type employee_one = {
    name : string | null | undefined ;
    age : number | null ;
    isMajor: boolean
}

let employess_1 : employee_one [] | null  = [
    { name :undefined, age : null ,isMajor : true },
    { name :"mohana", age : 4 ,isMajor : true },
]
/** ================================================*/

// Type assertions

let employee_2 : any [] = [
    { name :undefined, age : null ,isMajor : true },
    { name :"mohana", age : 4 ,isMajor : true },
]

let employee_3 = employee_2 as employee_one[] //   <employee_one[]>employee_2

// console.log(employee_3[0].profile) // got error

//=====================================================

type employee_3 = {
    name? : string | null ;
    age : number | null ;
    isMajor: boolean
}

let employee_4 : employee_3 [] = [
    { age : null ,isMajor : true },
    { name :"mohana", age : 4 ,isMajor : true },
]

if(!employee_4[0].name) {
    // console.log(!employee_4[0].name,"c")
}

//========================================================

const object1 : employee_3 = { name :"mohana", age : 4 ,isMajor : true }

function printPersonName() {
    // console.log(object1.name)
}

printPersonName()

function fun1(name:string):void {
    // console.log(object1.name)
}

fun1('veera')

//======================================================


// enum Color { Red , green, blue}
// let backgroundColor = Color.Red  //result 0

enum Color { Red= 1 , green =2 , blue= 3}
let backgroundColor = Color.Red

// console.log(backgroundColor)

//==========================================================


let log = () => console.log('message')
// log()

//===========================================================

interface Point {
    c: number ,
    d: number ,
    e: number
}

// let draw =(point:Point) => {
//     console.log(point.c,point.d,point.e)

// }
// draw ({c:1,d:2,e:3})


//========================================================

interface Point1 {
    e: number ,
    f: number ,
    g: number ,
    draw:() => void
}

let draw1=(point:Point1) => {
    // console.log("hello")

}

let funct1 =  () => {

}

draw1({e:1,f:2,g:3, draw:funct1})

//=======================================================


class Point2 {
    h: number 
    i: number 
    j: number 
    draw2=():any =>{
        // console.log(this.h)
    }
    draw3=(point:Point1) => {
        // console.log("hello")
    
    }
}


//let shape1 :Point2 = new Point2() // object
let shape1  = new Point2() // object
shape1.h = 5 ;
shape1.i = 4 ;
shape1.j = 6 ;
shape1.draw2()

//=========================================


class Point3 {
    h: number 
    i: number 
    j: number 
    constructor(h:number, i:number, j?:number){
        this.h = h ;
        this.i = i ;
    }
    draw2=():any =>{
        console.log(this.j)
    }
}


//let shape1 :Point2 = new Point2() // object
let shape2  = new Point3(5,4,6) // object
shape2.draw2()

//==============================================