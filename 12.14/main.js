/** Challenge:
  - Write a function to duplicate the elf when the button is clicked.
  - See index.css for optional styling challenges.
**/

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/

const elfZone = document.querySelector(".elf-hangout-zone");
const elf = document.getElementById("elf")
const btn = document.getElementById("btn")

btn.addEventListener("click", duplicateElf)

function duplicateElf(){
  const totalElves = elfZone.querySelectorAll("div").length;
  const newElf = document.createElement("div");
  newElf.classList.add("elf");
  newElf.textContent = "🧝";

  if (totalElves < 100) {
    elfZone.appendChild(newElf);
  } else {
    console.log("Too many elves!");
  }
}
