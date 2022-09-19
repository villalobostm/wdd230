/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let name = "Thomas Villalobos";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = name;

// Step 3: declare and instantiate a variable to hold the current year
let year = 2022;

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
let picture = "images/DSC00873.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').src = picture;



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favorite_food = ["Pizza", "Hotdog", "Hamburger"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favorite_food;

// Step 3: declare and instantiate a variable to hold another favorite food
let food = "Lasagna";

// Step 4: add the variable holding another favorite food to the favorite food array
favorite_food.push(food);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = favorite_food;

// Step 6: remove the first element in the favorite foods array
favorite_food.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favorite_food;

// Step 8: remove the last element in the favorite foods array
favorite_food.pop();

// Step 9: repeat Step 2
document.querySelector('#food').textContent = favorite_food;

