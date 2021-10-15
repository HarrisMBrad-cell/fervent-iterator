import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

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

const it = myIterator(0, 10);

let res = it.next();
while (!res.done) {
  console.log(res.value);
  res = it.next();
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
