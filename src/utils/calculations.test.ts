import { describe, expect, it } from "vitest";
import { calculatePnL } from "./calculations";
import type { Trade } from "../types/trade";
describe("Calculate PnL", () => {
  it("Returns a number for Profit or Lost in a trade", () => {
    const longTrade: Trade = {
      id: "1",
      symbol: "XAUUSD",
      entryPrice: 4333,
      exitPrice: 4448,
      quantity: 2,
      direction: "long",
      date: "2026-01-01",
      notes: "",
    };
     const shortTrade: Trade = {
      id: "1",
      symbol: "USDJPY",
      entryPrice: 163,
      exitPrice: 159,
      quantity: 50,
      direction: "short",
      date: "2026-01-01",
      notes: "",
    };
    expect(calculatePnL(longTrade)).toBe(230);
    expect(calculatePnL(shortTrade)).toBe(200)
  });
});
