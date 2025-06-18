//* Exporting multiple modules in one file

//as we can see we added the two modules here which is the add and subtract
exports.add = (a, b) => {
  return a + b;
};

exports.subtract = (a, b) => {
  return a - b;
};
