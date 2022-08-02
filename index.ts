import { arrayOfObjects } from "./data";

function changeObjectToFlatArray<T>(accumulator: T[], currentValue: T): T[] {
  if (typeof currentValue === "object") {
    if (Array.isArray(currentValue)) {
      return currentValue.reduce(changeObjectToFlatArray, accumulator);
    } else {
      return Object.values(currentValue).reduce(
        changeObjectToFlatArray,
        accumulator
      );
    }
  } else {
    accumulator.push(currentValue);
  }
  return accumulator;
}

function filterWith<T>(arrayWithObjectValues: T[], phraseToFind: string) {
  const regexp: any = new RegExp(phraseToFind, "i");

  return arrayWithObjectValues.reduce((acc, curr) => {
    const arrayFromObject = changeObjectToFlatArray([], Object.values(curr));
    if (arrayFromObject.some((value) => regexp.test(value))) {
      acc.push(curr);
    }
    return acc;
  }, [] as T[]);
}

// console.log("======CUMMINGS BAXTER======");
// const res = filterWith(arrayOfObjects, "Cummings Baxter");
// console.log(res);

console.log("======veniam======");
const res2 = filterWith(arrayOfObjects, "veniam");
console.log(res2);

// console.log("======Delacruz Acevedo======");
// const res3 = filterWith(arrayOfObjects, "Delacruz Acevedo");
// console.log(res3);
