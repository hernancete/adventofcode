const BLACK = 0;
const WHITE = 1;
const TRANSPARENT = 2;

class imageDecoder {
  constructor(w, h, data) {
    this.width = w;
    this.height = h;
    this.data = data;
    this.imageSize = w * h;
  }

  getChunks() {
    const reg = new RegExp('.{' + this.imageSize + '}', 'g');
    return this.data.match(reg);
  }

  getRows(chunk) {
    const reg = new RegExp('.{' + this.width + '}', 'g');
    return chunk.match(reg);
  }

  getLayers() {
    let layers = [];
    let chunks = this.getChunks();
    for (let c in chunks) {
      layers.push([]);
      let rows = this.getRows(chunks[c]);
      for (let r in rows) {
        layers[c].push([]);
        layers[c][r] = rows[r].split('').map((a) => Number(a));
      }
    }
    return layers;
  }

  getEmptyLayer() {
    let emptyLayer = [];
    for (let h = 0; h < this.height; h++) {
      emptyLayer.push([]);
      for (let w = 0; w < this.width; w++) {
        emptyLayer[h].push(TRANSPARENT);
      }
    }
    return emptyLayer;
  }

  getVisiblePixels() {
    let visiblePixels = this.getEmptyLayer();
    let layers = this.getLayers();
    for (let w = 0; w < this.width; w++) {
      for (let h = 0; h < this.height; h++) {
        for (let l = 0; l < layers.length; l++) {
          console.log('layers[', l, '][', h, ']', layers[l][h]);
          if (Number(layers[l][h][w]) == TRANSPARENT) continue;
          else {
            visiblePixels[h][w] = Number(layers[l][h][w]);
            break;
          }
        }
      }
    }
    return visiblePixels;
  }

  print(inverted = false) {
    let visiblePixels = this.getVisiblePixels();
    for (let h = 0; h < this.height; h++) {
      let row = visiblePixels[h]
        .map((a) => {
          return (a == BLACK && !inverted) || (a == WHITE && inverted) ? '@' : ' ';
        })
        .join('');
      console.log(row);
    }
  }
}

module.exports = {
  imageDecoder: imageDecoder,
};
