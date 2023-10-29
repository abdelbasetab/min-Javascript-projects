//--------------------OOP
let user = {
  name: "abidi",
  age: 27,
  skills: ["html", "css", "JS"],
  available: false,

  //nested objects
  addresses: {
    tun: "TUN",
    marroco: "marroc",
  },
  checkAv: function () {
    if (available === true) {
      return "free for work ";
    } else {
      return "not free";
    }
  },
};
// user.ab = 26; add new instanz ab to user object

//DOM , Document  Object Model
//querySelector();
//getElementByID //ElementsByTagName //ByClassName
//innerHtml
//textContent

//---------------------Introduction
//window.alert("hallo brother");(mussen wir verhindern)
//document.write
//document.createElement
//console.log("hallo")
//console is a webAPI
//ES6 Ecma script ,for standard langue for javscript

//----------Data type Javascript ,string, number,  object ,boolean, undefined, null, bigInt
//console.log(typeof [1, 2, 3]);//array but type is object
//console.log(typeof {name : "osama", age :25});

//-------- Variable declaration,Javascript is a Loosely typed programming language
//var user = "abidi";
//console.log(user);
//user = 100;
//console.log(user);
//var can u redeclare it (var x = 10, var x=20);
//NaN = not a number
//Unary Operater , let a ="10"; +a = 10 as a number
//type Coercion (type Casting)

//-------String Methodes
//search
//length
//sustring
//charAt
//trim() // take all the spaces
//toUpperCase , toLowerCase
//chain methodes is like (a.trim().chartAt(3))
//indexOf(), lastIndexOf()
//slice : take a slice like a pizza , like substring
//repeat
//splite .. return array
//starsWith,endsWith

//-------- Comparison Operator
// == compare just value   10 == "10" is true in javascirpt
// but 10 === "10" is false
// 10 !== "10" is true because they have the defferent datatype
// === compare value and type
// typeOf("abidi") === typeOf("ahmed")  is true, because the 2 is String

//------- Condition
// Nested Condition if(true){ if(true)}
//Ternary operator ? :

// --------Logical Or || : Null + Undefined + Any Falsy Value(0 or False Or "") to check falsy Value constructer  Boolean(value)
//Console.log(${price||200}) if price is undefined or is null then print 200
//let price=null;
//console.log(`price is ${price||200}`);Output 200
//----------Nullish Coalescing Operator ?? : Null + Undefined
//let price="";
//console.log(`price is ${price ?? 200}`);//Output price is ,"" is a falsy value

//----------Arrays
//let arr = ["jhbsas","jhbaic"]; arr[0][2]-->output b
// Nested array
//let arr = ["jhbsas","jhbaic",["a","ldaascd"]];
//console.log(arr);

//-----Arrays Methods : length, Arrays.isarray() true if array
//unshift .array.unshift("ab")// add in the first and shift
// # push// add in the last
//shift : delete the first index
//pop  delete the last index
//indexOf(), get the first element if the is more then one equals
//lastIndexOf get the last element if the is more then one equals
//includes
//sort , reverce ,slice(from,to)
//array0.concat(array1,array2)--> return new array
// array.join(seperatater)--> return String with serpareter that we choice

//-------Loop for and while, do {} while();
//for(let i = 0; i <arr.length ; i++)
// continue , sprung to der nachste sprint direct
// Label for the Loop ,   abidi: for(kjbaicb)

//--------function
//function saHello(username="unknown")//default value
//Rest Parameter  calc(...numbers),Numbers is array of arguments
//Anonymus Function ,we use it if we need it just one time ,button=function (){igagvcsa}
// document.getElementById("show").onclick = function () {console.log("Hallo\n");};
//arrow function ( -> )
// Join to join an array as string #  split to return a array
//------Scope
//Global ,Local
//map
//Filter return filtered Array
//reduce methode
//forEach
