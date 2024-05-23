import { z } from "zod";
import { Decimal } from "decimal.js";
import {
  AccountEntryCategory,
  AccountEntryCurrency,
  AccountEntryPaymentMethod,
  AccountEntryType,
} from "~/types/accountEntry";

export const accountEntrySchema = z.object({
  transaction_code: z.string(),
  type: z.enum(AccountEntryType),
  idr_amount: z.string().transform((val) => new Decimal(val)),
  original_currency: z.enum(AccountEntryCurrency),
  original_amount: z.string().transform((val) => new Decimal(val)),
  category: z.enum(AccountEntryCategory),
  description: z.string().max(500),
  payout: z.object({
    recipient_name: z.string(),
    method: z.enum(AccountEntryPaymentMethod),
  }),
  timestamp: z.date(),
});

export type AccountEntry = z.infer<typeof accountEntrySchema>;
