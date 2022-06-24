// returns a new date shifted a certain number of days (can be negative)
import { DateTime } from "luxon";


export function shiftDate(date, numDays) {
  const newDate = DateTime.fromJSDate(new Date(date));
  return newDate.plus({days: numDays}).toJSDate();
}

export function getBeginningTimeForDate(date) {
  return DateTime.fromJSDate(new Date(date)).startOf("day").toJSDate();
}

// obj can be a parseable string, a millisecond timestamp, or a Date object
export function convertToDate(obj) {
  return obj instanceof Date ? obj : new Date(obj);
}

export function dateNDaysAgo(numDaysAgo) {
  return shiftDate(new Date(), -numDaysAgo);
}

export function getRange(count) {
  const arr = [];
  for (let idx = 0; idx < count; idx += 1) {
    arr.push(idx);
  }
  return arr;
}
