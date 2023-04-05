const test = require('tape');
const { create_tiles, order_char_set } = require('./index');

test('should sort word char set list into ordered char set', (t) => {
  t.plan(1);
  const char_set_list = 'aeg|aegr|aegrs|adegrs|abdegrs|abdegirs';
  const expected = 'aegrsdbi';
  t.deepEqual(order_char_set(char_set_list), expected);
});

test('should create tile objects with each char of char set', (t) => {
  t.plan(1);
  const char_set = 'aegrsdbi';
  const expected = ['a', 'e', 'g', 'r', 's', 'd', 'b', 'i'];
  t.deepEqual(
    create_tiles(char_set).map((x) => x.char),
    expected
  );
});

test('should allow user to select tiles', (t) => {
  t.plan(2);
  const tiles = create_tiles('aegrsdbi');
  const first_tile = tiles[0];
  t.equal(first_tile.select(tiles), 0);
  const second_tile = tiles[1];
  console.log(tiles);
  t.equal(second_tile.select(tiles), 1);
});
