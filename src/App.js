import { Outlet, createBrowserRouter } from "react-router-dom";
import RestroCard from "./Component/RestroCard";
import Header from "./Component/Header";
import React, { Suspense, lazy, useState } from 'react';
import RestroMenu from "./Component/RestroMenu";
import UserContext from "./context/userLoginContect";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import CartList from "./Component/CartList";

const LazyLoadAbout = lazy(() => import("./Component/About"))
const LazyLoadHoc = lazy(() => import("./HocExample/HocComponent"))


function App() {

  const [userName, setUserName] = useState("BGfromApi")

  return (
    <div className="App">
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RestroCard />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>loading about...</h1>}><LazyLoadAbout /></Suspense>
      },
      {
        path: "/hoc",
        element: <Suspense fallback={<h1>loading Hoc...</h1>}><LazyLoadHoc /></Suspense>
      },
      {
        path: "/restaurant/:resid",
        element: <RestroMenu />
      },
      {
        path: "/cart",
        element: <CartList />
      }
    ]
  }
])

export default App;
