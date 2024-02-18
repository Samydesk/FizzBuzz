
function fizzBuzz() {
   for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("\n" + i + " FIZZBUZZ");
        } else if (i % 3 === 0) {
          console.log("\n" + i + " FIZZ");
        } else if (i % 5 === 0) {
          console.log("\n" + i + " BUZZ");
        } else {
          console.log("\n" + i);
        }
    }
}
fizzBuzz(100);



