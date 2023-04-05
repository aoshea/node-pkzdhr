// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

function Tile(char) {
  this.char = char;
}

Tile.prototype.select = function (tiles) {
  if (this.select_index !== null && typeof this.select_index !== 'undefined') {
    throw new Error('Cannot re-select tile' + this.select_index);
  }

  const next_index = tiles
    .filter(
      (x) => typeof x.select_index !== 'undefined' && x.select_index !== null
    )
    .reduce((i, tile) => (tile.select_index > i ? tile.select_index : i), 0);

  this.select_index = next_index;

  return this.select_index;
};

module.exports = {
  create_tiles,
  order_char_set,
};

function create_tiles(char_set) {
  return char_set.split('').map((char) => {
    return new Tile(char);
  });
}

function order_char_set(char_set) {
  const char_list = char_set.split('|');
  const ordered = char_list.slice(0, 1);
  for (let i = 1; i < char_list.length; ++i) {
    const x = char_list[i];
    let prev = ordered[i - 1];
    const chars = x.split('');
    for (let j = 0; j < chars.length; ++j) {
      const ch = chars[j];
      if (prev.indexOf(ch) === -1) {
        prev = prev + ch;
      }
    }
    ordered.push(prev);
  }
  return ordered[ordered.length - 1];
}
