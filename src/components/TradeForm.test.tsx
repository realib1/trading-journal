import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TradeForm from "./TradeForm";

describe("TradeForm", () => {
    it("renders div", () => {
        render(<TradeForm />)
        const tradeDiv = screen.getByLabelText(/Symbol/i)
        expect(tradeDiv).toBeInTheDocument();
    })
})