import { Link } from "react-router-dom";
import React from "react";
import useOnlineStatus from "../../custom-hooks/useOnlineStatus";
import styled from "styled-components";
import { UserContext } from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let btnName = "login";
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const userOnLineStatus = useOnlineStatus();
  const { loggedInUser } = React.useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);
  return (
    <HeaderWrapper>
      <div>
        <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgqV9sezgYxiiPqaJ3NXXvwDbkzgXpCeBWQ&s" />
      </div>
      <NavItemsWrapper>
        <NavItems>
          <ListItem>Online Status: {userOnLineStatus ? "🟢" : "🔴"}</ListItem>
          <ListItem key="home">
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem key="aboutUs">
            <Link to="/about">About Us</Link>
          </ListItem>
          <ListItem key="contactUs">
            <Link to="/contact">Contact Us</Link>
          </ListItem>
          <ListItem key="grocery">
            <Link to="/grocery">Grocery</Link>
          </ListItem>
          <ListItem key="cart">
            <Link to="/cart">Cart - {cart.length}</Link>
          </ListItem>
          <ListItem
            key="login"
            onClick={() => setIsUserLoggedIn(!isUserLoggedIn)}
          >
            <button>{isUserLoggedIn ? "Log Out" : "Log In"}</button>
          </ListItem>
          <ListItem key="User">
            <button>{loggedInUser}</button>
          </ListItem>
        </NavItems>
      </NavItemsWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 8px hsla(0deg, 0%, 0%, 0.3);
`;

const Logo = styled.img`
  width: 100px;
`;

const NavItemsWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const NavItems = styled.ul`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  color: black;
  padding: 0 24px;
`;

const ListItem = styled.li`
  margin: 0 12px;
  padding: 0 12px;
  font-size: 24px;
`;
export default Header;
