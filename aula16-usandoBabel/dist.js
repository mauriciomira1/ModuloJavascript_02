"use strict";

var media = function media() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (accum, num) {
    return accum += num;
  }, 0);
  return sum / numbers.length;
};
console.log("A m\xE9dia aritm\xE9tica \xE9: ".concat(media(10, 20, 30, 5)));
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var num = _ref.num,
      peso = _ref.peso;
    return accum + num * (peso !== null && peso !== void 0 ? peso : 1);
  }, 0);
  var sumPeso = entries.reduce(function (accum, _ref2) {
    var peso = _ref2.peso;
    return accum + (peso !== null && peso !== void 0 ? peso : 1);
  }, 0);
  return sum / sumPeso;
};
console.log("A m\xE9dia ponderada \xE9: ".concat(mediaPonderada({
  num: 9,
  peso: 3
}, {
  num: 7
}, {
  num: 10,
  peso: 1
})));
var mediana = function mediana() {
  for (var _len3 = arguments.length, numMediana = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numMediana[_key3] = arguments[_key3];
  }
  var numMedianaOrdened = [].concat(numMediana).sort(function (a, b) {
    return a - b;
  });
  var itemCentral = Math.floor(numMedianaOrdened.length / 2);
  if (numMedianaOrdened.length % 2 == 0) {
    var middle1 = numMedianaOrdened[itemCentral - 1];
    var middle2 = numMedianaOrdened[itemCentral];
    return (middle1 + middle2) / 2;
  } else {
    return numMedianaOrdened[itemCentral];
  }
};
console.log("A mediana \xE9: ".concat(mediana(1, 3, 3, 4)));
var moda = function moda() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // [ [number, qtd], [number, qtd], [number, qtd] ]
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("A moda \xE9: ".concat(moda(1, 4, 4, 6, 7, 8, 5, 5, 7, 4, 11, 10)));
