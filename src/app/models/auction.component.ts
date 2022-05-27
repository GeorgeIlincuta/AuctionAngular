export interface Auction {
    title: string;
    description: string;
    bidStartPrice: number;
    bidDuration: number;
    bidBuyingPrice: number;
    active: boolean;
    createdOn:Date;
    appUserId: number;
}