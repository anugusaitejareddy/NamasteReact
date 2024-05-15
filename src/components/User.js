import React from "react";

function User({ name }) {
  const [count, setCount] = React.useState(0);
  const [count1, setCount1] = React.useState(0);

  return (
    <div className="m-4 p-4" style={{ border: "1px solid" }}>
      <h1>Count = {count}</h1>
      <h1>Count1 = {count1}</h1>
      <h2>Name: {name}</h2>
      <h3>Place: Dehradun</h3>
      <h4>Contact: @akshaymarch7</h4>
    </div>
  );
}

export default User;
