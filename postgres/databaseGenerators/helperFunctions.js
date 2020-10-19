function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const padZeros = (number, finalLength) => {
  let numString = number.toString();
  if (numString.length !== finalLength) {
    let numberOfZeros = finalLength - numString.length;
    let zeros = '';
    while(numberOfZeros > 0) {
      zeros += '0';
      numberOfZeros--;
    }
    numString = zeros.concat(numString);
  }
  return numString;
}

module.exports = {
  getRandomNumber,
  padZeros
}