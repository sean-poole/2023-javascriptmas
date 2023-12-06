const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]

function generateSecretSantaPairs(arr) {
  const pairs = {};
  let shuffled = shuffle(arr);

  for (let i = 0; i < arr.length; i++) {
    pairs[people[i]] = shuffled[i];
  }

  return pairs;
}

function shuffle(arr) {
  let copy = arr.slice();

  while (!arr.every((e, i) => e !== copy[i])) {
    for (let i = copy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
  }

  return copy;
}

console.log(generateSecretSantaPairs(people))

/**
Example output:
{
  Alice: "Dan",
  Bob: "Ferdinand",
  Carly: "Ed",
  Dan: "Alice",
  Ed: "Ginny",
  Ferdinand: "Bob",
  Ginny: "Carly"
}
*/
