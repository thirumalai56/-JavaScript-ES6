console.log("Function Example JS Loaded");
//alert("JS Loaded");

function calculateTax(income){
	//10%
	
	return (income*10/100);
}

var tax = calculateTax(10000);

console.log("Tax Amount is"+tax);

function greetMe(){
	
	var message = "Hi";
	
}
console.log("Default Return value for the function "+greetMe());

function hypotunese(side1,side2){
		
		function square(side){
			
			return side*side;
		}
	return 	Math.sqrt(square(side1)+square(side2));
	
}
console.log("Hypotunese of 3 and 4 is "+ hypotunese(3,4));
/* Method Invocation */

var calculator= {
				  value1 :10,value2:20,
				  add:function(){
						this.result = this.value1+this.value2;
						}
				
				};
calculator.add();
console.log(calculator.result);

console.log("Multiplication :===>"+multiply(10,20));


function Person(firstName,lastName){
		this.firstName = firstName;
		this.lastName  = lastName;
		this.getFullName = function(){
				return this.firstName + this.lastName;
		};
}

var father = new Person("raju","ravi");
console.log(father);
console.log("FullName-->"+ father.getFullName());

// this refers to the object which invoking the function.


father.nationality =  "Indian";
var mother = new Person("Rathnam","K");

console.log(mother);








