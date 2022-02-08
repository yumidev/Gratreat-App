import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import moment from 'moment';

const CalendarBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  .dow {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .date {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 20px;
  }

  .happy {
    background-color: pink;
  }

  .grin {

  }

  .smile {

  }
`

const CalendarBox = (props) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getNumberOfDaysInMonth = (date) => {
    return moment(date).endOf('month').date();
  }

  const getMonthBubbles = (date) => {
    const days = getNumberOfDaysInMonth(date);
    let count = days;
    let bubbles = [];
    while (count) {
      const logKey = moment(date).set('date', days - count + 1).format('YYYY-MM-DD');
      const log = props.logList[logKey];

      if (count === days) {
        const dow = moment(logKey).day();
        if (dow) {
          bubbles = new Array(dow).fill(<span className="cell date">{' '}</span>)
        }
      }

      bubbles.push(
        <span className={`cell date ${log ? log.mood : ''}`}>
          {moment(logKey).get('date')}
        </span>
      )
      count --
    }

    return bubbles;
  }

  return (
    <CalendarBoxWrapper>
      {daysOfWeek.map(d => <span className="cell dow">{d}</span>)}
      {getMonthBubbles(props.date)}
    </CalendarBoxWrapper>
  )
}

export default CalendarBox;