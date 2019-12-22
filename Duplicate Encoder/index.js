function duplicateEncode(word) {
  const lower_word = word.toLowerCase();
  let res = '';

  for (let i = 0; i < lower_word.length; i++) {
    const symbol = lower_word.charAt(i);
    const braket = lower_word.indexOf(symbol) !== lower_word.lastIndexOf(symbol) ? ")" : "(";

    res += braket;
  }

  return res;
}

module.exports = duplicateEncode;