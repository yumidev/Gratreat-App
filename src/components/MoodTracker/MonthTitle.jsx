import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Moment from "react-moment";

const Wrapper = styled.div``

const MonthTitle = (props) => {
  return (
  <Wrapper className={props.className}>
    <button onClick={props.onClickPreviousMonth}>{'<'}</button>
    {/* <Moment local format="h:mm:ss DD MMMM YYYY">{props.date}</Moment> */}
    <Moment local format="MMMM YYYY">{props.date}</Moment>
    <button onClick={props.onClickNextMonth}>{'>'}</button>
  </Wrapper>
  )
}

export default MonthTitle;