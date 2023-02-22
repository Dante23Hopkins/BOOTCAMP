const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;

};


Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at $`);

}

const bmw = new Car ('BMW', 120);
const mercedes = new Car ('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();