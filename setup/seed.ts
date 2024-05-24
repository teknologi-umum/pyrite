import * as nocodb from "nocodb-sdk";
import { readFileSync } from "node:fs";

const api = new nocodb.Api({
    baseURL: "http://localhost:8080",
    secure: false,
});

const signinResponse = await api.auth.signin({
    email: "admin@localhost.net",
    password: "password"
});

// Create new base
const baseCreationResponse = await api.base.create({
    title: "Teknum Accounting",
    type: "database"
}, {
    headers: {
        "xc-auth": signinResponse.token
    }
});

if (baseCreationResponse.id == null) {
    throw new Error("failed creating base");
}

const tableCreationResponse = await api.dbTable.create(
    baseCreationResponse.id,
    {
        table_name: "accounting_entry",
        title: "Accounting Entry",
        columns: [
            {
                column_name: "type",
                title: "Type",
                dt: "SingleLineText",
                rqd: true,
                uidt: "SingleSelect",
                colOptions: {
                    options: [
                        {title: "income", color: "#c0c0ee"},
                        {title: "expense", color: "#eeb0b0"},
                    ]
                }
            },
            {
                column_name: "idr_amount",
                title: "IDR Amount",
                dt: "Decimal",
                rqd: true,
                uidt: "Decimal",
                np: "1.00000000"
            },
            {
                column_name: "original_currency",
                title: "Original Currency",
                dt: "SingleLineText",
                rqd: true,
                uidt: "SingleSelect",
                cdf: "IDR",
                colOptions: {
                    options: [
                        {title: "IDR", color: "#c0c0ee"},
                        {title: "USD", color: "#eeb0b0"},
                        {title: "EUR", color: "#b0eeb0"},
                    ]
                }
            },
            {
                column_name: "original_amount",
                title: "Original Amount",
                dt: "Decimal",
                rqd: true,
                uidt: "Decimal",
                np: "1.00000000"
            },
            {
                column_name: "category",
                title: "Category",
                dt: "SingleLineText",
                rqd: true,
                uidt: "SingleSelect",
                colOptions: {
                    options: [
                        {title: "server", color: "#c0c0ee"},
                        {title: "subscription", color: "#eeb0b0"},
                        {title: "tip", color: "#b0eeb0"},
                        {title: "bounty", color: "#eeb0c0"},
                        {title: "marketing", color: "#b0c0ee"},
                        {title: "travel", color: "#c0eeb0"},
                        {title: "saweria", color: "#eeb0ee"},
                        {title: "github-sponsors", color: "#eeb0b0"},
                    ]
                }
            },
            {
                column_name: "description",
                title: "Description",
                dt: "LongText",
                uidt: "LongText"
            },
            {
                column_name: "payout_recipient_name",
                title: "Payout Recipient Name",
                dt: "SingleLineText",
                rqd: false,
            },
            {
                column_name: "payout_method",
                title: "Payout Method",
                dt: "SingleLineText",
                rqd: false,
                uidt: "SingleSelect",
                colOptions: {
                    options: [
                        {title: "paypal", color: "#c0c0ee"},
                        {title: "bank", color: "#eeb0b0"},
                        {title: "cash", color: "#b0eeb0"},
                    ]
                }
            },
            {
                column_name: "timestamp",
                title: "Timestamp",
                dt: "DateTime",
                rqd: true,
            }
        ]
    } as unknown as nocodb.TableReqType,
    {
        headers: {
            "xc-auth": signinResponse.token
        }
    }
)

if (tableCreationResponse.id == null) {
    throw new Error("failed creating table");
}

const fakeData = readFileSync("./setup/fake.json", {encoding: "utf-8"});
const parsedData = JSON.parse(fakeData);

await api.dbDataTableRow.create(
    tableCreationResponse.id, 
    parsedData, 
    undefined, 
    {
        headers: {
            "xc-auth": signinResponse.token
        }
    }
);
