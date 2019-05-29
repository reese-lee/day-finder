
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
  let century;
  if (17 <= yearFirst <= 20) {
    parseInt(dict2[yearFirst])
  } else if (yearFirst < 17) {
    while (year < 1700) {
      century = year += 400;
    } else if (yearFirst > 20) {
      while (year > 2100) {
        century = year -= 400;
      }
    }
  }
  let total = ((yearFirst + century + yearDigits) % 7);
  dict3 = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    0: "Saturday"
  }
  return dict3[total];
}
