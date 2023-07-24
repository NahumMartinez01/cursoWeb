function add7(n) {
  return n + 7;
}

//console.log(add7(10))

function multiply(nu1, nu2) {
  return nu1 * nu2;
}

//console.log(multiply(10, 10))

function capitalize(s) {
  const text = s.charAt(0).toUpperCase();
  const slice = s.toLowerCase().slice(1);

  return text.concat("", slice);
}

console.log(capitalize("mecANISmO"));

function lastLetter(s) {
  const text = s.slice(-1);

  return text;
}

console.log(lastLetter("abcd"));
