function flIterator(start, finish) {
  let index = start;
  let count = 0;

  return {
    next() {
      let result;
      if (index < finish) {
        result = { value: index, done: false };
        index += 1;
        count++;
        return result;
      }
      return {
        value: count,
        done: true
      }
    }
  }
}

const fliterator = myIterator(0, 10);
let res = fliterator.next();
while(!result.done) {
  console.log(res.value)
  res = fliterator.next()
}