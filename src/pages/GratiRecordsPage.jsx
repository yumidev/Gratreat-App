import React from 'react';
import {useState} from 'react'

// class GratiRecordsPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'GratiRecordsPage test value',
//     };
//   }

//   render() {
//     return (
//       <div className="container" onClick={() => console.log('click')}>
//         {this.state.value}
//       </div>
//     );
//   }
// }

function GratiRecordsPage (props){
  const [value, setValue] = useState('GratiRecordsPage test value')
  return(
      <div className="container" onClick={() => console.log('click')}>
        {value}
      </div>
  )
}

export default GratiRecordsPage