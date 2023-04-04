// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

module.exports = {
  create_tiles,
  order_char_set,
};

function create_tiles(wordset) {
  return wordset.split('');
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
  return ordered;
}
