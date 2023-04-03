const test = require('tape');
const { create_tiles } = require('./index');

test('should create tile objects for each char in puzzle word', (t) => {
  t.plan(1);
  const wordset = 'premiu';
  t.equal(create_tiles(wordset).length, wordset.length);
});
