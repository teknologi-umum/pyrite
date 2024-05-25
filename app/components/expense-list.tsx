import Decimal from "decimal.js";
import { CardExpense } from "./card-expense";
import { AccountEntry } from "~/dto/accountEntry";
const ExpenseList = () => {
  const expenses: AccountEntry[] = [
    {
      transaction_code: "EXP-001",
      description: "Sponsorship to Volar.js",
      category: "server",
      timestamp: new Date("2024-05-08"),
      original_amount: new Decimal(5000),
      original_currency: "usd",
      idr_amount: new Decimal(70000),
      type: "expense",
      payout: {
        recipient_name: "Volar.js",
        method: "paypal",
      },
    },
    {
      transaction_code: "EXP-002",
      description: "Vue.js maintenance",
      category: "server",
      timestamp: new Date("2024-05-08"),
      original_amount: new Decimal(1000),
      original_currency: "usd",
      idr_amount: new Decimal(14000),
      type: "expense",
      payout: {
        recipient_name: "Vue.js",
        method: "paypal",
      },
    },
  ];

  return (
    <CardExpense
      title="Recent Expenses"
      description="Here are the recent expenses made by the collective."
      expenses={expenses}
      footer="View all expenses"
    />
  );
};

export default ExpenseList;
