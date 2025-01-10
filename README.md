# Expense Manager CLI

## Description

This is a TypeScript-based Command Line Interface (CLI) application for managing personal expenses. The application allows you to add, update, delete, list, and summarize expenses.

## Prerequisites

1. Node.js (version 16 or higher)
2. NPM (Node Package Manager)
3. ts-node (for running TypeScript files)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory:
   ```bash
   cd expense-tracker-cli
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Install ts-node globally if not already installed:
   ```bash
   npm install -g ts-node
   ```

## Usage

Run the application using the following commands:

### Add an Expense

Add a new expense to your records.

```bash
npx ts-node app.ts add --description "<description>" --amount <amount>
```

- `--description`: Description of the expense (e.g., "Groceries").
- `--amount`: Amount of the expense (e.g., 50).

### Update an Expense

Update an existing expense by its ID.

```bash
npx ts-node app.ts update --id <id> [--description "<description>"] [--amount <amount>]
```

- `--id`: The ID of the expense to update.
- `--description` (optional): New description for the expense.
- `--amount` (optional): New amount for the expense.

### List All Expenses

View all recorded expenses.

```bash
npx ts-node app.ts list
```

### Summary of Expenses

Get a summary of all expenses or filter by a specific month.

```bash
npx ts-node app.ts summary [--month <month>]
```

- `--month` (optional): Specify a month (e.g., "1") to get a summary for that month.

### Delete an Expense

Remove an expense by its ID.

```bash
npx ts-node app.ts delete --id <id>
```

- `--id`: The ID of the expense to delete.
