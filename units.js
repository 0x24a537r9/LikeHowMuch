function defineSiPrefix(key, shortName, longName, multiplier, opt_altShortName) {
  SI_PREFIXES[key] = {
    shortName: shortName,
    longName: longName,
    multiplier: multiplier,
    altShortName: opt_altShortName
  }
}


function defineUnit(shortName, singularLongName, pluralLongName, unit, multiplier, opt_aliases) {
  // TODO: Check for collisions.
  UNITS[shortName] = {
    shortName: shortName,
    singularLongName: singularLongName,
    pluralLongName: pluralLongName,
    unit: unit,
    multiplier: multiplier
  };
  aliasUnit(shortName, singularLongName.replace(/\s+/g, ''));
  if (shortName != pluralLongName) {
    aliasUnit(shortName, pluralLongName.replace(/\s+/g, ''));
  }

  opt_aliases = opt_aliases || [];
  for (var i = 0; i < opt_aliases.length; ++i) {
    aliasUnit(shortName, opt_aliases[i].replace(/\s+/g, ''));
  }
}


function aliasUnit(shortName, longName) {
  // TODO: Check for collisions.
  // TODO: Ensure aliased unit exists.
  UNITS[longName] = {unit: shortName};
}


function defineSiPrefixedUnits(shortName, singularLongName, pluralLongName, opt_altShortNames,
                               opt_altLongNames, opt_prefixes) {
  opt_altShortNames = opt_altShortNames || [];
  opt_altLongNames = opt_altLongNames || [];

  // TODO: Check for collisions.
  var unit = UNITS[shortName.replace('_', '')];
  opt_prefixes = opt_prefixes || 'yzafpnumcdDhkMGTPEZY';
  for (var i = 0; i < opt_prefixes.length; ++i) {
    var prefix = SI_PREFIXES[opt_prefixes[i]];
    defineUnit(shortName.replace('_', prefix.shortName),
               singularLongName.replace('_', prefix.longName),
               pluralLongName.replace('_', prefix.longName),
               unit.shortName,
               prefix.multiplier * unit.multiplier);
    if (prefix.altShortName) {
      aliasUnit(shortName.replace('_', prefix.shortName),
                shortName.replace('_', prefix.altShortName));
    }

    for (var j = 0; j < opt_altShortNames.length; ++j) {
      aliasUnit(shortName.replace('_', prefix.shortName),
                opt_altShortNames[j].replace('_', prefix.shortName));
      if (prefix.altShortName) {
        aliasUnit(prefix.shortName + unit.shortName, prefix.altShortName + unit.shortName);
      }
    }

    for (var j = 0; j < opt_altLongNames.length; ++j) {
      aliasUnit(shortName.replace('_', prefix.shortName),
                opt_altLongNames[j].replace(/\s+/g, '').replace('_', prefix.longName));
    }
  }
}


function isRootUnit(unit) {
  return unit.shortName == unit.unit;
}


var SI_PREFIXES = {};
defineSiPrefix('y', 'y', 'yocto', 1e-24);
defineSiPrefix('z', 'z', 'zepto', 1e-21);
defineSiPrefix('a', 'a', 'atto', 1e-18);
defineSiPrefix('f', 'f', 'femto', 1e-15);
defineSiPrefix('p', 'p', 'pico', 1e-12);
defineSiPrefix('n', 'n', 'nano', 1e-9);
defineSiPrefix('u', '\u03BC', 'micro', 1e-6, 'u');
defineSiPrefix('m', 'm', 'milli', 1e-3);
defineSiPrefix('c', 'c', 'centi', 1e-2);
defineSiPrefix('d', 'd', 'deci', 1e-1);
defineSiPrefix('D', 'da', 'deca', 1e1);
defineSiPrefix('h', 'h', 'hecto', 1e2);
defineSiPrefix('k', 'k', 'kilo', 1e3);
defineSiPrefix('M', 'M', 'mega', 1e6);
defineSiPrefix('G', 'G', 'giga', 1e9);
defineSiPrefix('T', 'T', 'tera', 1e12);
defineSiPrefix('P', 'P', 'peta', 1e15);
defineSiPrefix('E', 'E', 'exa', 1e18);
defineSiPrefix('Z', 'Z', 'zetta', 1e21);
defineSiPrefix('Y', 'Y', 'yotta', 1e24);


var UNITS = {};
// Length.
defineUnit('m', 'meter', 'meters', 'm', 1);
defineSiPrefixedUnits('_m', '_meter', '_meters', [], ['_metre', '_metres']);
defineUnit('microns', 'micron', 'microns', 'm', 1e-6);
defineUnit('in', 'inch', 'inches', 'cm', 2.54, ['"']);
defineUnit('paces', 'pace', 'paces', 'in', 30);
defineUnit('ft', 'foot', 'feet', 'in', 12, ['\'']);
defineUnit('yd', 'yard', 'yards', 'ft', 3);
defineUnit('stories', 'story', 'stories', 'ft', 9);
defineUnit('furlongs', 'furlong', 'furlongs', 'yd', 220);
defineUnit('ftm', 'fathom', 'fathoms', 'ft', 6);
defineUnit('mi', 'mile', 'miles', 'ft', 5280);
defineUnit('M', 'nautical mile', 'nautical miles', 'm', 1852, ['NM', 'nmi']);
defineUnit('pc', 'parsec', 'parsecs', 'm', 3.08567758e16);
defineUnit('au', 'astronomical unit', 'astronomical units', 'm', 149597870700, ['AU', 'ua', 'UA']);
defineUnit('ly', 'light year', 'light years', 'm', 9460730472580800);
defineUnit('\u00C5', '\u00E5ngstr\u00F6m', '\u00E5ngstr\u00F6ms', 'm', 1e-10, ['\u212B', 'angstrom', 'angstroms']);
defineUnit('lP', 'Planck length', 'Planck lengths', 'm', 1.61619926e-35, ['planck length', 'planck lengths']);
defineUnit('cubits', 'cubit', 'cubits', 'cm', 45.72);
// Time.
defineUnit('s', 'second', 'seconds', 's', 1);
defineSiPrefixedUnits('_s', '_second', '_seconds');
defineUnit('min', 'minute', 'minutes', 's', 60);
defineUnit('hr', 'hour', 'hours', 'min', 60);
defineUnit('d', 'day', 'days', 'hr', 24);
defineUnit('wk', 'week', 'weeks', 'd', 7);
defineUnit('mo', 'month', 'months', 'd', 30);
defineUnit('fortnights', 'fortnight', 'fortnights', 'd', 14);
defineUnit('y', 'year', 'years', 'd', 365.242, ['yr']);
defineUnit('decades', 'decade', 'decades', 'y', 10);
defineUnit('centuries', 'century', 'centuries', 'y', 100);
defineUnit('millenia', 'millenium', 'millenia', 'y', 1000);
defineUnit('epochs', 'epoch', 'epochs', 'y', 1e6);
// Mass/Weight.
defineUnit('g', 'gram', 'grams', 'g', 1);
defineSiPrefixedUnits('_g', '_gram', '_grams', [], ['_gramme', '_grammes']);
defineUnit('lb', 'pound', 'pounds', 'g', 453.592);
defineUnit('oz', 'ounce', 'ounces', 'g', 28.3495);
defineUnit('ozt', 'troy ounce', 'troy ounces', 'g', 31.1034768);
defineUnit('ct', 'carat', 'carats', 'g', 0.2);
defineUnit('t', 'tonne', 'tonnes', 'kg', 1000, ['metric ton', 'metric tons']);
defineUnit('tons', 'ton', 'tons', 'lb', 2000, ['short ton', 'short tons']);
defineUnit('long tons', 'long ton', 'long tons', 'lb', 2240);
// Speed.
defineUnit('m/s', 'meter per second', 'meters per second', 'm/s', 1);
// TODO: Add support for "Mach 2.3"-like queries.
defineSiPrefixedUnits('_m/s', '_meter per second', '_meters per second', [], [
  '_meter/second', '_meters/second', '_metre per second', '_metres per second', '_metre/second',
  '_metres/second'
]);
aliasUnit('km/s', 'kps');
defineUnit('km/h', 'kilometer per hour', 'kilometers per hour', 'm/s', 5 / 18, ['kph']);
defineUnit('kn', 'knot', 'knots', 'km/h', 1.852, ['kt', 'NMPH']);
defineUnit('mph', 'mile per hour', 'miles per hour', 'm/s', 0.44704, ['mi/h']);
defineUnit('ft/s', 'foot per second', 'feet per second', 'mph', 15 / 22, ['fps']);
defineUnit('in/s', 'inch per second', 'inches per second', 'ft/s', 1 / 12, ['fps']);
// Area.
defineUnit('m\u00B2', 'square meter', 'square meters', 'm\u00B2', 1, [
  'square metre', 'square metres', 'meter square', 'meters square', 'meter squared',
  'meters squared', 'm2'
]);
defineSiPrefixedUnits('_m\u00B2', 'square _meter', 'square _meters', ['_m2'], [
  '_meter square', '_meters square', '_meter squared', '_meters squared', '_meter2', '_meters2',
  'square _metre', 'square _metres', '_metre square', '_metres square', '_metre squared',
  '_metres squared', '_metre2', '_metres2'
]);
defineUnit('hectares', 'hectare', 'hectares', 'm\u00B2', 10000);
defineUnit('ft\u00B2', 'square foot', 'square feet', 'm\u00B2', 0.092903, [
  'sq ft', 'square ft', 'foot square', 'feet square', 'ft square', 'foot squared', 'feet squared',
  'ft squared', 'ft2'
]);
defineUnit('in\u00B2', 'square inch', 'square inches', 'ft\u00B2', 1 / (12 * 12), [
  'sq in', 'square in', 'inch square', 'inches square', 'in square', 'inch squared', 'inches squared',
  'in squared', 'in2'
]);
defineUnit('mi\u00B2', 'square mile', 'square miles', 'ft\u00B2', 5280 * 5280, [
  'sq mi', 'square mi', 'mile square', 'miles square', 'mi square', 'mile squared', 'miles squared',
  'mi squared', 'in2'
]);
defineUnit('yd\u00B2', 'square yard', 'square yards', 'ft\u00B2', 3 * 3, [
  'sq yd', 'square yd', 'yard square', 'yards square', 'yd square', 'yard squared', 'yards squared',
  'yd squared', 'in2'
]);
defineUnit('acres', 'acre', 'acres', 'ft\u00B2', 43560);
