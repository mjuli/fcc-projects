const romanLetters = {
  0: ['I', 'V', 'X'],
  1: ['X', 'L', 'C'],
  2: ['C', 'D', 'M'],
  3: ['M']
}

function convert(num, order){
  let covertedNumber = 
    num == 0 && ' ' ||
    num < 4 && romanLetters[order][0].repeat(num) ||
    num == 4 && romanLetters[order][0] + romanLetters[order][1] ||
    num < 9 && romanLetters[order][1] + romanLetters[order][0].repeat(num - 5) ||
    num == 9 && romanLetters[order][0] + romanLetters[order][2]

  return covertedNumber
}

function convertToRoman(num) {
  let romanNumber = []

  const numArr = num
    .toString()
    .split('')
    .reverse()

  romanNumber = numArr
    .map((num, index) => convert(num, index))

  return romanNumber
    .reverse()
    .join('')
}
