const ftoc = function(a) {
  let b = (a - 32)*(5/9);
  let rounded = Math.round(b * 10) / 10;
  return rounded;
};

const ctof = function(a) {
  let b = (a * 9/5) + 32;
  let rounded = Math.round(b * 10) / 10;
  return Math.abs(rounded);

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};



// rounded Math.round(num * 10) / 10