import { Link } from "react-router-dom";
import useOnlineStatus from "../../custom-hooks/useOnlineStatus";
const Header = () => {
  let btnName = "login";
  const userOnlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgqV9sezgYxiiPqaJ3NXXvwDbkzgXpCeBWQ&s" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {userOnlineStatus ? "🟢" : "🔴"}</li>
          <li key="home">
            <Link to="/">Home</Link>
          </li>
          <li key="aboutUs">
            <Link to="/about">About Us</Link>
          </li>
          <li key="contactUs">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li key="grocery">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li key="cart">Cart</li>
          <li key="login">
            <button
              onClick={() => {
                console.log("login btn cliked");
                btnName = "logOut";
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
