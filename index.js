// Step 1: Create a prompt for the user to input their flavor of choice.
const userInput = prompt("Enter a list of what flavors you want.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);


// Step 2: Split the users strings into an array of strings.
const arraySplit = userInput.split(",");


// Step 4: Use an object to keep track of how many flavors their are.
const flavors = {
    flavor1: "vanilla",
    flavor2: "vanilla",
    flavor3: "vanilla",
    flavor4: "strawberry",
    flavor5: "coffee",
    flavor6: "coffee",
}

// Step 3: Create a loop to itierate through the flavors.
for(const key in flavors){
    console.table(`${key}: ${flavors[key]}`)
}

function countflavor(userInput, word){
    let count = 0;
    for (let i = 0; i < userInput.length; i++){
        if(userInput[i] === word){
            count++;
        }
    }
    return count;
}

const vanilla = ["vanilla", "vanilla", "vanilla"];
const vanillaCount = "vanilla";
const result = countflavor(vanilla, vanillaCount);

const strawberry = ["strawberry"];
const strawberryCount = "strawberry";
const result2 = countflavor(strawberry, strawberryCount);


const coffee = ["coffee", "coffee"];
const coffeeCount = "coffee";
const result3 = countflavor(coffee, coffeeCount);
console.log(`You have ${result} vanilla flavors, ${result2} strawberry flavors, and ${result3} coffee flavors.`);

// Step 4: Update the object after the input has been confirmed