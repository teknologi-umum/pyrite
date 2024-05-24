export const AccountEntryType = ["income", "expense"] as const;

export const AccountEntryCurrency = ["idr", "usd", "aed"] as const;

export const AccountEntryCategory = [
  "server",
  "subscription",
  "tip",
  "bounty",
  "marketing",
  "travel",
] as const;

export const AccountEntryPaymentMethod = ["paypal", "bank", "cash"] as const;
