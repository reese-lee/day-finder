
export function dayFinder(date) {
  let year = 1999;
  let month = 2;
  let day = 13;

  // let digits = [];
  // while (year > 0) {
  //   digits[digits.length] = year % 10;
  //   year = parseInt(year / 10);
  // }
  // digits.reverse();

  let yearDigits = year % 100;
  let part2 = Math.floor(yearDigits / 4);
  let part3 = part2 + day;
  let dict = {
    1: "1",
    2: "4",
    3: "4",
    4: "0",
    5: "2",
    6: "5",
    7: "0",
    8: "3",
    9: "6",
    10: "1",
    11: "4",
    12: "6"
  }
  let part4 = part3 + parseInt(dict[month]);
  if (month == 1 | month === 2) {
    part4 -= 1;
  }
  let dict2 = {
    17: "4",
    18: "2",
    19: "0",
    20: "6"
  }

  let yearFirst = Math.floor(year/100);
  do {
    year - 400;
  }
  while (year > 2999);
}
