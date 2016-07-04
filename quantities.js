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
defineKnownQuantity(4.2169, 'mm', '| times the height of an L in 12pt Arial font');
defineKnownQuantity(17.91, 'mm', '| US dimes long');
defineKnownQuantity(0.75, 'in', '| US pennies long');
defineKnownQuantity(0.955, 'in', '| US quarters long');
defineKnownQuantity(4.267, 'cm', '| golf balls stacked on top of each other');
defineKnownQuantity(1.875, 'in', '| standard dominoes long');
defineKnownQuantity(7, 'cm', '| chap sticks long');
defineKnownQuantity(7.6, 'cm', '| Q-tip cotton swabs');
defineKnownQuantity(7.9, 'cm', '| toothpicks');
defineKnownQuantity(13.5, 'cm', '| Sharpie markers');
defineKnownQuantity(21, 'cm', '| drinking straws');
defineKnownQuantity(10.25, 'in', '| uncooked noodles of spaghetti');
defineKnownQuantity(12, 'in', '| wine bottles long');
defineKnownQuantity(36.25, 'in', '| size 26 umbrellas');
defineKnownQuantity(42, 'in', '| baseball bats');
defineKnownQuantity(1.7, 'm', '| times the average height of a human');
defineKnownQuantity(182.3, 'in', '| 2016 Honda Civic car lengths');
defineKnownQuantity(202.9, 'in', '| 2016 Honda Odyssey minivans');
defineKnownQuantity(8, 'ft', '| uncut 2x4s');
defineKnownQuantity(18, 'ft', '| adult male giraffes tall');
defineKnownQuantity(15, 'm', '| NBA basketball courts long');
defineKnownQuantity(45, 'ft', '| school buses long');
defineKnownQuantity(60.5, 'ft', '| times the distance between third plate and home');
defineKnownQuantity(30, 'm', '| blue whales lined up end-to-end');
defineKnownQuantity(100, 'yd', '| (American) football fields long');
defineKnownQuantity(110, 'm', '| soccer pitches long');
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
defineKnownQuantity(5.25, 's', '| world-record Rubik\'s cube solutions');
defineKnownQuantity(9.58, 's', '| world-record 100m dashes');
defineKnownQuantity(30, 'min', '| lunch breaks');
defineKnownQuantity(1, 'hr', '| episodes of Game of Thrones');
defineKnownQuantity(3.233, 'hr', '| showings of "Titanic"');
defineKnownQuantity(8, 'hr', '| workdays');
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
defineKnownQuantity(0.3, 'mg', '| poppy seeds');
defineKnownQuantity(0.625, 'mg', '| grains of sugar');
defineKnownQuantity(2.5e-7, 'kg', '| fruit flies');
defineKnownQuantity(3.64, 'mg', '| sesame seeds');
defineKnownQuantity(2e-5, 'kg', '| houseflies');
defineKnownQuantity(29, 'mg', '| grains of rice');
defineKnownQuantity(0.48, 'g', '| Tic Tacs');
defineKnownQuantity(0.52, 'g', '| raisins');
defineKnownQuantity(1, 'g', '| US dollar bills');
defineKnownQuantity(1.4, 'g', '| standard paperclips');
defineKnownQuantity(2.268, 'g', '| US dimes');
defineKnownQuantity(2.5, 'g', '| US pennies');
defineKnownQuantity(4, 'g', '| sugar cubes');
defineKnownQuantity(5.67, 'g', '| US quarters');
defineKnownQuantity(30, 'g', '| mice (the furry kind)');
defineKnownQuantity(0.04593, 'kg', '| golf balls');
defineKnownQuantity(143, 'g', '| modern iPhones');
defineKnownQuantity(145, 'g', '| baseballs');
defineKnownQuantity(157.8, 'g', '| full-size tubes of toothpaste');
defineKnownQuantity(6.4, 'oz', '| apples');
defineKnownQuantity(430, 'g', '| soccer balls (or "footballs" if live outside the U.S.)');
defineKnownQuantity(2, 'kg', '| adult Chihuahuas');
defineKnownQuantity(3.25, 'kg', '| newborn babies');
defineKnownQuantity(4.5, 'kg', '| adult cats');
defineKnownQuantity(70, 'lb', '| adult male golden retrievers');
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
defineKnownQuantity(2.2e14, 'kg', '| Halley\'s comets');
defineKnownQuantity(1.25e22, 'kg', '| Plutos');
defineKnownQuantity(7.349e22, 'kg', '| Moons');
defineKnownQuantity(3.3022e23, 'kg', '| Mercuries');
defineKnownQuantity(6.4185e23, 'kg', '| Mars');
defineKnownQuantity(4.8685e24, 'kg', '| Venuses');
defineKnownQuantity(5.9736e24, 'kg', '| Earths');
defineKnownQuantity(8.6810e25, 'kg', '| Uranuses');
defineKnownQuantity(10.243e25, 'kg', '| Neptunes');
defineKnownQuantity(5.6846e26, 'kg', '| Saturns');
defineKnownQuantity(1.8986e27, 'kg', '| Jupiters');
defineKnownQuantity(1.9891e30, 'kg', '| suns');

/********************  Speed  ********************/

defineKnownQuantity(1e-13, 'm/s', '| times the rate of erosion in bedrock');
defineKnownQuantity(3e-9, 'm/s', '| times the speed of continental drift');
defineKnownQuantity(4.8e-9, 'm/s', '| times as fast as human hair grows');
defineKnownQuantity(1.4e-5, 'm/s', '| times as fast as bamboo grows');
defineKnownQuantity(0.008, 'm/s', '| times as fast as a snail');
defineKnownQuantity(0.11, 'm/s', '| times as fast as a giant tortoise');
defineKnownQuantity(5, 'km/h', '| times the average human walking speed');
defineKnownQuantity(6.5, 'm/s', '| times a comfortable bicycling speed');
defineKnownQuantity(44.7, 'km/h', '| times as fast as Usain Bolt');
defineKnownQuantity(17, 'm/s', '| times as fast as a thoroughbred racing horse');
defineKnownQuantity(24, 'mph', '| times as fast as a South African swallow');
defineKnownQuantity(75, 'mph', '| times as fast as a cheetah');
defineKnownQuantity(70, 'mph', '| times U.S. highway speed');
defineKnownQuantity(90, 'm/s', '| times as fast as a bullet train');
defineKnownQuantity(119.742, 'm/s', '| times as fast as a Bugatti Veyron');
defineKnownQuantity(157, 'mph', '| times a Category 5 hurricane\'s maximum wind speed');
defineKnownQuantity(512, 'km/h', '| times an F5 tornado\'s maximum wind speed');
defineKnownQuantity(614, 'mph', '| times the speed of Boeing 747');
defineKnownQuantity(768, 'mph', '| times the speed of sound');
defineKnownQuantity(373, 'm/s', '| times as fast as Felix Baumgartner falling from space');
defineKnownQuantity(1200, 'm/s', '| times the speed of a bullet');
defineKnownQuantity(1400, 'm/s', '| times the speed of the Space Shuttle');
defineKnownQuantity(1789, 'm/s', '| times the speed of the BrahMos II hypersonic cruise missle');
defineKnownQuantity(6900, 'm/s', '| times the detonation velocity of TNT');
defineKnownQuantity(8092, 'm/s', '| times the detonation velocity of C4');
defineKnownQuantity(17000, 'm/s', '| times the speed of the Voyager 1 probe as it left the Solar ' +
                                  'System');
defineKnownQuantity(29800, 'm/s', '| times the speed of the Earth in orbit around the Sun');
defineKnownQuantity(440000, 'm/s', '| times the spreading speed of lightning');
defineKnownQuantity(30000000, 'm/s', '| times the speed of an electron in a CRT monitor');
defineKnownQuantity(124000000, 'm/s', '| times the speed of light in a diamond');
defineKnownQuantity(200000000, 'm/s', '| times the speed of a signal in a fiber optic cable');

/********************  Area  ********************/

defineKnownQuantity(0.078 * 0.078, 'mm2', '| iPhone 6 pixels');
defineKnownQuantity(0.25, 'mm2', '| periods in 12pt Arial font');
defineKnownQuantity(2.25, 'mm2', '| small freckles');
defineKnownQuantity(1.767, 'mm2', '| heads of a pin');
defineKnownQuantity(3.5 * 2, 'mm2', '| sesame seeds');
defineKnownQuantity(2.3 * 1.9, 'mm2', '| lowercase "o"s in 12pt Arial font');
defineKnownQuantity(3 * 2.8, 'mm2', '| uppercase "O"s in 12pt Arial font');
defineKnownQuantity(7.6 * 7.6, 'mm2', '| iPhone 6 camera lenses');
defineKnownQuantity(252, 'mm2', '| dimes');
defineKnownQuantity(2500, 'mm2', '| monarch butterfly wings');
defineKnownQuantity(1, 'cm2', '| fingernails');
defineKnownQuantity(4.8 * 5.3, 'mm2', '| MacBook Air keyboard keys');
defineKnownQuantity(Math.PI * Math.pow(17.91, 2), 'mm2', '| US dimes');
defineKnownQuantity(Math.PI * Math.pow(0.75, 2), 'in2', '| US pennies');
defineKnownQuantity(Math.PI * Math.pow(0.955, 2), 'in2', '| US quarters');
defineKnownQuantity(0.87 * 0.98, 'in2', '| US postage stamps');
defineKnownQuantity(2.515, 'in2', '| sticks of gum');
defineKnownQuantity(20, 'cm2', '| matchbooks');
defineKnownQuantity(1.7578125, 'in2', '| standard dominoes');
defineKnownQuantity(4620.688, 'mm2', '| credit cards');
defineKnownQuantity(4.75 * 3.75, 'in2', '| Post-it notes');
defineKnownQuantity(8.75, 'cm2', '| playing cards');
defineKnownQuantity(14.7, 'in2', '| Polaroid pictures');
defineKnownQuantity(4 * 6, 'in2', '| postcards');
defineKnownQuantity(Math.PI * Math.pow(2.375, 2), 'in2', '| CD-ROMs');
defineKnownQuantity(21.3 * 21.6, 'cm2', '| Kleenex tissues');
defineKnownQuantity(63.617, 'in2', '| dinner plates');
defineKnownQuantity(Math.PI * 36, 'in2', '| large vinyl records');
defineKnownQuantity(1, 'ft2', '| kitchen floor tiles');
defineKnownQuantity(Math.PI * 81, 'in2', '| regulation dart boards');
defineKnownQuantity(77 * 53, 'cm2', '| Mona Lisas');
defineKnownQuantity(27 * 40, 'in2', '| movie posters');
defineKnownQuantity(72 * 24, 'in2', '| yoga mats');
defineKnownQuantity(50 * 60, 'in2', '| picnic blankets');
defineKnownQuantity(274 * 152.5, 'cm2', '| regulation ping pong tables');
defineKnownQuantity(4350, 'in2', '| 12\' long cafeteria tables');
defineKnownQuantity(8.5 * 11, 'in2', '| US letter sheets of paper');
defineKnownQuantity(30240, 'in2', '| regulation bowling lanes');
defineKnownQuantity(57600, 'ft2', '| American football fields');
defineKnownQuantity(7140, 'm2', '| soccer pitches');
defineKnownQuantity(1.317, 'mi2', '| Central Parks');
defineKnownQuantity(109, 'acres', '| Vatican Cities');
defineKnownQuantity(4850, 'mi2', '| Los Angeleses');
defineKnownQuantity(1212, 'mi2', '| Rhode Islands');
defineKnownQuantity(32595, 'mi2', '| Irelands');
defineKnownQuantity(88745, 'mi2', '| Great Britains');
defineKnownQuantity(163696, 'mi2', '| Californias');
defineKnownQuantity(248573, 'mi2', '| Frances');
defineKnownQuantity(696241, 'km2', '| Texases');
defineKnownQuantity(3119884, 'mi2', '| contiguous USs');
defineKnownQuantity(7692000, 'km2', '| Australias');
defineKnownQuantity(9597000, 'km2', '| Chinas');
defineKnownQuantity(1269000, 'mi2', '| Indias');
defineKnownQuantity(3288000, 'mi2', '| Brazils');
defineKnownQuantity(6602000, 'mi2', '| Russias');
defineKnownQuantity(6888000, 'mi2', '| South Americas');
defineKnownQuantity(30220000, 'km2', '| Africas');
defineKnownQuantity(17210000, 'mi2', '| Asias');
defineKnownQuantity(3.79e7, 'km2', '| Moons');
defineKnownQuantity(7.48e7, 'km2', '| Mercuries');
defineKnownQuantity(1.44798e8, 'km2', '| Mars');
defineKnownQuantity(4.6e8, 'km2', '| Venuses');
defineKnownQuantity(5.100656e8, 'km2', '| Earths');
defineKnownQuantity(7.6408e9, 'km2', '| Neptunes');
defineKnownQuantity(8.1156e9, 'km2', '| Uranuses');
defineKnownQuantity(4.27e10, 'km2', '| Saturns');
defineKnownQuantity(6.21796e10, 'km2', '| Jupiters');
defineKnownQuantity(6.088e12, 'km2', '| suns');

/********************  Volume  ********************/

defineKnownQuantity(60, 'mm3', '| large raindrops');
defineKnownQuantity(20, 'ml', '| thimblefuls');
defineKnownQuantity(1, 'cup', '| cups of coffee');
defineKnownQuantity(750, 'ml', '| bottles of wine');
defineKnownQuantity(1, 'gal', '| gallon jugs of milk');
defineKnownQuantity(52.8, 'ft3', '| 2015 F-150 truck beds');
defineKnownQuantity(212, 'gal', '| 6 ft. kiddie pools');
defineKnownQuantity(2500000, 'l', '| Olympic swimming pools');
defineKnownQuantity(7.15e9, 'km3', '| Plutos');
defineKnownQuantity(2.1958e10, 'km3', '| Moons');
defineKnownQuantity(6.083e10, 'km3', '| Mercuries');
defineKnownQuantity(1.6318e11, 'km3', '| Mars');
defineKnownQuantity(9.2843e11, 'km3', '| Venuses');
defineKnownQuantity(1.08321e12, 'km3', '| Earths');
defineKnownQuantity(6.254e13, 'km3', '| Neptunes');
defineKnownQuantity(6.833e13, 'km3', '| Uranuses');
defineKnownQuantity(8.2713e14, 'km3', '| Saturns');
defineKnownQuantity(1.43128e15, 'km3', '| Jupiters');
defineKnownQuantity(1.409e18, 'km3', '| suns');

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
