import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TradeList from "./TradeList";
import type { Trade } from "../types/trade";

const trades: Trade[] = [
  {
    id: "1",
    symbol: "Gold",
    direction: "short",
    entryPrice: 4058,
    exitPrice: 4065,
    quantity: 10,
    date: "20/08/2026",
    notes: "Trade notes here",
  },
];
const onDeleteTrade = vi.fn();
describe("TradeList", () => {
  it("renders trades", () => {
    render(<TradeList trades={trades} onDeleteTrade={onDeleteTrade} />);
    const button = screen.getByText("Delete");
    fireEvent.click(button);

    expect(onDeleteTrade).toHaveBeenLastCalledWith("1");
  });
});
