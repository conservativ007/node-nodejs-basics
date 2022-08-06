import fs from "fs/promises";

import __dirname from "./__dirname.js";

const src = __dirname + "/files";
const errorMessage = "FS operation failed";

export const list = async () => {
  try {
    let files = await fs.readdir(src);
    console.log(files);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

list();