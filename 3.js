function addUp(...args) {
  const [firstNum, secondNum, ...restNums] = args;
  return [firstNum + secondNum, restNums.reduce((acc, curr) => acc + curr, 0)];
}

const user = {
  banks: [
    { name: "a", adress: { county: "a", city: "a" } },
    { name: "b", adress: { county: "b", city: "b" } },
    { name: "c", adress: { county: "c" } },
  ],
};

function extractCity({ banks }) {
  const { adress: { city } = {} } = banks[12] ?? {};

  return city;
}

const person = {
  name: "Irakli",
  address: {
    city: "Tbilisi",
    country: "Georgia",
  },
};

function copyObject(obj) {
  const shallowCopy = { ...obj };
  const copy = {};

  for (let [key, value] of Object.entries(shallowCopy)) {
    if (typeof value === "object" && value !== null) {
      copy[key] = copyObject(value);
    } else {
      copy[key] = value;
    }
  }

  return copy;
}

console.log(Object.is(copyObject(person), person));
