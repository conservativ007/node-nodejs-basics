import { createHash } from "crypto";
import { readFile } from "fs/promises";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFileToRead = "/files/fileToCalculateHashFor.txt";

export const calculateHash = async () => {
    try {
        const fileText = await readFile(__dirname + pathToFileToRead, "utf-8");
        const hash = createHash("sha256").update(fileText).digest("hex");

        console.log(`hash: ${hash}`);
    } catch (error) {
        throw error;
    }
};

calculateHash();