import { useState } from "react";
import type { Trade } from "../types/trade";
import { calculatePnL } from "../utils/calculations";

type TradeListProps = {
  trades: Trade[];
  onDeleteTrade: (id: string) => void;
  onEditTrade: (id: string) => void;
};

const TradeList = ({ trades, onDeleteTrade, onEditTrade }: TradeListProps) => {
  const [directionFilter, setDirectionFilter] = useState<"short" | "long" | "all">("all");
  const sortedTrades = [...trades].sort((a, b) =>
    a.symbol.localeCompare(b.symbol),
  );

  const filteredTrades = sortedTrades.filter((trade) => directionFilter === "all" || trade.direction === directionFilter);

  return (
      <section>
    <div>
      <div className="filter">
        <button type="button" onClick={() => setDirectionFilter("all")}>All</button>
        <button type="button" onClick={() =>setDirectionFilter("long")}>Long</button>
        <button type="button" onClick={() =>setDirectionFilter("short")}>Short</button>
      </div>
      {filteredTrades.map((trade) => {
        return (
          <div className="trades" key={trade.id}>
            <p className="symbol">Symbol: {trade.symbol}</p>
            <p className="direction">Direction: {trade.direction}</p>
            <p className="pnl">P&L: {calculatePnL(trade)}</p>
            <button
              type="button"
              className="delete"
              onClick={() => onDeleteTrade(trade.id)}
            >
              Delete
            </button>
            <button
              type="button"
              className="edit"
              onClick={() => onEditTrade(trade.id)}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
    </section>
  );
};

export default TradeList;
