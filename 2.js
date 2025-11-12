const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

function findYoungest(users) {
  let minAge = users[0].age;

  users.forEach((user) => {
    if (user.age < minAge) {
      minAge = user.age;
    }
  });

  return minAge;
}

function duplicateObject(user) {
  return { ...user };
}

function playDice(userA, userB) {
  function rollDice(user) {
    let count = 0;
    let roll;

    do {
      roll = Math.floor(Math.random() * 6) + 1;
      count++;
    } while (roll !== 3);

    return { count, user };
  }

  const [resultsA, resultsB] = [userA, userB].map((el) => rollDice(el));

  if (resultsA.count < resultsB.count) {
    return `${resultsA.user} won wuth ${resultsA.count}`;
  } else if (resultsB.count < resultsA.count) {
    return `${resultsB.user} won wuth ${resultsB.count}`;
  } else {
    return "draw";
  }
}
