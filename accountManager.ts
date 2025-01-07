import fs, { readFileSync } from "fs";

export const addExpense = (description: string, amount: number) => {
  if (!description || amount <= 0) throw Error("Invalid amount or description");
  let data;
  const newEntry = {
    ID: 0,
    Date: new Date(Date.now()).toISOString().substring(0, 10),
    Description: description,
    Amount: amount,
  };

  if (fs.existsSync("./expenses.json")) {
    const readFile = readFileSync("./expenses.json");
    if (readFile.length) {
      console.log(readFile);
      data = JSON.parse(Buffer.from(readFile).toString());
    }
  }

  if (data) {
    newEntry.ID = data[data.length - 1].ID + 1;
    data.push(newEntry);
  } else {
    newEntry.ID = 1;
    data = [newEntry];
  }

  const jsonData = JSON.stringify(data);
  fs.writeFile("expenses.json", jsonData, "utf-8", (err) => {
    if (err) {
      console.log("Error while writing the file");
    } else {
      console.log("Expense added successfully");
    }
  });
};

export const getAllExpenses = () => {};

export const summaryOfExpenses = () => {};

export const deleteAnExpense = () => {};
