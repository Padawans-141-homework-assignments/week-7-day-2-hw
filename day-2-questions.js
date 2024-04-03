//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let i = 0; i < (Object.keys(person3)).length; i++) {
    console.log(`Favorite ${Object.keys(person3)[i]}: `);
    let type = typeof(Object.values(person3)[i]);
    // if the value is a string
    if (type === "string"){
        // log the value
        console.log(Object.values(person3)[i]);
    }
    // if its the last iteration
    else if (i === 4){
        // loop through it for the current length + 1
        for(let k = 0; k < i + 1; k++){
            // log the restaurant names
            console.log(`    From ${Object.keys(person3.shakes[0])[k]}:`);
            // log the flavour name for each restaurant
            console.log(`        ${Object.values(person3.shakes[0])[k]}`);
        }
    }
    // if the value is an object
    else if (type === "object") {
        // loop through the object based on its length
        for (let j = 0; j < Object.values(person3)[i].length; j++){
            // log the values of the object
            console.log(Object.values(person3)[i][j]);
        }
    }
    console.log('\n');
};


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    // Use an arrow to create the printInfo method
    printInfo(){
        console.log(`This person has the name of ${this.name}, an age of ${this.age}, and a height of ${this.height}cm.`);
    }

    // Create another arrow function for the addAge method that takes a single parameter
    addAge(){
        this.age = this.age + 1
        console.log(`Hello ${this.name} Your new age is ${this.age}!`)
    }
};

let person1 = new Person('Alex Johnson', 29, 172)
let person2 = new Person('Samantha Lee', 34, 167)

person1.printInfo()
person2.printInfo()

console.log('\n')

// Adding to the age
person1.addAge()
person1.addAge()
person1.addAge()

console.log('\n')


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let isBigWord = (word) => {
    //returns promise
    return new Promise((resolve, reject) => {
        // if word length longer than 10
        if(word.length > 10){
            // Resolve with 'Big word' in .then()
            resolve('Big Word')
        // if not
        } else {
            //reject with 'Small Word' in .catch()
            reject('Small Word')
        }
    })
}

isBigWord('12345678910').then((result) => {
    console.log(`Is the word big or small?: ${result}`)
}).catch((result) => {
    console.log(`Is the word big or small?: ${result}`)
})