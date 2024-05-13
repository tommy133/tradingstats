import { Account } from "./account";
import { Status } from "./status";
import { Symbol } from "./symbol";

export interface Operation {
  id: number;
  symbol: Symbol;
  updown: boolean;
  dateOpen?: string;
  dateClose?: string;
  timeframe: string;
  graph?: string;
  status: Status;
  account: Account;
  volume?: number;
  ratio?: number;
  revenue?: number;
}
