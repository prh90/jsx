import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard/>
      <CommentDetail author={Faker.name.firstName()} timeAgo="Today at 6:00pm" src={Faker.image.avatar()} comment="Good Post!"/>
      <CommentDetail author={Faker.name.firstName()} timeAgo="Yesterday at 3:14pm" src={Faker.image.avatar()} comment="Bombness!"/>
      <CommentDetail author={Faker.name.firstName()} timeAgo="2 days go at 4:04pm" src={Faker.image.avatar()} comment="Yass!"/>
    </div>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));
