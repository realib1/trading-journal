import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { type Trade } from "../types/trade";

type TradeFormProps = {
  onAddTrade: (trade: Omit<Trade, "id">) => void;
  editingTrade?: Trade;
  onUpdateTrade: (id: string, trade: Omit<Trade, "id">) => void;
};
const TradeForm = ({
  onAddTrade,
  editingTrade,
  onUpdateTrade,
}: TradeFormProps) => {
  const [symbol, setSymbol] = useState(editingTrade ? editingTrade.symbol : "");
  const [entryPrice, setEntryPrice] = useState(
    editingTrade ? editingTrade.entryPrice : 0,
  );
  const [exitPrice, setExitPrice] = useState(
    editingTrade ? editingTrade.exitPrice : 0,
  );
  const [quantity, setQuantity] = useState(
    editingTrade ? editingTrade.quantity : 0,
  );
  const [direction, setDirection] = useState<"long" | "short" | "">(
    editingTrade ? editingTrade.direction : "",
  );
  const [date, setDate] = useState(editingTrade ? editingTrade.date : "");
  const [notes, setNotes] = useState(editingTrade ? editingTrade.notes : "");

  const handleSymbolChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSymbol(value);
  };

  const handleEntryPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setEntryPrice(value);
  };

  const handleExitPrice = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setExitPrice(value);
  };

  const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    setQuantity(value);
  };

  const handleDirection = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as "long" | "short";
    setDirection(value);
  };

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDate(value);
  };

  const handleNotes = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setNotes(value);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (direction === "") return;

    const newData = {
      symbol,
      entryPrice,
      exitPrice,
      quantity,
      direction,
      date,
      notes,
    };

    if (editingTrade) {
      return onUpdateTrade(editingTrade.id, newData);
    } else {
      onAddTrade(newData);
      setSymbol("");
      setEntryPrice(0);
      setExitPrice(0);
      setQuantity(0);
      setDirection("");
      setDate("");
      setNotes("");
    }
  };

  return (
    <div className="container sm:max-w-8/12 max-w-11/12 mx-auto py-10 pt-24">
      <form
        action=""
        onSubmit={handleSubmit}
        className="sm:max-w-md w-full mx-auto bg-slate-950 p-4"
      >
        <div className="header text-center">
          <h2 className="text-2xl font-semibold tracking-wide">Add Trade</h2>
        </div>
        <div className="flex flex-col mb-3 gap-0.5">
          <label htmlFor="symbol">Symbol</label>
          <input
            type="text"
            className="border border-slate-600 px-2 py-1 outline-none focus:ring-1"
            name="symbol"
            id="symbol"
            placeholder="Enter the symbol, eg. Gold or XAUUSD"
            required
            value={symbol}
            onChange={handleSymbolChange}
          />
        </div>
        <div className="flex flex-col mb-3 gap-0.5">
          <label htmlFor="entryPrice">Entry Price</label>
          <input
            type="number"
            className="border border-slate-600 px-2 py-1 outline-none focus:ring-1"
            name="entryPrice"
            id="entryPrice"
            placeholder="Enter entry price, eg. 1980"
            value={entryPrice}
            onChange={handleEntryPrice}
            required
          />
        </div>
        <div className="flex flex-col mb-3 gap-0.5">
          <label htmlFor="exitPrice">Exit Price</label>
          <input
            type="number"
            className="border border-slate-600 px-2 py-1 outline-none focus:ring-1"
            name="exitPrice"
            id="exitPrice"
            placeholder="Enter exit price, eg. 2000"
            value={exitPrice}
            onChange={handleExitPrice}
            required
          />
        </div>
        <div className="flex flex-col mb-3 gap-0.5">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            className="border border-slate-600 px-2 py-1 outline-none focus:ring-1"
            name="quantity"
            id="quantity"
            placeholder="Enter quantity, eg. 20"
            value={quantity}
            onChange={handleQuantity}
            required
          />
        </div>
        <div className="flex flex-col mb-3 gap-0.5">
          <p>Direction</p>
          <div className="flex items-center gap-3">
            <label htmlFor="long" className="flex gap-1">
              <input
                type="radio"
                className="border border-slate-600 px-2 py-1 outline-none focus:ring-1"
                name="direction"
                id="long"
                value="long"
                checked={direction === "long"}
                onChange={handleDirection}
                required
              />
              Long
            </label>

            <label htmlFor="short" className="flex gap-1">
              <input
                type="radio"
                className="border border-slate-600 px-2 py-1 outline-none focus:ring-1"
                name="direction"
                id="short"
                value="short"
                checked={direction === "short"}
                onChange={handleDirection}
              />
              Short
            </label>
          </div>
        </div>
        <div className="flex flex-col mb-3 gap-0.5">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="border border-slate-600 px-2 py-1 outline-none focus:ring-1"
            name="date"
            id="date"
            placeholder="Enter date, eg. 22/10/2024"
            value={date}
            onChange={handleDate}
            required
          />
        </div>
        <div className="flex flex-col mb-3 gap-0.5">
          <label htmlFor="notes">Notes</label>
          <textarea
            className="border border-slate-600 px-2 py-1 outline-none focus:ring-1"
            name="notes"
            id="notes"
            placeholder="Write up some notes about this note, eg. lessons"
            value={notes}
            onChange={handleNotes}
            required
          ></textarea>
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-purple-500 w-full py-1 hover:bg-purple-600 transition-all duration-500 cursor-pointer"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default TradeForm;
