import fs from "fs/promises";

import __dirname from "./__dirname.js";

const src = __dirname + "/files/fileToRemove.txt";
const errorMessage = "FS operation failed";

export const remove = async () => {
  try {
    await fs.unlink(src);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

remove();
