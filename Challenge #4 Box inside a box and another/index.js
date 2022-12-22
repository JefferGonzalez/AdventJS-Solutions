/**
 * My solution
 * 150 points
 */
function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every(({ l, w, h }, i, arr) => {
      return (
        i === 0 || (l > arr[i - 1].l && w > arr[i - 1].w && h > arr[i - 1].h)
      );
    });
}

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
  ])
); // true

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 },
  ])
); // false

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 },
  ])
); // true
