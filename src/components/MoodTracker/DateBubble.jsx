import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Moment from "react-moment";

const Wrapper = styled.span`
  .happy {
    background-color: pink;
  }

  .grin {

  }

  .smile {

  }

`

const MonthTitle = (props) => {

  return (
  <Wrapper className={props.className}>
    <button className={props.mood}>{props.day}</button>
  </Wrapper>
  )
}

export default MonthTitle;