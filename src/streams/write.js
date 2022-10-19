import { createWriteStream } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const write = async () => {
    const writeStream = createWriteStream(__dirname + "/files/fileToWrite.txt", "utf-8");
    process.stdin.pipe(writeStream);
};

write();