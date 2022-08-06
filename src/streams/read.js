import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const read = async () => {
    let readStream = fs.createReadStream(__dirname + "/files/fileToRead.txt");
    readStream.on("data", (data) => {
        process.stdout.write(data + "\n");
    });
};

read();