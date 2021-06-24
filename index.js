// Error: variable is defined but never used
// eslint-disable-next-line no-unused-vars
const example = true;

// Error: function is empty
const sayHello = () => {
  console.log(example);
};

// Error: strings should use single quotes
sayHello('hello');
