// Q1.. difference between DOM and HTML?

const headingElement = document.getElementById('myHeading');
console.log(headingElement);

headingElement.textContent="New Heading";
headingElement.style.color = "blue";
headingElement.style.backgroundColor = "yellow";

//select the First <p> element inside the #content div using querySelector
const paragraph = document.querySelector("#content p");

//change the text content of the selected paragraph
paragraph.textContent = "this paragraph has being updated using query selector.";

//change the style of the selected paragraph
paragraph.style.color = "blue";


