// function expo(num, power, callback) {
//   if (power === 0) {
//     return callback(1);
//   }

//   return callback(num * expo(num, power - 1, callback));
// }
// console.log(expo(5, 3, (x) => x));
// -------------------------------------------------------
const fetchData = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const copyObject = async function (obj) {
  const copy = {};
  return new Promise(async (resolve, reject) => {
    try {
      if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
        reject(new Error("not an object"));
      }

      for (let [key, value] of Object.entries(obj)) {
        if (typeof value === "object" && value !== null) {
          copy[key] = await copyObject(value);
        } else {
          copy[key] = value;
        }
      }

      resolve(copy);
    } catch (err) {
      return err;
    }
  });
};
const data = fetchData(`https://jsonplaceholder.typicode.com/posts`).then(
  (data) =>
    // copyObject("res[0]")
    copyObject(data[0])
      .then((obj) => console.log(obj))
      .catch((err) => console.log(err))
);
