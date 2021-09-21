export const processData = ({ heatData }) => {
  //let do sorting by count
  const sortData = heatData.sort((a, b) => b.count - a.count).reverse();
  const total = heatData.length;

  //decide the color level 1 or  2 or 3 or 4
  const totalNumberOFColorLevels = 4;
  const remainder = total % totalNumberOFColorLevels;
  const roundedDivedNumber = Math.floor(total / totalNumberOFColorLevels);

  let r1 = 0;
  let r2 = 0;
  let r3 = 0;

  if (remainder >= 1) {
    r1 = 1;
  }

  if (remainder >= 2) {
    r2 = 1;
  }

  if (remainder >= 3) {
    r3 = 1;
  }

  const splitPositionL1 = roundedDivedNumber + r1;
  const splitPositionL2 = splitPositionL1 + roundedDivedNumber + r2;
  const splitPositionL3 = splitPositionL2 + roundedDivedNumber + r3;

  const sl1 = sortData.slice(0, splitPositionL1);
  const sl2 = sortData.slice(splitPositionL1, splitPositionL2);
  const sl3 = sortData.slice(splitPositionL2, splitPositionL3);
  let l1endRange = 0;
  let l2endRange = 0;
  let l3endRange = 0;

  if (sl1.length > 0) l1endRange = sl1[sl1.length - 1].count;
  if (sl2.length > 0) l2endRange = sl2[sl2.length - 1].count;
  if (sl3.length > 0) l3endRange = sl3[sl3.length - 1].count;

  //set the color level code
  const heatDataWithlevel = sortData.map((heat) => {
    const count = heat.count;
    if (count <= l1endRange) {
      heat["level"] = 1;
    } else if (count > l1endRange && count <= l2endRange) {
      heat["level"] = 2;
    } else if (count > l2endRange && count <= l3endRange) {
      heat["level"] = 3;
    } else if (count > l3endRange) {
      heat["level"] = 4;
    }
    return heat;
  });

  let day0HeatEntry = [];
  let day1HeatEntry = [];
  let day2HeatEntry = [];
  let day3HeatEntry = [];
  let day4HeatEntry = [];
  let day5HeatEntry = [];
  let day6HeatEntry = [];

  heatDataWithlevel.forEach((heat) => {
    let currentdate = new Date(heat.date);
    let oneJan = new Date(currentdate.getFullYear(), 0, 1);
    let numberOfDays = Math.floor(
      (currentdate - oneJan) / (24 * 60 * 60 * 1000)
    );
    let weeknumber = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
    const daynumber = currentdate.getDay();
    heat["weeknumber"] = weeknumber;
    heat["day"] = daynumber;

    if (daynumber === 0) {
      day0HeatEntry.push(heat);
    } else if (daynumber === 1) {
      day1HeatEntry.push(heat);
    } else if (daynumber === 2) {
      day2HeatEntry.push(heat);
    } else if (daynumber === 3) {
      day3HeatEntry.push(heat);
    } else if (daynumber === 4) {
      day4HeatEntry.push(heat);
    } else if (daynumber === 5) {
      day5HeatEntry.push(heat);
    } else if (daynumber === 6) {
      day6HeatEntry.push(heat);
    }
  });

  return [
    day0HeatEntry,
    day1HeatEntry,
    day2HeatEntry,
    day3HeatEntry,
    day4HeatEntry,
    day5HeatEntry,
    day6HeatEntry,
  ];
};
