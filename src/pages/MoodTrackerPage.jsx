import React from "react";
import { useState } from "react";
import Moment from "react-moment";
import "moment-timezone";

function MoodTrackerPage() {
  const dateToFormat = new Date();

  const [value, setValue] = useState("MoodTrackerPage test value");
  return (
    <div className="container" onClick={() => console.log("click")}>
      <p>
        <Moment>{dateToFormat}</Moment>
      </p>
    </div>
  );
}

export default MoodTrackerPage;
