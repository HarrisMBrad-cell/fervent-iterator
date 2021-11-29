//import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const args = [0, 3, 5, 8, 13];

const food = Deno.args[0];
const it = args[Symbol.iterator]();
const parent = Deno.args[1];

const rootElement = document.getElementById("root");
// Basic Iterator w/o the objects...
function myIterator(start, finish) {
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

//const it = myIterator(0, 10);

let res = it.next();
while (!res.done) {
  console.log(res.value);
  res = it.next();
}

if (food === "love" && parent === "brad") {
  console.log("🦕... Deno is born!");
} else {
  console.log("🥚... this egg needs some love");
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
map.set("key1", "value 1");
map.set("key2", "value 2");
const mapIterator = map[Symbol.iterator]();
console.log(mapIterator.next().value);
console.log(mapIterator.next().value);

for (const [key, value] of map) {
  console.log(`${key} and ${value}`);
}

const mySet = new Set();
mySet.add("uno");
mySet.add("dos");

const setIterator = mySet[Symbol.iterator]();
console.log(setIterator.next());
console.log(setIterator.next());

for (const value of mySet) {
  console.log(value);
}
ReactDOM.render(
  //     <StrictMode>
  <App />,
  //    </StrictMode>
  rootElement
);
