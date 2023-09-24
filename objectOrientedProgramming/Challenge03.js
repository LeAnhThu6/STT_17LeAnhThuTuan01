function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// 'Car' method to accelerate the car
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
};

// 'Car' method to brake the car
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
};

// Child class 'EV' constructor function
function EV(make, speed, charge) {
  // Inherit properties from the 'Car' class
  Car.call(this, make, speed);
  this.charge = charge;
}

// Set up prototype chain for inheritance
EV.prototype = Object.create(Car.prototype);

// 'EV' method to charge the battery
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make}'s battery is charged to ${this.charge}%`);
};

// Override 'accelerate' method for 'EV' class
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is accelerating. New speed: ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
const teslaEV = new EV("Tesla", 120, 23);

// Testing 'accelerate', 'brake', and 'chargeBattery'
teslaEV.accelerate();
teslaEV.brake();
teslaEV.chargeBattery(90);
teslaEV.accelerate();
