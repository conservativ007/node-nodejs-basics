import fs from "fs/promises";

import __dirname from "./__dirname.js";
const src = __dirname + "/files/fresh.txt";

export const create = async () => {

  const errorMessage = "FS operation failed";
  const data = "I am fresh and young";

  try {
    await fs.writeFile(src, data, { flag: "wx" });
  } catch (error) {
    throw new Error(errorMessage);
  }
};

create();