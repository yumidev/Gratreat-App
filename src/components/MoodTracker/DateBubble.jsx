import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Moment from "react-moment";

const Wrapper = styled.div`
  .happy {

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
    {/* <button>{'<'}</button> */}
  </Wrapper>
  )
}

export default MonthTitle;