const EventEmitter = require("events").EventEmitter;

class Dog extends EventEmitter{

}

class Food{

}

let MyDog = new Dog();

MyDog.on("chew", item => {
    if(item instanceof Food)
    {
        console.log("Good Dog");
    } else {
        console.log(`Time to buy another ${item}`);
    }
})

MyDog.emit("chew", "Shoe");
const bone = new Food();
MyDog.emit("chew", bone);

// ===========

class MyEmitter extends EventEmitter{

}

var emitter = new MyEmitter();

emitter
.on("message",function(){
    console.log("Satu pesan Emitter");
})
.on("message",function(){
    console.log("Pesan yang kedua");
})
.on("data",function(){
    console.log("Pesan untuk Data");
})

console.log(emitter.eventNames());

emitter.removeAllListeners("data");

console.log(emitter.eventNames());
