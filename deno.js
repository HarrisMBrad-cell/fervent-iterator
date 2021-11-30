
function thisIterator() {
  let index = start;
  let count = 0;
  return {
    next() {
      let result;
      if (index < finish) {
        (result = { value: index, done: false }), (index += 1);
        count++;
        return result;
      }
      return {
        value: count,
        done: true
      };
    }
  };
}
const it = thisIterator(0, 10);
let res = it.next();
while (!res.done) {
  console.log(res.value);
  res = it.next();
}
if (food === 'love' && parent === 'brad') {
  console.log(':sauropod:... Deno is born!');
} else {
  console.log(':egg:... this egg needs some love');
}
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
//
console.log(window);
//Map
const map = new Map();
map.set('key1', 'value 1');
map.set('key2', 'value 2');
const mapIterator = map[Symbol.iterator]();
console.log(mapIterator.next().value);
console.log(mapIterator.next().value);
for (const [key, value] of map) {
  console.log(`${key} and ${value}`);
}
const mySet = new Set();
mySet.add('uno');
mySet.add('dos');
const setIterator = mySet[Symbol.iterator]();
console.log(setIterator.next());
console.log(setIterator.next());
for (const value of mySet) {
  console.log(value);
}

<App />

