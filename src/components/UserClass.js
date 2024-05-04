import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    //  we have to call parent class's constructor with props before accessing `this`
    super(props);
    this.state = {
      count: 0,
      count1: 0,
    };
    console.log(this.props.name + "UserClass constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "UserClass Mounted");
  }

  render() {
    console.log(this.props.name + "UserClass render");

    const { name, location, contact } = this.props;
    const { count, count1 } = this.state;

    return (
      <div style={{ border: "1px solid" }}>
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            // to update state variable React provides `setState` method
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increment
        </button>
        <h1>Count1 = {count1}</h1>
        <h2>Name: {name}</h2>
        <h3>Place: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
