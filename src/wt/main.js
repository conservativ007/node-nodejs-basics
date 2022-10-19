import { cpus } from "os";
import { Worker } from "worker_threads";

import __dirname from "../fs/__dirname.js";

export const performCalculations = async () => {

    const cp = cpus();
    let num = 20;

    const workerResults = await Promise.allSettled(cp.map(() => {
        return new Promise((resolve, reject) => {
            const worker = new Worker("./src/wt/worker.js", {
                workerData: num++
            })
            worker.on("message", msg => resolve(msg));
            worker.on("error", msg => reject(msg));
        });
    }));

    let result = workerResults.map(({ status, value }) => {
        return {
            status: status === "fulfilled" ? "resolved" : "error",
            data: status === "fulfilled" ? value : null
        }
    })

    console.log(result);
};

performCalculations();
