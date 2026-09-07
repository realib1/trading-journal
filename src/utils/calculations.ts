import type { Trade } from "../types/trade";

export const calculatePnL = (trade: Trade): number => {
  return trade.direction === "long"
    ? (trade.exitPrice - trade.entryPrice) * trade.quantity
    : (trade.entryPrice - trade.exitPrice) * trade.quantity;
};
