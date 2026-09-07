import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("render Header, TradeForm and TradeList", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { name: /TradingJournal/i });
    const tradeForm = screen.getByLabelText(/Symbol/i);
   const tradeList = screen.getByText("Symbol");

    expect(heading).toBeInTheDocument();
    expect(tradeForm).toBeInTheDocument();
    expect(tradeList).toBeInTheDocument();
  });
});
