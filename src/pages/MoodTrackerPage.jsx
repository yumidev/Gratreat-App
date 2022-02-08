import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Moment from "react-moment";
import moment from 'moment';
// import "moment-timezone";
import MonthTitle from '../components/MoodTracker/MonthTitle'
import DateBubble from '../components/MoodTracker/DateBubble'

const Main = styled.main`
  display: flex;
  flex-direction: column;
`

const CalendarBox = styled.div`
  display: flex;
`

const StatusBox = styled.div`
  .status-box {
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
    const bubbles = [];
    while (count) {
      const logKey = moment(date).set('date', days - count + 1).format('YYYY-MM-DD');
      const log = props.logList[logKey];
      bubbles.push(
        <DateBubble
          key={count}
          day={moment(logKey).get('date')}
          mood={log ? log.mood : ''}
        />
      )
      count --
    }

    return bubbles;
  }

  return (
    <Main className="container">
      <span>Your Gratitude Log</span>
      <h2>Tracker</h2>
      <MonthTitle
        date={date}
        onClickPreviousMonth={onClickPreviousMonth}
        onClickNextMonth={onClickNextMonth}
      />
      <CalendarBox>
        {getMonthBubbles(date)}
      </CalendarBox>
      <StatusBox>
        <div>Status</div>
        <div className="status-box">
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
