import fs, { readFileSync } from "fs";

export const readExpenseFile = () => {
  let data;
  if (fs.existsSync("./expenses.json")) {
    const readFile = readFileSync("./expenses.json");
    if (readFile.length) {
      data = JSON.parse(Buffer.from(readFile).toString());
      return data;
    } else {
      return [];
    }
  }
};
