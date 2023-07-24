// fizz buzz
// 1. Arreglo nuevo
// 2. divisible en 3      -> "fizz"
// 3. divisible en 5      -> "buzz"
// 4. divisible en 3 y 5  -> "fizzbuzz"

// [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz"]
// Limite de numeros a revisar: 20

function fizzBuzz(limit) {
  const newArray = [];

  for (let index = 1; index <= limit; index++) {
    let fizz = index % 3 === 0;
    let buzz = index % 5 === 0;
    if (fizz && buzz) {
      newArray.push("fizzBuzz");
    } else if (fizz) {
      newArray.push("fizz");
    } else if (buzz) {
      newArray.push("buzz");
    } else {
      newArray.push(index);
    }
  }
  return newArray;
}

console.log(fizzBuzz(20));
