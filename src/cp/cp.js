import { spawn } from "child_process";

export const spawnChildProcess = async (args) => {
    let init = false;

    const chProcess =
        spawn(
            "node",
            ["./src/cp/files/script.js", ...args.split(" ")]
        );

    process.stdin.on("data", (msg) => {
        chProcess.stdin.write(msg);
    });

    process.stdout.on("data", (data) => {
        console.log(data.toString());
        if (!init) {
            console.log("Write anything in console..." + "\n");
            init = true;
        }
    });
};

spawnChildProcess("--silent --all");                    