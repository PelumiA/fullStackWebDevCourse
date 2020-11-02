function Dog(name,age){
	this.name = name;
	this.age = age;
	this.bark = function(){
		console.log(this.name + "just barked!");'
}

var rusty = new Dog("rusty",3);

function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;

  this.numWheels = 4;
}
//Can borrow code from Car for Motorcycle by using CALL
//have to add "this" to call, so that it can be the Motorcycle
function Motorcycle(make, model, year){
  Car.call(this,make, model, year);
  this.numWheels = 2;
}
//__proto__ allows us to see properities on the protoypes

function Person(name){
  this.name = name;
}

Person.prototype.sayHi() = function() {
  return "Hi " + this.name;
}

elie = new Person("Elie");
elie.sayHi();

function Vehicle(make, model, year){
  this.make = make;
  this.model= model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn(){
  this.isRunning = true;
}

Vehicle.prototype.turnOff(){
  this.isRunning = false;
}

Vehicle.prototype.honk(){
  if(this.isRunning !== false){
    return "beep";
    console.log("beep");
  }
}
