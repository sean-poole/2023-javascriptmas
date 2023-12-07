/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/

const wishlist = [
  { id: 1, value: "Eggs" },
  { id: 2, value: "More eggs" },
  { id: 3, value: "eggs" },
  { id: 4, value: "eg" },
  { id: 5, value: "eeeeeggggg" }
];

const listDisplay = document.querySelector(".wishlist");
const addButton = document.querySelector(".addItemButton");
addButton.addEventListener("click", addListItem);

function createList() {
  const ul = document.createElement("ul");

  for (let i = 0; i < wishlist.length; i++) {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.innerHTML = "Delete";
    btn.classList.add("deleteItemButton");
    btn.addEventListener("click", function() {
      deleteListItem(wishlist[i].id);
    });

    li.textContent = wishlist[i].value;
    li.appendChild(btn);
    ul.appendChild(li);
  }

  listDisplay.appendChild(ul);
}

function addListItem() {
  const inputField = document.getElementById("addItemInput");
  const newItem = inputField.value.trim();

  if (newItem !== "") {
    wishlist.push({ id: wishlist.length + 1, value: newItem });
    inputField.value = "";
  }

  listDisplay.innerHTML = "";
  createList();
}

function deleteListItem(id) {
  const itemIndex = wishlist.findIndex(item => item.id === id);
  wishlist.splice(itemIndex, 1);

  listDisplay.innerHTML = "";
  createList();
}

window.onload = createList;
