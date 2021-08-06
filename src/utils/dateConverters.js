export const millis2Seconds = (millis) => millis / 1000;

export const seconds2Minutes = (seconds) => seconds / 60;

export const minutes2Hours = (minutes) => minutes / 60;

export const hours2Days = (hours) => hours / 24;

export const millis2Days = (millis) =>
  hours2Days(minutes2Hours(seconds2Minutes(millis2Seconds(millis))));
