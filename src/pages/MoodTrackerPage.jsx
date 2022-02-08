import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Moment from "react-moment";
import moment from 'moment';
// import "moment-timezone";

import headerStyle from "./Prompts.module.css";
import Header from "./Header";

import MonthTitle from '../components/MoodTracker/MonthTitle'
import DateBubble from '../components/MoodTracker/DateBubble'

const Main = styled.main`
  display: block;
  height: 100vh;

  .title {
    margin-top: 3rem;
  }
`

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  
  .calendar-header {

  }

  .calendar-body {
    display: block;
  }
  // height: 50vh;
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

  const getNumberOfDaysInMonth = (date) => {
    return moment(date).endOf('month').date();
  }

  const getMonthBubbles = (date) => {
    const days = getNumberOfDaysInMonth(date);
    let count = days;
    let rows = [];
    let weekRow = [];
    while (count) {
      const logKey = moment(date).set('date', days - count + 1).format('YYYY-MM-DD');
      const log = props.logList[logKey];
      console.log('logKey', logKey);
      console.log('log', log);
      if (count === days) {
        const dow = moment(logKey).day();
        if (dow) {
          weekRow = new Array(dow).fill(<span>N/A</span>)
        }
      }
      if (weekRow.length < 7) {
        weekRow.push(
          <DateBubble
            key={count}
            day={moment(logKey).get('date')}
            mood={log ? log.mood : ''}
          />
        )
      } else {
        rows.push(weekRow);
        weekRow = [];
      }
      count --
    }

    return rows;
  }

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
      <CalendarBox>
        <div className="calendar-header">
          { daysOfWeek.map(d => <span>{d}</span>) }
        </div>
        <div className="calendar-body">
          {getMonthBubbles(date).map(row => <div>{row}</div>)}
        </div>
      </CalendarBox>
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
