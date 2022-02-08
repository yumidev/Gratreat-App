import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Moment from "react-moment";

const Wrapper = styled.div``

const MonthTitle = (props) => {

  return (
  <Wrapper>
    <button>{'<'}</button>
    <Moment local format="MMMM YYYY">{props.date}</Moment>
    <button>{'>'}</button>
  </Wrapper>
  )
}

export default MonthTitle;