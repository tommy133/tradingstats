import { Status } from "./status";
import { Symbol } from "./symbol";

export interface Projection {
    id: number;
    symbol: Symbol;
    updown: boolean;
    date?: string;
    graph?: string;
    timeframe: string;
    status: Status;
  }