import React from "react";
import {
  oneDaysLater,
  twoDaysLater,
  ThreeDaysLater,
  fourDaysLater,
} from "../../service/date/date";
import LaterWeatherItem from "./LaterWeatherItem";

const LaterWeather = ({
  oneDaysLaterWeather,
  twoDaysLaterWeather,
  ThreeDaysLaterWeather,
  fourDaysLaterWeather,
}) => {
  const nextDays = [
    {
      index: 0,
      day: oneDaysLater,
      data: oneDaysLaterWeather,
    },
    {
      index: 1,
      day: twoDaysLater,
      data: twoDaysLaterWeather,
    },
    {
      index: 2,
      day: ThreeDaysLater,
      data: ThreeDaysLaterWeather,
    },
    {
      index: 3,
      day: fourDaysLater,
      data: fourDaysLaterWeather,
    },
  ];

  return nextDays.map((nextDay) => (
    <LaterWeatherItem key={nextDay.index} nextDay={nextDay} />
  ));
};

export default LaterWeather;
