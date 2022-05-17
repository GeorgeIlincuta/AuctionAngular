export interface Auction {
    name: string;
    description: string;
    bidStart: number;
    timeLeft: number;
    buyPrice: number;
    active: boolean;
    lastBid: number;
}