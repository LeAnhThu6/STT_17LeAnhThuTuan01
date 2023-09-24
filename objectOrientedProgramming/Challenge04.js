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
    return this; // Enable method chaining
  }

  // Method to brake the car
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
    return this; // Enable method chaining
  }
}

// Child class 'EVCl' definition
class EVCl extends CarCl {
  #charge; // Private property for battery charge

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  // Method to charge the battery
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make}'s battery is charged to ${this.#charge}%`);
    return this; // Enable method chaining
  }

  // Override 'accelerate' method for 'EVCl' class
  accelerate() {
    super.accelerate();
    this.#charge -= 1;
    console.log(
      `${this.make} is accelerating. New speed: ${
        this.speed
      } km/h, with a charge of ${this.#charge}%`
    );
    return this; // Enable method chaining
  }
}

// Creating an electric car object and testing method chaining
const rivianEV = new EVCl("Rivian", 120, 23);

rivianEV.accelerate().brake().chargeBattery(90).accelerate();
