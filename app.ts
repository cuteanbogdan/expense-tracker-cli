import { Command } from "commander";
const program = new Command();

program
  .command("add")
  .description("Add an expense")
  .option("--description <description>", "Add a description for expense")
  .option("--amount <amount>", "Add the amount for expense")
  .action((options) => {
    console.log(
      "Expense added successfully: " +
        `${options.description}, ${options.amount}`
    );
  });

program.parse();
