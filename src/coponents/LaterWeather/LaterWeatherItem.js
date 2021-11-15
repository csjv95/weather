import React from "react";
import LaterDays from "./LaterDays";

const LaterWeatherItem = ({ nextDay }) => {
  return nextDay.map((day, index) => <LaterDays key={index} day={day} />);
};

export default LaterWeatherItem;
