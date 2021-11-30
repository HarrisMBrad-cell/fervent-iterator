
const arr = [0, 3, 5, 8, 13, 25];

const it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
const mapIterator = map[Symbol.iterator]();

console.log(mapIterator.next().value);
console.log(mapIterator.next().value);

for (const [key, value] of map) {
  console.log(`${key} and ${value}`)
}
