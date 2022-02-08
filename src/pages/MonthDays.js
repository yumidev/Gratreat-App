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

//function formatDate(current) {
// let day = now.getDay();
//let hour = now.getHours();
//let minute = now.getMinutes();
//if (minute < 10) {
//minute = "0" + minute;
//}
//let finalDate = `${days[day]} ${hour}:${minute}`;
//return finalDate;
//}

let now = new Date();

export default function Calendar() {
  let month = now.getMonth();
  //let year = now.getFullYear();
  //let date = now.getDate();
  //let day = now.getDay();
  let nrOfDays = 30;

  formatDay();

  if (month == 4 || month == 6 || month == 9 || month == 11) {
    nrOfDays = 31;
  } else if (month == 2) {
    nrOfDays = 28;
  } else {
    nrOfDays = 30;
  }

  let finalDate = `${months[month]}, 2021 `;
  console.log(finalDate);
  return nrOfDays;
}

function formatDay() {
  //let date = now.getDate();
  let day = now.getDay();
  let dayDate = `${days[day]} `;
  return dayDate;
}
