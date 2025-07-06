import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import WishList from "../pages/WishList/WishList";
import UserProfile from "../pages/userProfile/UserProfile";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/my-profile" element={<UserProfile />} />
      </Route>
    </>
  )
);
