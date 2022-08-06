import process from "process";

// you should enter this into command line
// set RSS_yourKey=yourValue&& set RSS_yourKey=yourValue&& node src/cli/env.js

export const parseEnv = () => {

  let rssValues = Object.entries(process.env).reduce((accumulator, [key, value]) => {
    if (key.startsWith("RSS_")) accumulator.push(`${key}=${value}`);
    return accumulator;
  }, []);

  console.log(rssValues.join("; "));
};

parseEnv();

