const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment-button");
const resetButton = document.getElementById("reset-button");

let count = 0;

function toRoman(num) {
  const roman = [
  'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
  'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX',
  'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX',
  'XXXI', 'XXXII', 'XXXIII', 'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXIX', 'XL',
  'XLI', 'XLII', 'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII', 'XLIX', 'L',
  'LI', 'LII', 'LIII', 'LIV', 'LV', 'LVI', 'LVII', 'LVIII', 'LIX', 'LX',
  'LXI', 'LXII', 'LXIII', 'LXIV', 'LXV', 'LXVI', 'LXVII', 'LXVIII', 'LXIX', 'LXX',
  'LXXI', 'LXXII', 'LXXIII', 'LXXIV', 'LXXV', 'LXXVI', 'LXXVII', 'LXXVIII', 'LXXIX', 'LXXX',
  'LXXXI', 'LXXXII', 'LXXXIII', 'LXXXIV', 'LXXXV', 'LXXXVI', 'LXXXVII', 'LXXXVIII', 'LXXXIX', 'XC',
  'XCI', 'XCII', 'XCIII', 'XCIV', 'XCV', 'XCVI', 'XCVII', 'XCVIII', 'XCIX', 'C'
];
  return roman[num - 1];
}

incrementButton.addEventListener("click", () => {
  if (count < 100) {
    count++;
    counterElement.textContent = `${toRoman(count)} (${count})`;
  }
});

const button = document.getElementById('increment-button2');
const counter1 = document.getElementById('counter');

button.addEventListener('click', () => {
  if (count > 0) {
    count--;
    counterElement.textContent = `${toRoman(count)} (${count})`;
  }
});

resetButton.addEventListener('click', () => {
  count = 0;
  if (count === 0) {
    counterElement.textContent = "N";
  } else {
    counterElement.textContent = `(${count})`;
  }
});