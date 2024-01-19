class Vehicle { 
    constructor(color, year, make, model, mileage) {
        this.color = color;
        this.year = year;
        this.make = make;
        this.model = model;
        this.mileage = mileage;
    }

    accelerate(){
        console.log("Vroom Vroom")

    }
    break(){
        console.log("Screech")
    }
}

turnOnLight(){
    console.log("Lights On")

}
}
let myrhiam = new Vehicle("red", 2008, "Toyota", "Camry", 150000)   
myrhiam.accelerate()
myrhiam.break() 
myrhiam.turnOnLight()   
console.log(myrhiam)
