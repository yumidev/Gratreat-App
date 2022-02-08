import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Moment from "react-moment";
import moment from 'moment';
// import "moment-timezone";

import headerStyle from "./Prompts.module.css";
import Header from "./Header";

import MonthTitle from '../components/MoodTracker/MonthTitle'
import CalendarBox from '../components/MoodTracker/CalendarBox'

const Main = styled.main`
  display: block;
  height: 100vh;

  .title {
    margin-top: 3rem;
  }
`

const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 20vh;

  .title {
    text-align: initial;
  }
  
  .item-wrapper {
    display: flex;

    .item {
      display: flex;
      flex-direction: column;
    }
  }
`

function MoodTrackerPage(props) {
  const [date, setDate] = useState(props.date || new Date().valueOf());

  const onClickPreviousMonth = () => {
    const firstDayofLastMonth = moment(date).subtract(1, 'month').startOf('month');

    setDate(firstDayofLastMonth.valueOf())
  }

  const onClickNextMonth = () => {
    const firstDayofLastMonth = moment(date).add(1, 'month').startOf('month');

    setDate(firstDayofLastMonth.valueOf())
  }

  return (
    <Main className="container">
      <div className={headerStyle.header}>
        <Header text="Your Gratitude Log" title="Tracker" />
      </div>
      <MonthTitle
        className="title"
        date={date}
        onClickPreviousMonth={onClickPreviousMonth}
        onClickNextMonth={onClickNextMonth}
      />
      <CalendarBox date={date} logList={props.logList}/>
      <StatusBox>
        <div className="title">Status</div>
        <div className="item-wrapper">
          <div className="item">
            <span>Total days</span>
            <span>{'+' + Object.keys(props.logList).length}</span>
          </div>
          <div className="item">
            <span>Monthly points</span>
            <span>{'+' + Object.keys(props.logList).length}</span>
          </div>
          <div className="item">
            <span>Total points</span>
            <span>{'+' + Object.keys(props.logList).length}</span>
          </div>
        </div>
      </StatusBox>
    </Main>
  );
}

export default MoodTrackerPage;
