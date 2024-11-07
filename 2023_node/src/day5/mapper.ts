
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
};
