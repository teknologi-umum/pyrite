import Navbar from "~/components/navbar";
import ExpenseSidebar from "~/components/expense-sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { AccountEntry } from "~/dto/accountEntry";
import Decimal from "decimal.js";
import { Badge } from "~/components/ui/badge";

const expense: AccountEntry = {
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
}

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-semibold text-2xl">Invoice {expense.transaction_code} to {expense.payout.recipient_name}</h1>
        <div className="flex space-x-8 mt-6">
          <div className="flex-grow">
          <Card>
            <CardHeader>
              <CardTitle className="mb-2">
                {expense.description}
              </CardTitle>
              <CardDescription className="flex flex-col">
                <div className="flex mb-2">
                  <Badge className="bg-gray-200 text-slate-900">{expense.type}</Badge>
                  <Separator orientation='vertical' className="bg-red mx-2" decorative />
                  <div className="flex gap-2">
                    <Badge className="bg-gray-300 text-slate-900">{expense.transaction_code}</Badge>
                    <Badge className="bg-gray-200 text-gray-600">{expense.category}</Badge>
                  </div>
                </div>
                <span>{expense.timestamp.toLocaleDateString()}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h2 className="mb-2">Invoice Items</h2>
                <Separator className="mb-8" />
                <div className="mb-4 flex items-center">
                  <div className="grow">
                    <p className="mb-2">{expense.description}</p>
                    <span className="text-xs">Date: {expense.timestamp.toLocaleDateString()}</span>
                  </div>
                  <h3>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(expense.idr_amount.toNumber())}
                  </h3>
                </div>
                <Separator />
                <div className="flex m-4 w-full">
                  <div className="ml-auto mr-4 flex">
                    <h2 className="mr-6 font-bold text-lg">Total Amount</h2>
                    <h2 className="font-bold text-lg">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(expense.idr_amount.toNumber())}
                    </h2>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-2">Additional Information</h2>
                <Separator className="mb-8" />
                <div className="flex gap-4">
                  <Card className="w-3/12 border-0 bg-slate-50">
                    <CardHeader>
                      <h2 className="mb-2 text-gray-600">Paid To</h2>
                    </CardHeader>
                    <CardContent>
                      <h4>{expense.payout.recipient_name}</h4>
                      <h4 className="pt-2 capitalize">{expense.payout.method}</h4>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
          <ExpenseSidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
