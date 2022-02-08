import React from 'react';
import {useState} from 'react'


function GratiRecordsPage (props){
  const [value, setValue] = useState('GratiRecordsPage test value')
  return(
      <div className="container" onClick={() => console.log('click')}>
        {value}
      </div>
  )
}

export default GratiRecordsPage