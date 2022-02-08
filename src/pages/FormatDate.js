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

let months = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May.",
  "Jun.",
  "Jul.",
  "Aug.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec.",
];

let now = new Date();

export default function formatDate(current) {
  let month = now.getMonth();
  let year = now.getFullYear();
  let date = now.getDate();
  let day = now.getDay();

  formatDay(current);

  let finalDate = `${months[month]} ${date}`;
  return finalDate;
}

function formatDay(current) {
  let date = now.getDate();
  let day = now.getDay();
  let dayDate = `${days[day]} `;
  return dayDate;
}
