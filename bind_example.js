function sayHi(){
		
	return "Hi! Welcome "+ this.name;
}

var person1 = {name:"Raghavan"};



var result = sayHi.call(person1);

console.log(result);


let sayHifunc = sayHi.bind(person1);

console.log(sayHifunc);

let bindResult = sayHifunc();

console.log(bindResult);

function showDetails(color,price){
	
	return `${this.name} has color ${color} and price ${price}`;
}
var showDetailsFunc =  showDetails.bind({name:"Lemon"},"green","10"); //Specify the arguments at the time of the binding.

console.log(showDetailsFunc());

var showDetailsFunc2 = showDetails.bind({name:"Apple"});

console.log(showDetailsFunc2("red",100));
 
 
 // Sort the objects --> age




