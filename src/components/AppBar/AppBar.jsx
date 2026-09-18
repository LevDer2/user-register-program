import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";

export default function AppBar() {
const isLoggedIn = useSelector(state => state.auth.isLoggedIn)


  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
}
