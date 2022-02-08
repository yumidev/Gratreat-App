import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Moment from "react-moment";

const Wrapper = styled.div`
  button {
    background: none;
    border: none;
    font-size: 100%;
    margin: 0;
    text-transform: none;
    overflow: visible;

    &:hover {
      background-color: unset;
      color: unset;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MonthTitle = (props) => {
  return (
  <Wrapper className={props.className}>
    <button onClick={props.onClickPreviousMonth}>{'<'}</button>
    <Moment local format="MMMM YYYY">{props.date}</Moment>
    <button onClick={props.onClickNextMonth}>{'>'}</button>
  </Wrapper>
  )
}

export default MonthTitle;