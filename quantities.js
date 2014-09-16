function defineQuantity(quantity, unitShortName, description) {
  var rootQuanitity = quantity;
  var rootUnit = UNITS[unitShortName];
  do {
    rootQuanitity *= rootUnit.multiplier || 1;
    rootUnit = UNITS[rootUnit.unit];
  } while (rootUnit.multiplier != 1);

  if (!QUANTITIES[rootUnit.shortName]) {
    QUANTITIES[rootUnit.shortName] = [];
  }
  QUANTITIES[rootUnit.shortName].push({
    quantity: rootQuanitity,
    description: description
  });
}


var QUANTITIES = {};
// Length.
defineQuantity(25, 'pm', 'times the radius of a hydrogen atom');
defineQuantity(1, 'nm', 'times the width of a carbon nanotube');
defineQuantity(90, 'nm', 'times the width of the HIV virus');
defineQuantity(7, 'um', 'times the diameter of a red blood cell');
defineQuantity(100, 'um', 'times the width of a human hair');
defineQuantity(0.004, 'in', 'dollars in stacked $1 bills');
defineQuantity(0.3, 'mm', 'grains of sand long');
defineQuantity(0.4, 'mm', 'times the thickness of a fingernail');
defineQuantity(4.267, 'cm', 'golf balls stacked on top of each other');
defineQuantity(1.7, 'm', 'times the average height of a human');
defineQuantity(45, 'ft', 'school buses long');
defineQuantity(30, 'm', 'blue whales lined up end-to-end');
defineQuantity(100, 'yd', 'football fields long');
defineQuantity(70.6, 'm', 'Boeing 747s long');
defineQuantity(93.47, 'm', 'Statues of Liberty stacked on top of each other');
defineQuantity(137, 'm', 'times the height of the Great Pyramid of Giza');
defineQuantity(301, 'm', 'Eiffel Towers high');
defineQuantity(838, 'm', 'times the height of the Burj Khalifa, the tallest building in the world');
defineQuantity(4896, 'mi', 'trips from New York to LA and back');
defineQuantity(17406, 'mi', 'trips from LA to Mumbai and back');
defineQuantity(3480, 'km', 'times the width of the Moon');
defineQuantity(6400, 'km', 'walks down the entire Great Wall of China');
defineQuantity(40075, 'km', 'times the Earth\'s circumference (at the equator)');
defineQuantity(299792, 'km', 'light seconds');
defineQuantity(1390000, 'km', 'times the width of the Sun');
defineQuantity(1, 'au', 'times the distance from the Earth to the Sun');
defineQuantity(29.657, 'au', 'times the shortest distance from the Sun to Pluto');
defineQuantity(4.243, 'ly', 'times the distance from our sun to the next nearest star, Proxima Centauri');
defineQuantity(1000, 'ly', 'times the average thickness of the Milky Way galaxy');
defineQuantity(100000, 'ly', 'times the diameter of the Milky Way galaxy');
defineQuantity(2540000, 'ly', 'trips to the nearest spiral galaxy, the Andromeda Galaxy.');
defineQuantity(92000000000, 'ly', 'times the diameter of the observable universe');
// Time.
defineQuantity(12, 'as', 'times the shortest measured period of time');
defineQuantity(1, 'ns', 'machine cycles by a 1 GHz microprocessor');
defineQuantity(1.0167, 'ns', 'light feet');
defineQuantity(1, 'ms', 'sequential human nueral firings');
defineQuantity(350, 'ms', 'blinks of an eye');
defineQuantity(500000, 'y', 'times the age of modern humans');
defineQuantity(65000000, 'y', 'times the time dinosaurs have been extinct');
defineQuantity(4000000000, 'y', 'times the age of life on Earth');
defineQuantity(143, 'Ps', 'times the age of Earth');
defineQuantity(144, 'Ps', 'times the age of the Solar System');
defineQuantity(430, 'Ps', 'times the age of the Universe');
// Mass/Weight.
defineQuantity(9.11e-31, 'kg', 'electrons');
defineQuantity(1.673e-27, 'kg', 'protons');
defineQuantity(1.674e-27, 'kg', 'hydrogen atoms');
defineQuantity(3e-26, 'kg', 'water molecules');
defineQuantity(8e-26, 'kg', 'titanium atoms');
defineQuantity(3.2e-25, 'kg', 'caffeine molecules');
defineQuantity(3.5e-25, 'kg', 'lead-208 atoms');
defineQuantity(1e-18, 'kg', 'HIV-1 viruses');
defineQuantity(6e-15, 'kg', 'human DNA molecules');
defineQuantity(2.2e-14, 'kg', 'human sperm cells');
defineQuantity(1e-12, 'kg', 'average human cells');
defineQuantity(1.67e-9, 'kg', 'grains of sand');
defineQuantity(7e-8, 'kg', 'human eyebrow hairs');
defineQuantity(2.5e-7, 'kg', 'fruit flies');
defineQuantity(2e-5, 'kg', 'houseflies');
defineQuantity(0.52, 'g', 'raisins');
defineQuantity(1, 'g', 'US dollar bills');
defineQuantity(1.4, 'g', 'standard paperclips');
defineQuantity(30, 'g', 'mice (the furry kind)');
defineQuantity(6.4, 'oz', 'apples');
defineQuantity(430, 'g', 'soccer balls (or "footballs" if live outside the U.S.)');
defineQuantity(2, 'kg', 'Chihuahuas');
defineQuantity(3.25, 'kg', 'newborn babies');
defineQuantity(4.5, 'kg', 'cats');
defineQuantity(155, 'kg', 'lions');
defineQuantity(345, 'kg', 'grand pianos');
defineQuantity(650, 'kg', 'cows');
defineQuantity(2754, 'lb', '2014 Honda Civic LXs');
defineQuantity(1750, 'kg', 'rhinos');
defineQuantity(1.8e5, 'kg', 'blue whales');
defineQuantity(735000, 'lb', 'fully-loaded Boeing 747s');
defineQuantity(4.2e5, 'kg', 'International Space Stations');
defineQuantity(7.8e6, 'kg', 'Virginia-class nuclear submarines');
defineQuantity(5.2e7, 'kg', 'RMS Titanics');
defineQuantity(6e9, 'kg', 'Great Pyramids of Giza');
defineQuantity(4e11, 'kg', 'times the total biomass of the human population');


// Sort the quantities.
for (var unit in QUANTITIES) {
  QUANTITIES[unit].sort(function(a, b) {
    return a.quantity - b.quantity;
  });
}