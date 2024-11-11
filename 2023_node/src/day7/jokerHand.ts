
// export const cardsOrder: string[] = ['J', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'Q', 'K', 'A'];

export class JokerHand {

  hand: string = '';
  type: string = '';
  bid: number = 0;

  constructor(hand: string) {
    this.hand = hand;
  }

  loadBid(bid: number) {
    this.bid = bid;
  }
};
