import React from "react";
import MainPage from "./features/pages/MainPage";
import SignUpPage from "./features/pages/signupPage";
import LoginPage from "./features/pages/loginPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from "./features/pages/cartPage";
import Checkout from "./features/pages/chechout";
import Prdetail from "./features/pages/productDetailPage";
import UserTable from "./features/pages/userinfo";
import Navi from "./features/pages/navi";
import Used from "./features/pages/used";
const router = createBrowserRouter([
  {
    path: "/homepage",
    element: <MainPage></MainPage>,
  },
  {
    path: "/signUp",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "/prd",
    element: <Prdetail></Prdetail>,
  },
  {
    path: "/usertable",
    element: <Used></Used>,
  },
  {
    path: "/nav",
    element: <Navi></Navi>,
  },
 
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
