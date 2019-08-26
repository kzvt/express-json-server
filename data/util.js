const Names = ['Adam', 'Bruce', 'Kumar', 'Ashish', 'Maria', 'Eva', 'John', 'Jon', 'Kevin', 'Adrian', 'Bob', 'Stephen', 'Marek'];
const Lnames = ['Smith', 'Nowak', 'Kowalski', 'Brown', 'Mulwani', 'Singh', 'Li', 'Kumar', 'Davis', 'Johnes'];

function rand(max = 20, min = 0) {
  return Math.round(Math.random() * (max - min) + min);
}

function text(hm = 10) {
  const c = 'abcdefghijklmnoprstuvwxyz1234567890 ,.';
  let wrd = '';
  for (let x = 0; x < hm; x++) {
    wrd += c.substr(rand(c.length - 1), 1);
  }
  return wrd;
}

function person() {
  return `${randOfArray(Names)} ${randOfArray(Lnames)}`;
}


function randOfArray(arr) {
  const e = Math.floor(Math.random() * arr.length);
  return arr[e];
}

function randDate() {
  return new Date(rand(2019, 1999), rand(11), rand(31, 1), rand(24, 1), rand(60), rand(60));
}

module.exports = {
  rand,
  text,
  person,
  randOfArray,
  randDate
}