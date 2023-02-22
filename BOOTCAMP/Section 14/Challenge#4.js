class CarCl {
    constructor(make,speed) {
        this.make = make;
        this.speed = speed;
    }


    accelereate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);

    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

class EVCl extends CarCl{
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }
}

chargeBattery (chargeTo)
    this.chrage =charge;

{
    accelereate() 
        this.speed += 20;
        this.chrage--;
        console.log (
            `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
        );
    }


    const rivian = new EVCl('Rivian', 120, 23);
    console.log(rivian);
    rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(50)
    .accelerate()

    console.log(rivian.speedUS);




