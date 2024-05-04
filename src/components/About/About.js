import React from "react";
import User from "../User";
import UserClass from "../UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About constructor");
  }

  componentDidMount() {
    console.log("About Mounted");
  }

  render() {
    console.log("About render");
    return (
      <div>
        <h1>About Us page</h1>
        {/* <User name={"Akshay Saini (f)"} /> */}
        <UserClass
          name={"Akshay Saini (c)"}
          location={"Dehradun"}
          contact={"@akshaymarch7"}
        />
        <UserClass name={"Elon Musk"} location={"US"} contact={"@x"} />
      </div>
    );
  }
}

export default About;

/*
- Parent Constructor
- Parent Render
  - First Child constructor  
  - First Child render
  
  - Second Child constructor
  - Second Child render

  DOM updates are batched. DidMount will be called after rendering all child components
  
  - First Child did mount
  - Second Child did mount
- Parent did mount
*/
