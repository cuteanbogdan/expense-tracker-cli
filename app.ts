import { Command } from "commander";
import { addExpense } from "./accountManager";
const program = new Command();

program
  .command("add")
  .description("Add an expense")
  .option("--description <description>", "Add a description for expense")
  .option("--amount <amount>", "Add the amount for expense")
  .action((options) => {
    addExpense(options.description, options.amount);
  });

program
  .command("list")
  .description("See list of expenses")
  .action(() => {
    console.log("All Expenses");
  });

program
  .command("summary")
  .description("Sum of all expenses")
  .option("--month <month>", "Month for expenses")
  .action((options) => {
    console.log("Sum of expenses");
  });

program
  .command("delete")
  .description("Remove an expense")
  .option("--id <id>", "Id of expense")
  .action((options) => {
    console.log("Removed:" + options.id);
  });

program.parse();
