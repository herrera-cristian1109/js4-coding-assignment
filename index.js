console.log(`-----------------------
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`)
    //This array is created for the ages.//
let ages = [3, 9, 23, 64, 2, 8, 28, 93]    

    //a section//
let firstElement = ages[0];     //Variable for the first element in the ages array.//
let lastElement = ages[ages.length - 1];    //Variable for the last element in the ages array.//
let ageDifference = lastElement - firstElement;   //Variable for the difference between the last element and the first element in the ages array.//
    console.log('The difference between the oldest and youngest is ' + ageDifference);


    //b section//
ages.push(35);  //Used the push() method to add a new age to ages array.//
    console.log('The difference between the oldest and the youngest is now ' + ageDifference); 


    //c section//
let sum = 0;
    for (let age of ages) {     
    sum += age;
}

let average = sum / ages.length;
    console.log('The average age is ' + average);

console.log(`-----------------------
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.`)
    //Array called names//
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] 

    //a section//
let totalLetters = 0;
    //Created a for of loop to iterate through every name in the "names" array//
    for (let name of names) {
        totalLetters += name.length; 
    }

let averageLetters = totalLetters / names.length;
    console.log('The average number of letters is: ' + averageLetters);

    //b section//
let concatenatedNames = '';
    //Also used a for of loop to iterate through the names to concat them and separate with a space.//
    for (let name of names) {
        concatenatedNames = concatenatedNames.concat(name, ' ');
    }

    console.log('Concatenated names: ' + concatenatedNames);

console.log(`-----------------------
3. How do you access the last element of any array?`)

    console.log('To access the last element of an array you can use the name of the array and .length - 1. This will get you to the last element of the array because the index starts at 0.')


console.log(`-----------------------
4. How do you access the first element of any array?`)

    console.log('To access the first element of an array you use the name of the array at index 0.') 



console.log(`-----------------------
5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`)
    //Created new name lengths array and used the push method to push the length of the names to the new array.//
let nameLengths = [];

    for (let name of names) {
    nameLengths.push(name.length);
    }

    console.log('The lengths of the names are: ' + nameLengths); 

console.log(`-----------------------
6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`)

    for (let length of nameLengths) {
        sum += length;
    }

    console.log('The sum of nameLengths is: ' + sum)

console.log(`-----------------------
7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`)
    //This repeatedWord function takes a word parameter, and n as arguments. The function will repeat the word n number of times using the repeat() method.//
function repeatedWord(word, n) {
    return word.repeat(n);
}

    console.log(repeatedWord('Hello', 3))


console.log(`-----------------------
8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`)
    //getFullName function takes a first name and last name as parameters, and it will return the full name with a space between them. I used my name as a test.//
function getFullName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return fullName;
}

    let fullName = getFullName('Cristian', 'Herrera');
    console.log(fullName);


console.log(`-----------------------
9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`)

function isSumGreaterThan100(numbers) {

    for (let number of numbers) {
        sum += number;
    }

    return sum > 100; 
}
    //testing function//
let numbers1 = [10, 20, 30];
console.log(isSumGreaterThan100(numbers1));


console.log(`-----------------------
10. Write a function that takes an array of numbers and returns the average of all the elements in the array.`)

function calculateAverage(numbers) {

    for (let number of numbers) {
        sum += number;
}
let average = sum / (numbers.length || 1);
return average;
} 

let numbers11 = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers11));


console.log(`-----------------------
11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`)

function compareAverages(array1, array2) {
    let average1 = calculateAverage(array1);
    let average2 = calculateAverage(array2);

    return average1 > average2;
}


console.log(`-----------------------
12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)
//function willBuyDrink will return true if it is hot outside and if money in pocket is also greater than 10.50//
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}


console.log(`-----------------------
13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`)
//This function checks if a person has a fever or not. If the person's temperature is 100.4 or above, it will return 'Go home you have a fever!'. If their temperature is normal, it will return 'You do not have a fever.'.
function checkFever(temperature) {
    const maximumTemperature = 100.4;
    if (temperature >= maximumTemperature) {
        console.log('Go home you have a fever!');
    } else {
        console.log('You do not have a fever.');
    }
}

let person1 = 99;
let person2 = 101;

console.log(checkFever(person1));
console.log(checkFever(person2));
