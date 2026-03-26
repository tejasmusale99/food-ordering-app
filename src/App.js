import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import WhatOnYourMindRestro from "./components/WhatOnYourMindRestro";
import UserContext from "./utils/context/userContext";
import appStore from "./utils/store/appStore";
import { Provider } from "react-redux";
const Cart =lazy(() => import("./components/Cart"))

const App = () => {
  return (
    <div className="appLayout">
      <UserContext.Provider value={{ loggedInUser: "Tejas Musale" }}>
        <Provider store={appStore}>
          <Header />
          <Outlet />
        </Provider>
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/", // or better use index: true (see below)
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: (
          <Suspense fallback="Loading...">
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "restaurants/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "collections/:menuId",
        element: <WhatOnYourMindRestro />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
