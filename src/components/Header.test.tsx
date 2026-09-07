import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe("TradeList", () => {
    it("renders button", () => {
        render(<Header />)
        const button = screen.getByRole("button", {name: /Add/i})
        expect(button).toBeInTheDocument();
    })
})