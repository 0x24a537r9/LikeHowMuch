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
  UNITS[shortName.replace(/\s+/g, '')] = {
    shortName: shortName,
    singularLongName: singularLongName,
    pluralLongName: pluralLongName,
    unit: unit.replace(/\s+/g, ''),
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
  UNITS[longName] = {unit: shortName.replace(/\s+/g, '')};
}


function defineSiPrefixedUnits(shortName, singularLongName, pluralLongName, opt_altShortNames,
                               opt_altLongNames, opt_exponent, opt_prefixes) {
  opt_altShortNames = opt_altShortNames || [];
  opt_altLongNames = opt_altLongNames || [];
  opt_exponent = opt_exponent || 1;
  opt_prefixes = opt_prefixes || 'yzafpnumcdDhkMGTPEZY';

  // TODO: Check for collisions.
  var unit = UNITS[shortName.replace('_', '')];
  for (var i = 0; i < opt_prefixes.length; ++i) {
    var prefix = SI_PREFIXES[opt_prefixes[i]];
    defineUnit(shortName.replace('_', prefix.shortName),
               singularLongName.replace('_', prefix.longName),
               pluralLongName.replace('_', prefix.longName),
               unit.shortName,
               Math.pow(prefix.multiplier, opt_exponent));
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

/********************  Length  ********************/

defineUnit('m', 'meter', 'meters', 'm', 1);
defineSiPrefixedUnits('_m', '_meter', '_meters', [], ['_metre', '_metres']);
defineUnit('microns', 'micron', 'microns', 'm', 1e-6);
defineUnit('mils', 'mil', 'mils', 'in', 1 / 1000, ['thou', 'thousandth', 'thousandths']);
defineUnit('thirtysecondths', 'thirtysecondth of an inch', 'thirtysecondths of an inch', 'in',
           1 / 32);
defineUnit('sixteenths', 'sixteenth of an inch', 'sixteenths of an inch', 'in', 1 / 16);
defineUnit('eighths', 'eighth of an inch', 'eighths of an inch', 'in', 1 / 8);
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

/********************  Time  ********************/

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

/********************  Mass / Weight  ********************/

defineUnit('g', 'gram', 'grams', 'g', 1);
defineSiPrefixedUnits('_g', '_gram', '_grams', [], ['_gramme', '_grammes']);
defineUnit('lb', 'pound', 'pounds', 'g', 453.592);
defineUnit('dr', 'dram', 'drams', 'oz', 1 / 16, ['drachm', 'drachms']);
defineUnit('oz', 'ounce', 'ounces', 'g', 28.3495);
defineUnit('gr', 'grain', 'grains', 'mg', 64.79891, ['troy grain', 'troy grains']);
defineUnit('oz t', 'troy ounce', 'troy ounces', 'g', 31.1034768);
defineUnit('lb t', 'troy pound', 'troy pounds', 'oz t', 12);
defineUnit('ct', 'carat', 'carats', 'g', 0.2);
defineUnit('t', 'tonne', 'tonnes', 'kg', 1000, ['metric ton', 'metric tons']);
defineUnit('tons', 'ton', 'tons', 'lb', 2000, ['short ton', 'short tons']);
defineUnit('long tons', 'long ton', 'long tons', 'lb', 2240);

/********************  Speed  ********************/

defineUnit('m/s', 'meter per second', 'meters per second', 'm/s', 1);
defineSiPrefixedUnits('_m/s', '_meter per second', '_meters per second', [], [
  '_meter/second', '_meters/second', '_metre per second', '_metres per second', '_metre/second',
  '_metres/second'
]);
aliasUnit('km/s', 'kps');
defineUnit('km/h', 'kilometer per hour', 'kilometers per hour', 'm/s', 5 / 18, ['kph']);
defineUnit('M', 'Mach', 'Mach', 'm/s', 340.29, ['Ma', 'mach']);
defineUnit('kn', 'knot', 'knots', 'km/h', 1.852, ['kt', 'NMPH']);
defineUnit('mph', 'mile per hour', 'miles per hour', 'm/s', 0.44704, ['mi/h']);
defineUnit('ft/s', 'foot per second', 'feet per second', 'mph', 15 / 22, ['fps']);
defineUnit('in/s', 'inch per second', 'inches per second', 'ft/s', 1 / 12, ['fps']);
defineUnit('C', 'time the speed of light', 'times the speed of light', 'm/s', 299792458);

/********************  Area  ********************/

defineUnit('m\u00B2', 'square meter', 'square meters', 'm\u00B2', 1, [
  'square metre', 'square metres', 'meter square', 'meters square', 'meter squared',
  'meters squared', 'm2'
]);
defineSiPrefixedUnits('_m\u00B2', 'square _meter', 'square _meters', ['_m2'], [
  '_meter square', '_meters square', '_meter squared', '_meters squared', '_meter2', '_meters2',
  'square _metre', 'square _metres', '_metre square', '_metres square', '_metre squared',
  '_metres squared', '_metre2', '_metres2'
], 2);
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

/********************  Volume  ********************/

defineUnit('m\u00B3', 'cubic meter', 'cubic meters', 'm\u00B3', 1, [
  'cubic metre', 'cubic metres', 'meter cubic', 'meters cubic', 'meter cubed', 'meters cubed', 'm3'
]);
defineSiPrefixedUnits('_m\u00B3', 'cubic _meter', 'cubic _meters', ['_m3'], [
  '_meter cubic', '_meters cubic', '_meter cubed', '_meters cubed', '_meter3', '_meters3',
  'cubic _metre', 'cubic _metres', '_metre cubic', '_metres cubic', '_metre cubed', '_metres cubed',
  '_metre3', '_metres3'
], 3);
aliasUnit('mm\u00B3', 'mill');
aliasUnit('mm\u00B3', 'mills');
aliasUnit('cm\u00B3', 'cc');
aliasUnit('cm\u00B3', 'ccs');
aliasUnit('cm\u00B3', 'ccms');
defineUnit('L', 'liter', 'liters', 'm\u00B3', 0.001, ['l', 'litre', 'litres']);
defineSiPrefixedUnits('_L', '_liter', '_liters', ['_l'], ['_litre', '_litres']);
defineUnit('ft\u00B3', 'cubic foot', 'cubic feet', 'm\u00B3', 0.0283168, [
  'sq ft', 'cubic ft', 'foot cubic', 'feet cubic', 'ft cubic', 'foot cubed', 'feet cubed',
  'ft cubed', 'ft2'
]);
defineUnit('in\u00B3', 'cubic inch', 'cubic inches', 'ft\u00B3', 1 / (12 * 12 * 12), [
  'sq in', 'cubic in', 'inch cubic', 'inches cubic', 'in cubic', 'inch cubed', 'inches cubed',
  'in cubed', 'in2'
]);
defineUnit('mi\u00B3', 'cubic mile', 'cubic miles', 'ft\u00B3', 5280 * 5280 * 5280, [
  'sq mi', 'cubic mi', 'mile cubic', 'miles cubic', 'mi cubic', 'mile cubed', 'miles cubed',
  'mi cubed', 'in2'
]);
defineUnit('yd\u00B3', 'cubic yard', 'cubic yards', 'ft\u00B3', 3 * 3 * 3, [
  'sq yd', 'cubic yd', 'yard cubic', 'yards cubic', 'yd cubic', 'yard cubed', 'yards cubed',
  'yd cubed', 'in2'
]);
defineUnit('smidgens', 'smidgen', 'smidgens', 'tsp', 1 / 32);
defineUnit('pinches', 'pinch', 'pinches', 'tsp', 1 / 16);
defineUnit('dashes', 'dash', 'dashes', 'tsp', 1 / 8);
defineUnit('tsp', 'teaspoon', 'teaspoons', 'm\u00B3', 4.92892e-6);
defineUnit('dstspn', 'dessertspoon', 'dessertspoons', 'tsp', 2);
defineUnit('tbsp', 'tablespoon', 'tablespoons', 'tsp', 3, ['tbl']);
defineUnit('fl oz', 'fluid ounce', 'fluid ounces', 'tsp', 6, ['oz fl']);
defineUnit('fl dr', 'fluid dram', 'fluid drams', 'fl oz', 1 / 8, [
  'fluid drachm', 'fluid drachms', 'fluidram', 'fluidrams', 'fluidrachm', 'fluidrachms', 'f3'
]);
defineUnit('shots', 'shot', 'shots', 'fl oz', 1.5);
defineUnit('gills', 'gill', 'gills', 'fl oz', 4);
defineUnit('cups', 'cup', 'cups', 'tbsp', 16, ['C', 'c']);
defineUnit('pt', 'pint', 'pints', 'cups', 2, ['p']);
defineUnit('qt', 'quart', 'quarts', 'pt', 2);
defineUnit('gal', 'gallon', 'gallons', 'qt', 4);
defineUnit('imp fl oz', 'imperial fluid ounce', 'imperial fluid ounces', 'm\u00B3', 2.84131e-5);
defineUnit('imp fl dr', 'imperial fluid dram', 'imperial fluid dram', 'imp fl oz', 1 / 8, [
  'imperial fluid drachm', 'imperial fluid drachms', 'imperial fluidram', 'imperial fluidrams',
  'imperial fluidrachm', 'imperial fluidrachms'
]);
defineUnit('imp gills', 'imperial gill', 'imperial gills', 'imp fl oz', 5);
defineUnit('imp cups', 'imperial cup', 'imperial cups', 'imp fl oz', 10);
defineUnit('imp pts', 'imperial pint', 'imperial pints', 'imp cups', 2, ['imp p']);
defineUnit('imp quarts', 'imperial quart', 'imperial quarts', 'imp pts', 2);
defineUnit('imp gal', 'imperial gallon', 'imperial gallons', 'imp qts', 4);
defineUnit('imp pecks', 'imperial peck', 'imperial pecks', 'imp gals', 2);
defineUnit('imp bsh', 'imperial bushel', 'imperial bushels', 'imp pecks', 4, ['imp bu']);
defineUnit('dry cups', 'dry cup', 'dry cups', 'cups', 1.1636);
defineUnit('dry pt', 'dry pint', 'dry pints', 'pt', 1.1636, ['dry p']);
defineUnit('dry qt', 'dry quart', 'dry quarts', 'qt', 1.1636);
defineUnit('dry gal', 'dry gallon', 'dry gallons', 'gal', 1.1636);
defineUnit('pecks', 'peck', 'pecks', 'dry gal', 2);
defineUnit('bsh', 'bushel', 'bushels', 'pecks', 4, ['bu']);

/********************  Memory  ********************/

defineUnit('b', 'bit', 'bits', 'b', 1);
defineSiPrefixedUnits('_b', '_bit', '_bits', [], [], 1, 'DhkMGTPEZY');
defineUnit('B', 'byte', 'bytes', 'b', 8);
defineSiPrefixedUnits('_B', '_byte', '_bytes', [], [], 1, 'DhkMGTPEZY');
aliasUnit('KiB', 'KB');
defineUnit('KiB', 'kibibyte', 'kibibytes', 'B', Math.pow(1024, 1));
defineUnit('MiB', 'mebibyte', 'mebibytes', 'B', Math.pow(1024, 2));
defineUnit('GiB', 'gibibyte', 'gibibytes', 'B', Math.pow(1024, 3));
defineUnit('TiB', 'tebibyte', 'tebibytes', 'B', Math.pow(1024, 4));
defineUnit('PiB', 'pebibyte', 'pebibytes', 'B', Math.pow(1024, 5));
defineUnit('EiB', 'exbibyte', 'exbibytes', 'B', Math.pow(1024, 6));
defineUnit('ZiB', 'zebibyte', 'zebibytes', 'B', Math.pow(1024, 7));
defineUnit('YiB', 'yobibyte', 'yobibytes', 'B', Math.pow(1024, 8));
