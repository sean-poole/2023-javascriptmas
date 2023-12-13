/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

const btn = document.getElementById("btn");
const veggieCheck = document.getElementById("vegetarian-input");
const foodDisplay = document.getElementById("food");
const numInput = document.getElementById("num-input");

btn.addEventListener("click", getMeal);

function getMeal() {
  const isVeggie = veggieCheck.checked;
  const guests = numInput.value;

  const meal = isVeggie ? "Winter Squash Risotto" : guests < 5 ? "Ham" : "Turkey";

  foodDisplay.innerHTML = meal;
}
