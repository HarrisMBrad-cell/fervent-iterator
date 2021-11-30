const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`What would you like to log today? `, async (item) => {
  const { data } = await axios.get(`http://localhost:3001/food`);
  const it = data[Symbol.iterator]();
  let position = it.next();
  while (!position.done) {
    const food = position.value.name;
    if (food === item) {
      console.log(`${item} has ${position.value.cals} calories`);

    }
    position = it.next();
  }
  readline.close()
})

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

const mySet = new Set();
mySet.add('one');
mySet.add('two');

const setIterator = mySet[Symbol.iterator]();
console.log(seIterator.next());
console.log(setIterator.next());

for (const value of mySet) {
  console.log(value);
}