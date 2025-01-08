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

export const writeExpenseFile = (jsonData: string): boolean => {
  try {
    fs.writeFileSync("expenses.json", jsonData, "utf-8");
    return true;
  } catch {
    console.log("Error while writing the file");
    return false;
  }
};
