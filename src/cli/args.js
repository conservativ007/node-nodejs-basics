import process from "process";

export const parseArgs = () => {
  let arr = process.argv.slice(2);
  let values = [];

  for (let i = 1; i <= arr.length; i++) {
    if (i % 2 !== 0) {
      let chunkOfKey = arr[i - 1].slice(2);
      values.push(`${chunkOfKey} is ${arr[i]}`);
    }
  }

  console.log(values.join(", "));
};

parseArgs();