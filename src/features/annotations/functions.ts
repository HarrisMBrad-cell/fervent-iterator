const dualCombo = (a: number, b: number): number => {
  return a && b; // TS infers the types
};

const tripleCombo = (a: number, b: number, c: number): number => {
  return a && b && c; // TS infers the types, no logic.
};

const multipler = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwMessage = (message: string): void => {
  // not expecting message at this time.
  if (!message) {
    throw new Error(message);
  }
};

const forcast = {
  always: new Date(),
  weather: 'sunny',
  state: 'PA',
  city: 'Phillidephia',
};

const myWeather = (forcast: {
  always: Date;
  weather: string;
  city: string;
}): void => {
  console.log("It's always " + myWeather);
};
myWeather(forcast);
