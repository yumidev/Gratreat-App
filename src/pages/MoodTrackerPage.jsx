import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import headerStyle from "./Prompts.module.css";
import Header from "./Header";

import MonthTitle from '../components/MoodTracker/MonthTitle'
import CalendarBox from '../components/MoodTracker/CalendarBox'

const Main = styled.main`
  display: block;
  min-height: 80vh;

  .calendar-container {
    margin-top: 4rem;
    height: 55vh;
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
    justify-content: space-between;
    border: solid 2px black;
    border-radius: 10px;
    padding: 20px 0;

    .item {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .label {
      height: 30px;
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

  const getMonthlyLogList = (logList) => {
    const monthText = moment(new Date()).format('YYYY-MM')
    return Object.keys(logList).filter(l => l.includes(monthText)).length
  }

  return (
    <Main className="container">
      <div className={headerStyle.header}>
        <Header text="Your Gratitude Log" title="Tracker" />
      </div>
      <div className="calendar-container">
        <MonthTitle
          className="title"
          date={date}
          onClickPreviousMonth={onClickPreviousMonth}
          onClickNextMonth={onClickNextMonth}
        />
        <CalendarBox date={date} logList={props.logList}/>
      </div>
      <StatusBox>
        <div className="title">Status</div>
        <div className="item-wrapper">
          <div className="item">
            <span className="label">Total days</span>
            <span>{'+' + Object.keys(props.logList).length}</span>
          </div>
          <div className="item">
            <span className="label">Monthly points</span>
            <span>{'+' + getMonthlyLogList(props.logList)}</span>
          </div>
          <div className="item">
            <span className="label">Total points</span>
            <span>{'+' + Object.keys(props.logList).length * 100}</span>
          </div>
        </div>
      </StatusBox>
    </Main>
  );
}

export default MoodTrackerPage;
