// Takes in the string exported by dateFormat.JS and converts it into a unix time stamp
module.exports = (oldDate) => {
  // create month object
  // [month, day, year, 'at', time, am/pm ]
  let unixTimeStringArray = oldDate.split(' ');
  console.log('unixTimeArray',unixTimeStringArray);

  // newUnixTime at 0 = January 1st 1970
  let newUnixTime = 0;

  // create month object
  const months = {
    Jan: 0,
    January: 0,
    Feb: 1,
    February: 1,
    Mar: 2,
    March: 2,
    Apr: 3,
    April: 3,
    May: 4,
    Jun: 5,
    June: 5,
    Jul: 6,
    July: 6,
    Aug: 7,
    August: 7,
    Sep: 8,
    September: 8,
    Oct: 9,
    October: 9,
    Nov: 10,
    November: 10,
    Dec: 11,
    December: 11,
  };

  // Milliseconds values per minute, hour, day, month, year
  // Format: 1 year = 31557600000 milliseconds
  const value = {
    minute: 60000,
    hour: 3600000,
    day: 86400000,
    month : 2629800000,
    year : 31557600000,
  }

  // Adds based on year value Array[2]
  let year = parseInt(unixTimeStringArray[2]);
  // Added 56648 to compensate for integer rounding which results ~ 8 hours missing. Integer compensates appropriately for both 2000 and 2022
  newUnixTime += (value.year * (year - 1970));

  // Adds based on month value Array[0]
  // let month = months[unixTimeStringArray[0]];
  // console.log('This happened', month);
  // newUnixTime += (value.month * month)
  // Adds based on day value Array[1]

  // Adds based on hours/minutes value Array[4]. Time value accounts for am and pm Array[5]. If pm then +12 hours.

  return newUnixTime;
};
