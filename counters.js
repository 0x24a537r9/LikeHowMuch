var counters = {};


function incCounter(quantity, unit) {
  var keyName = getCounterKeyName(quantity, unit);
  var newVal = counters[keyName] >= 0 ? counters[keyName] + 1 : 0;
  counters[keyName] = newVal;
  return newVal;
}


function resetCounter(quantity, unit) {
  counters[getCounterKeyName(quantity, unit)] = 0;
  return 0;
}


function getCounterKeyName(quantity, unit) {
  return quantity + ' ' + unit.shortName;
}