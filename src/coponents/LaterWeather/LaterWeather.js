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
      data: oneDaysLaterWeather,
    },
    {
      index: 1,
      data: twoDaysLaterWeather,
    },
    {
      index: 2,
      data: ThreeDaysLaterWeather,
    },
    {
      index: 3,
      data: fourDaysLaterWeather,
    },
  ];

  return nextDays.map((nextDay) => (
    <LaterWeatherItem key={nextDay.index} nextDay={nextDay} />
  ));
};

export default LaterWeather;
