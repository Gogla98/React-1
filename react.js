// First Task
const posNums = [-14, -23, 115, -666, 333, -147, 23].filter((number) => number > 0).reduce((acc,ell) => acc + ell);
console.log(posNums)

// Second Task
const arrayNames = ["pancho", "tigrana", "mejuda", "elguja", "emzari", "demna", "demna", "mogeli", "mitua", "mogeli"];
const numElems = arrayNames.reduce((obj,current) => {
    if(obj[current]) {
        obj[current] += 1;
    }else{
        obj[current] = 1;
    }
    return obj;
},{});
console.log(numElems)

// Third Task
class car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
        this.motion = "Car's Stopped"
    }
    check_motion() {
        if (this.speed == 0) {
            this.motion = "Car's Stopped";
        }
        if (this.speed > 0) {
            this.motion = "Car's Moving";
        }
    }
    accelerate(addSpeed) {
        this.speed += addSpeed;
        this.check_motion();
    }
    brake(subtractSpeed) {
        if (subtractSpeed >= this.speed) {
            this.speed = 0;
        }
        else {
            this.speed -= subtractSpeed;
        }
        this.check_motion();
    }
    emergency_brake() {
        this.speed = 0;
        this.check_motion();
    }
    status() {
        return `Car's ${this.brand} ${this.model} Moving ${this.speed} with KMPH and condition: ${this.motion}`;
    }
}

const lamboHur = new car("Lamborghini", "Huracan");
lamboHur.accelerate(80);
console.log(lamboHur.status());

lamboHur.brake(90);
console.log(lamboHur.status());

lamboHur.accelerate(30);
console.log(lamboHur.status());

lamboHur.emergency_brake();
console.log(lamboHur.status());

// Fourth Task
function addAsync(a, b) {
    return new Promise((resolve, reject) => {
      if ((a, b)) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }
  
  addAsync(-3, 16)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));