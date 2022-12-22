/**
 * My Solution
 * 142 points
 */
function distributeGifts(packOfGifts, reindeers) {
  const pack_weight = packOfGifts.reduce((a, c) => a + c.length, 0);
  const reindeer_capacity = reindeers.reduce((a, c) => a + c.length * 2, 0);
  return Math.floor(reindeer_capacity / pack_weight);
}

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
const maxGiftsPacks = distributeGifts(packOfGifts, reindeers);
console.log(maxGiftsPacks); // 2
