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

/********************  Length  ********************/

defineKnownQuantity(25, 'pm', '| times the radius of a hydrogen atom');
defineKnownQuantity(1, 'nm', '| times the width of a carbon nanotube');
defineKnownQuantity(90, 'nm', '| times the width of the HIV virus');
defineKnownQuantity(7, 'um', '| times the diameter of a red blood cell');
defineKnownQuantity(100, 'um', '| times the width of a human hair');
defineKnownQuantity(0.004, 'in', '$| in stacked $1 bills');
defineKnownQuantity(0.3, 'mm', '| grains of sand in a line');
defineKnownQuantity(0.4, 'mm', '| times the thickness of a fingernail');
defineKnownQuantity(4.267, 'cm', '| golf balls stacked on top of each other');
defineKnownQuantity(7, 'cm', '| chap sticks long');
defineKnownQuantity(13.5, 'cm', '| Sharpie markers');
defineKnownQuantity(1.7, 'm', '| times the average height of a human');
defineKnownQuantity(45, 'ft', '| school buses long');
defineKnownQuantity(30, 'm', '| blue whales lined up end-to-end');
defineKnownQuantity(100, 'yd', '| (American) football fields long');
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

/********************  Time  ********************/

defineKnownQuantity(12, 'as', '| times the shortest measured period of time');
defineKnownQuantity(1, 'ns', '| machine cycles by a 1 GHz microprocessor');
defineKnownQuantity(1.0167, 'ns', '| times the amount of time it takes light to travel a foot');
defineKnownQuantity(1, 'ms', '| sequential human nueral firings');
defineKnownQuantity(350, 'ms', '| blinks of an eye');
defineKnownQuantity(1 / 17, 's', '| resting canary heartbeats');
defineKnownQuantity(60 / 80, 's', '| resting human heartbeats');
defineKnownQuantity(5.25, 's', '| world-record Rubik's cube solutions);
defineKnownQuantity(9.58, 's', '| world-record 100m dashes');
defineKnownQuantity(30, 'min', '| lunch breaks');
defineKnownQuantity(1, 'hr', '| episodes of Game of Thrones');
defineKnownQuantity(35, 'hr', '| iPhone 6 battery lives');
defineKnownQuantity(3, 'mo', '| summer vacations');
defineKnownQuantity(9, 'mo', '| human pregnancies');
defineKnownQuantity(13, 'y', '| childhoods');
defineKnownQuantity(30, 'y', '| generations');
defineKnownQuantity(70, 'y', '| human lifetimes');
defineKnownQuantity(500000, 'y', '| times the age of modern humans');
defineKnownQuantity(65000000, 'y', '| times the time dinosaurs have been extinct');
defineKnownQuantity(4000000000, 'y', '| times the age of life on Earth');
defineKnownQuantity(143, 'Ps', '| times the age of Earth');
defineKnownQuantity(144, 'Ps', '| times the age of the Solar System');
defineKnownQuantity(430, 'Ps', '| times the age of the Universe');

/********************  Mass / Weight  ********************/

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

/********************  Speed  ********************/

defineKnownQuantity(5, 'km/h', '| times the average human walking speed');

/********************  Area  ********************/

defineKnownQuantity(1.767, 'mm2', '| heads of a pin');
defineKnownQuantity(252, 'mm2', '| dimes');
defineKnownQuantity(2500, 'mm2', '| monarch butterfly wings');
defineKnownQuantity(1, 'cm2', '| fingernails');
defineKnownQuantity(20, 'cm2', '| matchbooks');
defineKnownQuantity(4620.688, 'mm2', '| credit cards');
defineKnownQuantity(8.75, 'cm2', '| playing cards');
defineKnownQuantity(14.7, 'in2', '| Polaroid pictures');
defineKnownQuantity(4 * 6, 'in2', '| postcards');
defineKnownQuantity(63.617, 'in2', '| dinner plates');
defineKnownQuantity(77 * 53, 'cm2', '| Mona Lisas');
defineKnownQuantity(27 * 40, 'in2', '| movie posters');
defineKnownQuantity(50 * 60, 'in2', '| picnic blankets');
defineKnownQuantity(4350, 'in2', '| 12\' long cafeteria tables');
defineKnownQuantity(8.5 * 11, 'in2', '| US letter sheets of paper');
defineKnownQuantity(57600, 'ft2', '| American football fields');
defineKnownQuantity(7140, 'm2', '| soccer pitches');
defineKnownQuantity(696241, 'km2', '| Texases');
defineKnownQuantity(7692000, 'km2', '| Australias');
defineKnownQuantity(9597000, 'km2', '| Chinas');
defineKnownQuantity(30220000, 'km2', '| Africas');

/********************  Volume  ********************/

defineKnownQuantity(60, 'mm\u00B3', '| large raindrops');
defineKnownQuantity(1, 'cup', '| cups of coffee');
defineKnownQuantity(52.8, 'ft\u00B3', '| 2015 F-150 truck beds');

/********************  Memory  ********************/

defineKnownQuantity(1, 'B', '| ASCII letters');
defineKnownQuantity(4, 'KB', '| Apple II RAMs');
defineKnownQuantity(1440, 'kB', '| 3.5" floppy disks');
defineKnownQuantity(3, 'MB', '| 10 megapixel photos');
defineKnownQuantity(3.5, 'MB', '| mp3s');
defineKnownQuantity(10, 'MB', '| 1985-er consumer hard drives');
defineKnownQuantity(750, 'MB', '| CDs');
defineKnownQuantity(800, 'MB', '| human genomes');
defineKnownQuantity(1 / 7, 'GB', '| minutes of HDTV video');
defineKnownQuantity(4, 'GB', '| DVD movies');
defineKnownQuantity(10, 'GB', '| 2000-era consumer hard drives');
defineKnownQuantity(25, 'GB', '| single-layer Blue-ray Discs');
defineKnownQuantity(5.87, 'TB', '| times the size of Wikipedia in January 2010');
defineKnownQuantity(10, 'TB', '| times the amount of printed data in the Library of Congress');
defineKnownQuantity(45, 'TB', '| times the amount of data the Hubble Space Telescope collected ' +
                              'in its first 20 years of observation');
defineKnownQuantity(100, 'TB', '| times the amount of total Internet traffic in 1993');
defineKnownQuantity(24, 'PB', '| times the amount of data Google processed per day in 2009');
defineKnownQuantity(8, 'EB', '| Utah NSA data centers');
defineKnownQuantity(15, 'EB', '| times the entire data capacity of Google in 2013');
defineKnownQuantity(4, 'ZB', '| times the size of the entire World Wide Web in 2013');

/********************  Currency  ********************/

defineKnownQuantity(0.5, 'USD', '| packs of gum');
defineKnownQuantity(1, 'USD', '| cans of Coca-Cola');
defineKnownQuantity(1.65, 'USD', '| McDonalds cheeseburgers');
defineKnownQuantity(1.814368, 'USD', '| pounds in American pennies');
defineKnownQuantity(4.99, 'USD', '| loaves of bread');
defineKnownQuantity(7.25, 'USD', '| hours of work at a minimum wage job in America');
defineKnownQuantity(15.99, 'USD', '| t-shirts');
defineKnownQuantity(39.99, 'USD', '| pairs of Levi\'s jeans');
defineKnownQuantity(80, 'USD', '| nice dinners for 2 in Los Angeles');
defineKnownQuantity(247, 'USD', '| weeks of food for an American family of 4');
defineKnownQuantity(400, 'USD', '| bargain 50" TVs');
defineKnownQuantity(468, 'USD', '| gallons of loose change');
defineKnownQuantity(616, 'USD', '| times the average yearly income in India');
defineKnownQuantity(1999, 'USD', '| top-of-the-line MacBook Pros');
defineKnownQuantity(3763, 'USD', '| months in an average Manhattan apartment in 2014');
defineKnownQuantity(18290, 'USD', '| sticker-priced 2015 Honda Civics');
defineKnownQuantity(100000, 'USD', '| rural 2-bedroom American homes');
defineKnownQuantity(1200000, 'USD', '| briefcases full of $100 bills');
defineKnownQuantity(1914000, 'USD', '| Bugatti Veyrons');
defineKnownQuantity(274000000, 'USD', '| Paul Cézanne\'s "The Card Players"');
defineKnownQuantity(10500000000, 'USD', '| times Mark Zuckerberg\'s 2013 earnings');
defineKnownQuantity(73500000000, 'USD', '| times Warren Buffett\'s 2014 net worth');
defineKnownQuantity(77608740000000, 'USD', '| times the total global GDP in 2014');


// Sort the quantities.
for (var unitShortName in KNOWN_QUANTITIES) {
  KNOWN_QUANTITIES[unitShortName].sort(function(a, b) {
    return a.quantity - b.quantity;
  });
}
