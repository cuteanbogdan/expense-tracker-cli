import fs from "fs";
import { readExpenseFile } from "./utils";

export const addExpense = (description: string, amount: number) => {
  if (!description || !amount || amount <= 0) {
    console.log("Invalid amount or description!");
    return;
  }

  const newEntry = {
    ID: 0,
    Date: new Date(Date.now()).toISOString().substring(0, 10),
    Description: description,
    Amount: amount,
  };

  let data = readExpenseFile();

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
      console.log(
        `Expense added successfully (ID: ${data[data.length - 1].ID})`
      );
    }
  });
};

export const getAllExpenses = () => {
  console.log(readExpenseFile());
};

export const summaryOfExpenses = () => {};

export const deleteAnExpense = (id: string) => {};
