import React from "react";

const LaterWeatherItem = ({ nextDay }) => {
  console.log(nextDay);

  return (
    <section>
      <h2>{nextDay.day}</h2>
    </section>
  );
};

export default LaterWeatherItem;
