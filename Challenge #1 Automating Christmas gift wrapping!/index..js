/*
 * My Solution
 * 131 points
 */
function wrapping(gifts) {
  return gifts.map(
    (gift) =>
      `*${"*".repeat(gift.length)}*\n*${gift}*\n*${"*".repeat(gift.length)}*`
  );
}

const gifts = ["book", "game", "socks"];
const wrapped = wrapping(gifts);
console.log(wrapped);
