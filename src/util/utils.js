const iconMap = {
  '01d': 'mdi-brightness-1',
  '01n': 'mdi-weather-night',
  '02d': 'mdi-weather-partly-cloudy',
  '02n': 'mdi-weather-night-partly-cloudy',
  '03d': 'mdi-weather-cloudy',
  '03n': 'mdi-weather-cloudy',
  '04d': 'mdi-weather-partly-cloudy',
  '04n': 'mdi-weather-night-partly-cloudy',
  '09d': 'mdi-weather-partly-rainy',
  '09n': 'mdi-weather-partly-rainy',
  '10d': 'mdi-weather-pouring',
  '10n': 'mdi-weather-pouring',
  '11d': 'mdi-weather-lighning-rainy',
  '11n': 'mdi-weather-lighning-rainy',
  '13d': 'mdi-weather-snowy',
  '13n': 'mdi-weather-snowy',
  '50d': 'mdi-weather-rainy',
  '50n': 'mdi-weather-rainy',
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getCurrentDate = () => {
  const timeElapsed = Date.now();
  const now = new Date(timeElapsed);

  const monthIndex = now.getMonth();
  const year = now.getFullYear();
  const date = now.getDate();
  const monthName = months[monthIndex];
  const dayName = days[now.getDay()];
  return `${dayName} ${monthName} ${date} ${year}`;
};

const getMonthDayDate = (unixTimeStamp) => {
  const dateFromTimeStamp = new Date(unixTimeStamp * 1000);
  const month = months[dateFromTimeStamp.getUTCMonth()];
  const day = days[dateFromTimeStamp.getUTCDay()];
  const date = dateFromTimeStamp.getUTCDate();

  return `${day}, ${month} ${date}`;
};

const getWeatherIcon = (iconId) => {
  const icon = iconMap[iconId];
  return icon;
};

export { getCurrentDate, getWeatherIcon, getMonthDayDate };
