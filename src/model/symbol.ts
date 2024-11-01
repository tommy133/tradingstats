import { Market } from "./market";

export interface Symbol {
  id_sym: number;
  name_sym: string;
  market: Market;
  bt_checkpoint?: string;
  description?: string;
}
