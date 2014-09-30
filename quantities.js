function defineKnownQuantity(quantity, unitShortName, description) {
  var rootQuanitity = quantity;
  var rootUnit = UNITS[unitShortName];
  do {
    rootQuanitity *= rootUnit.multiplier || 1;
    rootUnit = UNITS[rootUnit.unit];
  } while (!isRootUnit(rootUnit));

  if (!KNOWN_QUANTITIES[rootUnit.shortName]) {
    KNOWN_QUANTITIES[rootUnit.shortName] = [];
  }
  KNOWN_QUANTITIES[rootUnit.shortName].push({
    quantity: rootQuanitity,
    description: description
  });
}


var KNOWN_QUANTITIES = {};
// Length.
defineKnownQuantity(25, 'pm', '| times the radius of a hydrogen atom');
defineKnownQuantity(1, 'nm', '| times the width of a carbon nanotube');
defineKnownQuantity(90, 'nm', '| times the width of the HIV virus');
defineKnownQuantity(7, 'um', '| times the diameter of a red blood cell');
defineKnownQuantity(100, 'um', '| times the width of a human hair');
defineKnownQuantity(0.004, 'in', '$| in stacked $1 bills');
defineKnownQuantity(0.3, 'mm', '| grains of sand in a line');
defineKnownQuantity(0.4, 'mm', '| times the thickness of a fingernail');
defineKnownQuantity(4.267, 'cm', '| golf balls stacked on top of each other');
defineKnownQuantity(1.7, 'm', '| times the average height of a human');
defineKnownQuantity(45, 'ft', '| school buses long');
defineKnownQuantity(30, 'm', '| blue whales lined up end-to-end');
defineKnownQuantity(100, 'yd', '| football fields long');
defineKnownQuantity(70.6, 'm', '| Boeing 747s long');
defineKnownQuantity(93.47, 'm', '| Statues of Liberty stacked on top of each other');
defineKnownQuantity(137, 'm', '| times the height of the Great Pyramid of Giza');
defineKnownQuantity(301, 'm', '| Eiffel Towers high');
defineKnownQuantity(838, 'm', '| times the height of the Burj Khalifa, the tallest building in the world');
defineKnownQuantity(4896, 'mi', '| trips from New York to LA and back');
defineKnownQuantity(17406, 'mi', '| trips from LA to Mumbai and back');
defineKnownQuantity(3480, 'km', '| times the width of the Moon');
defineKnownQuantity(6400, 'km', '| walks down the entire Great Wall of China');
defineKnownQuantity(40075, 'km', '| times the Earth\'s circumference (at the equator)');
defineKnownQuantity(299792, 'km', '| light seconds');
defineKnownQuantity(1390000, 'km', '| times the width of the Sun');
defineKnownQuantity(1, 'au', '| times the distance from the Earth to the Sun');
defineKnownQuantity(29.657, 'au', '| times the shortest distance from the Sun to Pluto');
defineKnownQuantity(4.243, 'ly', '| times the distance from our sun to the next nearest star, Proxima Centauri');
defineKnownQuantity(1000, 'ly', '| times the average thickness of the Milky Way galaxy');
defineKnownQuantity(100000, 'ly', '| times the diameter of the Milky Way galaxy');
defineKnownQuantity(2540000, 'ly', '| trips to the nearest spiral galaxy, the Andromeda Galaxy.');
defineKnownQuantity(92000000000, 'ly', '| times the diameter of the observable universe');
// Time.
defineKnownQuantity(12, 'as', '| times the shortest measured period of time');
defineKnownQuantity(1, 'ns', '| machine cycles by a 1 GHz microprocessor');
defineKnownQuantity(1.0167, 'ns', '| times the amount of time it takes light to travel a foot');
defineKnownQuantity(1, 'ms', '| sequential human nueral firings');
defineKnownQuantity(350, 'ms', '| blinks of an eye');
defineKnownQuantity(500000, 'y', '| times the age of modern humans');
defineKnownQuantity(65000000, 'y', '| times the time dinosaurs have been extinct');
defineKnownQuantity(4000000000, 'y', '| times the age of life on Earth');
defineKnownQuantity(143, 'Ps', '| times the age of Earth');
defineKnownQuantity(144, 'Ps', '| times the age of the Solar System');
defineKnownQuantity(430, 'Ps', '| times the age of the Universe');
// Mass/Weight.
defineKnownQuantity(9.11e-31, 'kg', '| electrons');
defineKnownQuantity(1.673e-27, 'kg', '| protons');
defineKnownQuantity(1.674e-27, 'kg', '| hydrogen atoms');
defineKnownQuantity(3e-26, 'kg', '| water molecules');
defineKnownQuantity(8e-26, 'kg', '| titanium atoms');
defineKnownQuantity(3.2e-25, 'kg', '| caffeine molecules');
defineKnownQuantity(3.5e-25, 'kg', '| lead-208 atoms');
defineKnownQuantity(1e-18, 'kg', '| HIV-1 viruses');
defineKnownQuantity(6e-15, 'kg', '| human DNA molecules');
defineKnownQuantity(2.2e-14, 'kg', '| human sperm cells');
defineKnownQuantity(1e-12, 'kg', '| average human cells');
defineKnownQuantity(1.67e-9, 'kg', '| grains of sand');
defineKnownQuantity(7e-8, 'kg', '| human eyebrow hairs');
defineKnownQuantity(2.5e-7, 'kg', '| fruit flies');
defineKnownQuantity(2e-5, 'kg', '| houseflies');
defineKnownQuantity(0.52, 'g', '| raisins');
defineKnownQuantity(1, 'g', '| US dollar bills');
defineKnownQuantity(1.4, 'g', '| standard paperclips');
defineKnownQuantity(30, 'g', '| mice (the furry kind)');
defineKnownQuantity(6.4, 'oz', '| apples');
defineKnownQuantity(430, 'g', '| soccer balls (or "footballs" if live outside the U.S.)');
defineKnownQuantity(2, 'kg', '| Chihuahuas');
defineKnownQuantity(3.25, 'kg', '| newborn babies');
defineKnownQuantity(4.5, 'kg', '| cats');
defineKnownQuantity(155, 'kg', '| lions');
defineKnownQuantity(345, 'kg', '| grand pianos');
defineKnownQuantity(650, 'kg', '| cows');
defineKnownQuantity(2754, 'lb', '| 2014 Honda Civic LXs');
defineKnownQuantity(1750, 'kg', '| rhinos');
defineKnownQuantity(1.8e5, 'kg', '| blue whales');
defineKnownQuantity(735000, 'lb', '| fully-loaded Boeing 747s');
defineKnownQuantity(4.2e5, 'kg', '| International Space Stations');
defineKnownQuantity(7.8e6, 'kg', '| Virginia-class nuclear submarines');
defineKnownQuantity(5.2e7, 'kg', '| RMS Titanics');
defineKnownQuantity(6e9, 'kg', '| Great Pyramids of Giza');
defineKnownQuantity(4e11, 'kg', '| times the total biomass of the human population');


// Sort the quantities.
for (var unitShortName in KNOWN_QUANTITIES) {
  KNOWN_QUANTITIES[unitShortName].sort(function(a, b) {
    return a.quantity - b.quantity;
  });
}