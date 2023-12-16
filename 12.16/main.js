/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/

const nameInput = document.getElementById("name-input");
const goodInput = document.getElementById("good-input");
const nameBtn = document.getElementById("name-btn");
nameBtn.addEventListener("click", addName);

const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
btn.addEventListener("click", sort)

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]

function addName(e) {
  e.preventDefault();
  const newName = nameInput.value.trim();
  const isGood = goodInput.checked;

  if (newName) {
    const existingName = sorteesArr.find(person => person.name.toLowerCase() === newName.toLowerCase());
    if (existingName) {
      alert("This name already exists.");
    } else {
      const newPerson = {
        name: newName,
        hasBeenGood: isGood
      }

      sorteesArr.push(newPerson);
      nameInput.value = "";
      goodInput.checked = false;
      sort();
    }
  } else {
    alert("Please enter a valid name.");
  }
}

function sort() {
  niceList.innerHTML = "";
  naughtyList.innerHTML = "";

  for (let person of sorteesArr) {
    const listItem = document.createElement("li");
    listItem.innerHTML = person.name;

    listItem.addEventListener("click", function () {
      person.hasBeenGood = !person.hasBeenGood;
      sort();
    });

    person.hasBeenGood ? niceList.append(listItem) : naughtyList.append(listItem);
  }
}
