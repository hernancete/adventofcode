
export const cardsOrder: string[] = ['J', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'Q', 'K', 'A'];

export class JokerHand {

  hand: string = '';
  type: string = '';
  bid: number = 0;

  constructor(hand: string) {
    this.hand = hand;
    this._inferType();
  }

  loadBid(bid: number) {
    this.bid = bid;
  }

  private _inferType() {
    const noJokerHand = this.hand.replace(/J/g, '');
    const jokers = this.hand.length - noJokerHand.length;
    const orderedNoJokerHand = noJokerHand.split('').sort((a, b) => cardsOrder.indexOf(b) - cardsOrder.indexOf(a));

    const grouped: number[] = [];
    let group = 0;
    for (let c = 1; c < orderedNoJokerHand.length; c++) {
      if (orderedNoJokerHand[c] == orderedNoJokerHand[c - 1]) {
        grouped[group] = group in grouped ? grouped[group] + 1 : 2;
      }
      else {
        if (group in grouped) group++;
      }
    }

    grouped.sort((a, b) => b - a);

    if (grouped.length === 0) {
      // No grouped means every no-joker card is different. That being said:
      // 0 jokers mean high card
      // 1 joker means one pair
      // 2 jokers mean three of a kind
      // 3 jokers mean four of a kind
      // 4 jokers mean five of a kind
      // 5 jokers mean five of a kind
      if (jokers) grouped[0] = jokers === 5 ? jokers : 1 + jokers;
    }
    else {
      // If I have groups, the jokers add to the first (bigest) to make an even bigger group
      grouped[0] = grouped[0] + jokers;
    }

    switch (grouped.length) {
      case 0: this.type = 'HighCard'; break;
      case 1:
        switch (grouped[0]) {
          case 5: this.type = 'FiveOfAKind'; break;
          case 4: this.type = 'FourOfAKind'; break;
          case 3: this.type = 'ThreeOfAKind'; break;
          case 2: this.type = 'OnePair'; break;
        };
        break;
      case 2:
        this.type = grouped[0] === 3 ? 'FullHuse' : 'TwoPair';
    }
  }
};
