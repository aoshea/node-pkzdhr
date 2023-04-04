const test = require('tape');
const { create_tiles, order_char_set } = require('./index');

test('should sort word char set into ordered list', (t) => {
  t.plan(1);
  const char_set = 'aeg|aegr|aegrs|adegrs|abdegrs|abdegirs';
  const expected = ['aeg', 'aegr', 'aegrs', 'aegrsd', 'aegrsdb', 'aegrsdbi'];
  t.deepEqual(order_char_set(char_set), expected);
});

test('should create tile objects for each char in puzzle word', (t) => {
  t.plan(1);
  const wordset = 'premiu';
  t.equal(create_tiles(wordset).length, wordset.length);
});
