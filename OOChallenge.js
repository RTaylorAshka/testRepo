// part one

class Vehicle {
    constructor(make, model, year){
        
        this.make = make;
        this.model = model;
        this.year = year;

    }

    honk(){
        return "Beep.";
    }

    toString(){
        const {make, model, year} = this;
        return `The vehicle is a ${make} ${model} from ${year}.`
    }
}

// part one test code

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."

// part two

class Car extends Vehicle {
    constructor(make, model, year){

        super(make, model, year)
        this.numWheels = 4;
    }
}

//part two test code

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4

//part three

class Motorcycle extends Vehicle {
    constructor(make, model, year){

        super(make, model, year)
        this.numWheels = 2;
    }
    revEngine(){
        return "ROOM!!!";
    }
}

//part three test code

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString(); // "The vehicle is a Honda Nighthawk from 2000."
myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2

//part four

class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle){
        for(let property of ['make', 'model', 'year']){
            if(!vehicle.hasOwnProperty(property)){
                throw new Error("Only vehicles are allowed in here!")
            }
        }
        
        if(this.vehicles.length == this.capacity){
            throw new Error("Sorry, we're full.")
        }

        this.vehicles.push(vehicle);
        
    }

}

//part four test code

let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
//garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000)); // "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001)); // "Sorry, we're full."