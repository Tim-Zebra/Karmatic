// Takes in the string exported by dateFormat.JS and converts it into a unix time stamp
module.exports = (oldDate) => {
  // create month object
  let unixTime = oldDate.split(' ');
  console.log('unixTime after creation',unixTime);
  // create month object
  const months = {
    5: monthLength === 'short' ? 'Jun' : 'June',
    6: monthLength === 'short' ? 'Jul' : 'July',
    7: monthLength === 'short' ? 'Aug' : 'August',
    8: monthLength === 'short' ? 'Sep' : 'September',
    9: monthLength === 'short' ? 'Oct' : 'October',
    10: monthLength === 'short' ? 'Nov' : 'November',
    11: monthLength === 'short' ? 'Dec' : 'December',
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
    January: 0,
    Jan: 0,
    February: 1,
    Feb: 1,
    March: 2,
    March: 2,
    March: 3,
    March: 3,
    March: 4,
    March: 4,
    March: 5,
    March: 5,
    March: 6,
    March: 6,
  };

  
  return unixTime;
};
