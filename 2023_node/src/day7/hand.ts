// FiveOfAKind:   AAAAA (groups: 1)
// FourOfAKind:   AAAA7 (groups: 1)
// FullHuse:      AAA33 (groups: 2)
// ThreeOfAKind:  AAA65 (groups: 1)
// TwoPair:       AAKK8 (groups: 2)
// OnePair:       AA234 (groups: 1)
// HighCard:      AKQJT (groups: 0)

const cards: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

export class Hand {
  hand: string = '';
  type: string = '';
  bid: number = 0;

  constructor(hand: string) {
    this.hand = hand;
    this._inferType();
  }

  private _inferType() {
    const orderedHand = this.hand.split('').sort((a, b) => cards.indexOf(b) - cards.indexOf(a));

    const grouped: number[] = [];
    let group = 0;
    for (let c = 1; c < orderedHand.length; c++) {
      if (orderedHand[c] == orderedHand[c - 1]) {
        grouped[group] = group in grouped ? grouped[group] + 1 : 2;
      }
      else {
        if (group in grouped) group++;
      }
    }
    // console.log(this.hand, orderedHand, grouped);

    grouped.sort((a, b) => b - a);
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

  loadBid(bid: number) {
    this.bid = bid;
  }

  sort(): string {
    return this.hand.split('').sort((a, b) => cards.indexOf(b) - cards.indexOf(a)).join('');
  }

  isEqual(otherHand: Hand): boolean {
    return this.sort() === otherHand.sort();
  }
};
