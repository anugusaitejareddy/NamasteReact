import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "../Header";
import Body from "../Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../About";
import Contact from "../Contact";
import Error from "../Error";
import RestaurantMenu from "../RestaurantMenu/RestaurantMenu";
import { UserContext } from "../../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Cart from "../Cart";

// import Grocery from "../Grocery";

// // React ELement
// const heading = (
//   <h1 id="heading" className="head">
//     Namaste React 🚀 from JSX
//   </h1>
// );

// // Functional Component
// const HeadingComponent = () => <h1 id="heading">Functional Component</h1>;

// const nestedHeader = React.createElement("div", { class: "title" }, [
//   React.createElement("h1", {}, "Heading 1"),
//   React.createElement("h2", {}, "Heading 2"),
//   React.createElement("h3", {}, "Heading 3"),
// ]);

// config driven UI

// function componenet - normal JS function
// props - normal arguments to a function

//lazy function expects a function that returns a promise as a parameter and the lazy function returns a React component that we can render in the tree
// React will not load this component until the first time we attempt to render the returned component
const Grocery = lazy(() => import("../Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = React.useState("test");
  return (
    <div className="app">
      {/* component composition */}
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          // While the code for the lazy component is still loading, attemping to render will suspend. We need to use 'Suspense' to display a loading indicator while it's loading
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
// We are using ReactDOM as it is used for rendering the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering a functional component by adding angular brackets
// root.render(<HeadingComponent />);

root.render(<RouterProvider router={appRouter} />);
