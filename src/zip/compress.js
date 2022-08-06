import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const compress = async () => {
    const readStream = createReadStream(__dirname + "/files/fileToCompress.txt", "utf-8");
    const writeStream = createWriteStream(__dirname + "/files/archive.gz");

    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

compress();