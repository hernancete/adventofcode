
interface MapRange {
  sourceFrom: number,
  sourceTo: number,
  destFrom: number,
  destTo: number,
};

export class Mapper {
  ranges: MapRange[] = [];

  loadRange(mapList: string) {
    const [destFrom, sourceFrom, length] = mapList.split(/ +/).map(item => parseInt(item));
    this.ranges.push({
      sourceFrom,
      sourceTo: sourceFrom + length - 1,
      destFrom,
      destTo: destFrom + length - 1,
    });
  }

  map(input: number): number {
    const range = this.ranges.find(range => input >= range.sourceFrom && input <= range.sourceTo);
    return range ? range.destFrom + input - range.sourceFrom : input;
  }
};
