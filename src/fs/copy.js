import fs from "fs/promises";
import __dirname from "./__dirname.js";

const sourceFolder = __dirname + "/files";
const destinationFolder = __dirname + "/files_copy";
const errorMessage = "FS operation failed";

const callBack = (i) => (fs.copyFile(`${sourceFolder}/${i}`, `${destinationFolder}/${i}`));

export const copy = async () => {
  try {
    // if the files_copy folder has already exist the error will be throw

    // create the directory
    await fs.mkdir(destinationFolder);

    // get all the files from the folder files
    const dirFiles = await fs.readdir(sourceFolder);

    // create copy files
    dirFiles.forEach(callBack);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

copy();