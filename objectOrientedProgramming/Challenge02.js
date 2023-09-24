class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // Getter for speed in mi/h
  get speedUS() {
    return this.speed / 1.6;
  }

  // Setter for speed in mi/h (converts to km/h)
  set speedUS(speedUS) {
    this.speed = speedUS * 1.6;
  }

  // Method to accelerate the car
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
  }

  // Method to brake the car
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
  }
}

// Creating a new Car object
const car1 = new CarCl("Ford", 120);

// Testing acceleration, braking, getter, and setter
console.log(`Current speed in km/h: ${car1.speed}`);
console.log(`Current speed in mi/h: ${car1.speedUS}`);

car1.accelerate();
console.log(`Current speed in mi/h: ${car1.speedUS}`);

car1.brake();
console.log(`Current speed in mi/h: ${car1.speedUS}`);

// Setting speed in mi/h and converting to km/h
car1.speedUS = 75;
console.log(`New speed set in mi/h: ${car1.speedUS}`);
console.log(`Equivalent speed in km/h: ${car1.speed}`);
