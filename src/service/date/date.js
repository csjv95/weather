const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const thisToday = date.getDay();
const today = `${year}-${month}-${day}`;
const oneDaysLater = `${year}-${month}-${day + 1}`;
const twoDaysLater = `${year}-${month}-${day + 2}`;
const ThreeDaysLater = `${year}-${month}-${day + 3}`;
const fourDaysLater = `${year}-${month}-${day + 4}`;

export {
  day,
  month,
  year,
  thisToday,
  today,
  oneDaysLater,
  twoDaysLater,
  ThreeDaysLater,
  fourDaysLater,
};
