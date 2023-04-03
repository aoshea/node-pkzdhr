// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

module.exports = {
  create_tiles,
};

function create_tiles(wordset) {
  return wordset.split('');
}
