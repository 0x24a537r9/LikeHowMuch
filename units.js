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


function defineSiPrefixedUnits(shortName, opt_prefixes) {
  // TODO: Check for collisions.
  var unit = UNITS[shortName];
  opt_prefixes = opt_prefixes || 'yzafpnumcdDhkMGTPEZY';
  for (var i = 0; i < opt_prefixes.length; ++i) {
    var prefix = SI_PREFIXES[opt_prefixes[i]];
    defineUnit(prefix.shortName + unit.shortName,
               prefix.longName + unit.singularLongName,
               prefix.longName + unit.pluralLongName,
               unit.shortName,
               prefix.multiplier * unit.multiplier);
    if (prefix.altShortName) {
      aliasUnit(prefix.shortName + unit.shortName, prefix.altShortName + unit.shortName);
    }
  }
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
defineUnit('m', 'meter', 'meters', 'm', 1);
defineSiPrefixedUnits('m');
defineUnit('metres', 'metre', 'metres', 'm', 1);
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
defineUnit('\u00C5', '\u00E5ngstr\u00F6m', '\u00E5ngstr\u00F6ms', 'm', 1e-10, ['angstrom', 'angstroms']);
defineUnit('lP', 'Planck length', 'Planck lengths', 'm', 1.61619926e-35, ['planck length', 'planck lengths']);
defineUnit('cubits', 'cubit', 'cubits', 'cm', 45.72);
