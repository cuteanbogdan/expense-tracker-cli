import { readExpenseFile, writeExpenseFile } from "./utils";
import { Expense } from "./types";
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

export const summaryOfExpenses = (month: string = "0") => {
  let data = readExpenseFile();
  let sum: number = 0;
  let newData;
  if (data.length) {
    if (month !== "0") {
      let intMonth = parseInt(month);
      if (intMonth >= 1 && intMonth <= 12) {
        newData = data.filter(
          (element: Expense) =>
            new Date(element.Date).getMonth() + 1 === intMonth
        );
      } else {
        console.log("Wrong input for month!");
        return;
      }
      if (newData.length) {
        for (let expense of newData) {
          sum += parseInt(expense.Amount);
        }
        console.log(
          `Total expenses for month ${new Date(newData[0].Date).toLocaleString(
            "default",
            { month: "long" }
          )}: $${sum}`
        );
      } else {
        console.log("No expenses for selected month");
        return;
      }
    } else {
      for (let expense of data) {
        sum += parseInt(expense.Amount);
      }
      console.log(`Total expenses: $${sum}`);
    }
  } else {
    console.log("No expenses added!");
  }
};

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
