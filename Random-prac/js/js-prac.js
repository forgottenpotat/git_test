let nums = [1, 2, 3, 4, 5];

function capsFirstLetter(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function camelize(stuffs) {
  return stuffs
    .split("-")
    .map((stuff, index) =>
      index == 0 ? stuff : stuff[0].toUpperCase() + stuff.slice(1)
    )
    .join("");
}

function sortArr(arr) {
  return arr.sort((a, b) => a - b);
}

// console.log(`Stuff: ${filterRangeInPlace([5, 3, 8, 1], 1, 4)}`);
console.log(sortArr([5, 2, 1, -10, 8]));
console.log(camelize("background-color"));
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition") == "WebkitTransition";

function multiplyThree(num) {
  return num * 3;
}

const mapArr = nums.reduce((total, num) => (total += num));

console.log(mapArr);
console.log(capsFirstLetter("ian"));
