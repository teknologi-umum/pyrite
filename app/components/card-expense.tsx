import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { Separator } from "~/components/ui/separator";
import { AccountEntry } from "~/dto/accountEntry";
import { ButtonLink } from "./button-link";

type CardExpenseProps = {
  title: string;
  description: string;
  expenses: AccountEntry[];
  footer?: string;
};

export function CardExpense({
  title,
  description,
  expenses,
  footer,
}: CardExpenseProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {expenses.map((expense) => (
            <li className="my-2" key={expense.transaction_code}>
              <a href={`/expenses/123`}>
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium">{expense.description}</h3>
                  <h3 className="text-lg font-medium">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(expense.idr_amount.toNumber())}
                  </h3>
                </div>

                <p className="text-sm font-light">Category: {expense.category}</p>
                <p className="text-sm font-light">
                  To: {expense.payout.recipient_name} -{" "}
                  {expense.timestamp.toDateString()}
                </p>
              </a>
              <Separator className="my-2" />
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <ButtonLink to="#" name={footer} />
      </CardFooter>
    </Card>
  );
}
