import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import TradeForm from "./components/TradeForm";
import TradeList from "./components/TradeList";
import { type Trade } from "./types/trade";
import { calculatePnL } from "./utils/calculations";

const App = () => {
  const [trades, setTrades] = useState<Trade[]>(() => {
    const saved = localStorage.getItem("trades");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const addTrade = (trade: Omit<Trade, "id">) => {
    const id = crypto.randomUUID();
    return setTrades([...trades, { ...trade, id }]);
  };

  useEffect(() => {
    localStorage.setItem("trades", JSON.stringify(trades));
  }, [trades]);

  const deleteTrade = (id: string) => {
    const newTrades = trades.filter((trade) => trade.id !== id);
    return setTrades(newTrades);
  };

  const updateTrade = (id: string, newData: Omit<Trade, "id">) => {
    const updatedTrade = trades.map((trade) =>
      trade.id === id ? { ...newData, id } : trade,
    );
    setTrades(updatedTrade);
    setEditingId(null);
  };

  const tradeBeingEdited = trades.find((trade) => trade.id === editingId);

  const calculationsPnL: number = useMemo(
    () => trades.reduce((acc, trade) => acc + calculatePnL(trade), 0),
    [trades],
  );
  const win: number = useMemo(
    () =>
      trades.reduce(
        (acc, trade) => (calculatePnL(trade) > 0 ? acc + 1 : acc),
        0,
      ),
    [trades],
  );
  const loss: number = useMemo(
    () =>
      trades.reduce(
        (acc, trade) => (calculatePnL(trade) < 0 ? acc + 1 : acc),
        0,
      ),
    [trades],
  );

  const win_rate = trades.length === 0 ? 0 : (win / trades.length) * 100;
  const loss_rate = trades.length === 0 ? 0 : (loss / trades.length) * 100;

  return (
    <>
      <Header />
      <TradeForm
        onAddTrade={addTrade}
        editingTrade={tradeBeingEdited}
        key={tradeBeingEdited?.id ?? "new"}
        onUpdateTrade={updateTrade}
      />
      <p>Total P&L: {calculationsPnL}</p>
      <p>Win Rate: {win_rate}%</p>
      <p>Loss Rate: {loss_rate}%</p>
      <TradeList
        trades={trades}
        onDeleteTrade={deleteTrade}
        onEditTrade={setEditingId}
      />
    </>
  );
};

export default App;
