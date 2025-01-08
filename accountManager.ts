import { readExpenseFile, writeExpenseFile } from "./utils";

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

  if (data.length) {
    newEntry.ID = data[data.length - 1].ID + 1;
    data.push(newEntry);
  } else {
    newEntry.ID = 1;
    data = [newEntry];
  }

  const jsonData = JSON.stringify(data);
  let writtenFile = writeExpenseFile(jsonData);
  if (writtenFile) {
    console.log(`Expense added successfully (ID: ${data[data.length - 1].ID})`);
  }
};

export const getAllExpenses = () => {
  console.log(readExpenseFile());
};

export const summaryOfExpenses = () => {};

export const deleteAnExpense = (id: string) => {
  const data = readExpenseFile();
  const newData = data.filter(
    (element: Expense) => element.ID !== parseInt(id)
  );
  if (!data.length) {
    console.log("No expenses added!");
    return;
  }
  if (data.length === newData.length) {
    console.log("Invalid ID!");
    return;
  }

  const jsonData = JSON.stringify(newData);
  const writtenFile = writeExpenseFile(jsonData);
  if (writtenFile) {
    console.log("Expense deleted successfully");
  }
};
