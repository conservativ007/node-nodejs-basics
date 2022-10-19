import fs from "fs/promises";


import __dirname from "./__dirname.js";

const src = __dirname + "/files/fileToRead.txt";
const errorMessage = "FS operation failed";

export const read = async () => {

  // try {
  //   const text = await fs.readFile(src, "utf-8");
  //   console.log(text);
  // } catch (error) {
  //   throw new Error(errorMessage)
  // }
};

read();

