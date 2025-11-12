function replaceValue(string, valueToReplace, valueToReplaceWith) {
  let modifiedString = "";

  for (let l of string) {
    if (l === valueToReplace) {
      modifiedString += valueToReplaceWith;
    } else {
      modifiedString += l;
    }
  }

  return modifiedString;
}

function capitalize(string) {
  return string
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  //replace თუ შეიძლება ===>
  // return string
  //   .split(" ")
  //   .map((w) => w.replace(w[0], w[0].toUpperCase()))
  //   .join(" ");
}

const x = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
  { name: "Jaba", age: 44 },
  { name: "Kaba", age: 10 },
];

function sortAgesAsc(users) {
  const agesAsc = users.sort((a, b) => a.age - b.age);

  return agesAsc;
}
