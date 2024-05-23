import Decimal from "decimal.js";
import { CardExpense } from "./card-expense";
import { AccountEntry } from "~/dto/accountEntry";
const ExpenseList = () => {
    const expenses: AccountEntry[] = [
        {
            transaction_code: 'EXP-001',
            description: 'Sponsorship to Volar.js',
            category: 'server',
            timestamp: new Date('2024-05-08'),
            original_ammount: new Decimal(5000),
            original_currency: 'usd',
            idr_amount: new Decimal(70000),
            type: 'expense',
            payout: {
                recipient_name: 'Volar.js',
                method: 'paypal'
            }
        },
        {
            transaction_code: 'EXP-002',
            description: 'Vue.js maintenance',
            category: 'server',
            timestamp: new Date('2024-05-08'),
            original_ammount: new Decimal(1000),
            original_currency: 'usd',
            idr_amount: new Decimal(14000),
            type: 'expense',
            payout: {
                recipient_name: 'Vue.js',
                method: 'paypal'
            }
        }
    ];

  return (
    <CardExpense
      title="Recent Expenses"
      description="Here are the recent expenses made by the collective."
      expenses={expenses}
      footer="View all expenses"
    />
    // <div className="space-y-4">
    //   {expenses.map(expense => (
    //     <div key={expense.id} className="p-4 border rounded-md bg-white">
    //       <div className="flex justify-between">
    //         <div>
    //           <h2 className="text-lg font-bold">{expense.title}</h2>
    //           <p>{expense.category}</p>
    //           <p>from {expense.from} • {expense.date}</p>
    //         </div>
    //         <div className="text-right">
    //           <p className="text-lg font-bold">{expense.amount} {expense.currency}</p>
    //           <p className={`status-${expense.status.toLowerCase()}`}>{expense.status}</p>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default ExpenseList;