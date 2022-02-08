import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Moment from "react-moment";

const Wrapper = styled.div`
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
  <Wrapper>
    <button className={props.mood}>{props.day}</button>
  </Wrapper>
  )
}

export default MonthTitle;