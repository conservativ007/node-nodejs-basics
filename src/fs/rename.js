import fs from "fs/promises";

import __dirname from "./__dirname.js";

const wrongFileName = `${__dirname}/files/wrongFilename.txt`;
const correctFileName = `${__dirname}/files/properFilename.md`;
const errorMessage = "FS operation failed";

export const rename = async () => {
  try {
    await fs.rename(wrongFileName, correctFileName);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

rename();