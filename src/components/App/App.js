import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../Header";
import Body from "../Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../About";
import Contact from "../Contact";
import Error from "../Error";
import RestaurantMenu from "../RestaurantMenu/RestaurantMenu";

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

const AppLayout = () => {
  return (
    <div className="app">
      {/* component composition */}
      <Header />
      <Outlet />
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
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
