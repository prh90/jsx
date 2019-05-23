import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail/>
    </div>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));
