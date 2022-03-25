
//Global Context
console.log(this); //window object.


var a = 3.123;

console.log(window.a);

this.globalVar = "global variable exmaple this";
// window.globalVar ; 

console.log(window.globalVar);

console.log(globalThis);

//Function Context
console.log("----------Functional Context--------");
function f1(){
	console.log("Global Object"+globalThis);
	return this; // It depends on the execution context.
}

console.log(f1()); // window

function Person(firstName,lastName){
	console.log(this);
	this.firstName = firstName;
	this.lastName = lastName;
	this.f1=f1;
}
var mother = new Person("Rathnam","N");
console.log(mother.f1());

//Method Context 

const hero = {
	          heroName:"AA",
			  dialogue:function(){
					console.log(`I am ${this.heroName}`);
			   }
			 };
			 
hero.dialogue();		 

function changeColor(){
	console.log(this);
	
}
// call method
console.log(" call() method example ");
var firstName ="Allu";
var lastName = "Arjun";

function fullName(city,country){
	
		return this.firstName + " " + this.lastName+"Country belongs"+country +"and city is"+city;
	
}
var person1 = {firstName:"Raju","lastName":"K"};

var result = fullName.call(person1);
console.log(result);

console.log(fullName());//Default refers to the window object.
//Calling the call with the parameters to the function
var result2 =  fullName.call(person1,"Alaska","USA");

console.log(result2);

//Tax = 10% of the income.

function calculateTax(tax){
	
	return (this.income * tax/100);
	
}

var person1 = {income:10000};

var result = calculateTax.apply(person1,[10]);

console.log(result);





