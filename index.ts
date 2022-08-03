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

function deepSearch<T>(arrayWithObjectValues: T[], phraseToFind: string) {
  const regexp: any = new RegExp(phraseToFind, "i");

  return arrayWithObjectValues.reduce((acc, curr) => {
    const arrayFromObject = changeObjectToFlatArray([], Object.values(curr));
    if (arrayFromObject.some((value) => regexp.test(value))) {
      acc.push(curr);
    }
    return acc;
  }, [] as T[]);
}

console.log("======veniam======");
const res = deepSearch(arrayOfObjects, "veniam");
console.log(res);
