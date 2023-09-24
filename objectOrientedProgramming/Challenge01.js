function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// Method to accelerate the car
Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
};

// Method to brake the car
Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
};

// Creating two Car objects
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// Testing acceleration and braking
car1.accelerate();
car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();
car2.brake();