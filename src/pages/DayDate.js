import React from "react";

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let now = new Date();

export default function formatDay(current) {
  let date = now.getDate();
  let day = now.getDay();
  let dayDate = `${days[day]} `;
  return dayDate;
}
