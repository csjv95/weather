import React from "react";
import {
  oneDaysLater,
  twoDaysLater,
  ThreeDaysLater,
  fourDaysLater,
} from "../../service/date/date";
import { StList } from "../TodayWeather/TodayWeather";
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

  return nextDays.map((data) => {
    return (
      <article style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ width: "100%", fontSize: "2em" }}>{data.day}</h3>
        <StList>
          <LaterWeatherItem nextDay={data.data} />
        </StList>
      </article>
    );
  });
};

export default LaterWeather;
