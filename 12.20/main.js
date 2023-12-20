const dangerArray = [
  ["🎅", "👺"],
  [
      ["🎅", "🦁"],
      ["👹", "🎅"]
  ],
  [
      [
          ["🎅", "🐻"],
          ["🧌", "🎅"]
      ],
      [
          ["🐯", "🎅"],
          ["🎅", "😈"]
      ]
  ]
];

function saveSanta(arr) {
  return arr.map(subArray => {
    if (Array.isArray(subArray)) {
      return saveSanta(subArray);
    } else {
      return subArray === "🎅" ? subArray : null;
    }
  })
  .filter(subArray => subArray !== null);
}

// Check the returned results from saveSanta()
console.log(saveSanta(dangerArray))
