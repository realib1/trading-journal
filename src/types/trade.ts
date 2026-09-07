export type Trade = {
    id: string;
    symbol: string;
    entryPrice: number;
    exitPrice: number;
    quantity: number;
    direction: "long" | "short";
    date: string;
    notes: string;
}