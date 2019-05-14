import React from 'react';
import ReactDOM from 'react-dom';

const Start = () => {
  return (
    <h1>Hi there!</h1>
  )
}
// class Start extends React.Component {
//   render() {
//     return(
//       <h1>Hello World!</h1>
//     )
//   }
// };

ReactDOM.render(<Start/>, document.getElementById('app'));
