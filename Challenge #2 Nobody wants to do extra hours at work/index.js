/**
 * First solution
 * 121 points
 */
function countHours(year, holidays) {
  return holidays
    .map((holiday) => new Date(`${year}/${holiday}`))
    .filter((dates) => ![0, 6].includes(dates.getDay()))
    .reduce((a, v) => a + 2, 0);
}

/**
 * Second solution
 * 121 points
 */
const countHours = (year, holidays) => {
  return holidays.reduce((hours, holiday) => {
    return ![0, 6].includes(new Date(`${year}/${holiday}`).getDay())
      ? hours + 2
      : hours;
  }, 0);
};

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

const extraHours = countHours(year, holidays);
console.log(extraHours); // 2 days -> 4 extra hours in the year
