import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PrivateRouter from "./components/PrivateRoute/PrivateRoute";
import { refreshUser } from "./redux/auth/operatons";
import "./App.css";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout/Layout";

function App() {
const dispatch = useDispatch()
  useEffect(() => {
  dispatch(refreshUser())
},[dispatch])
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route
            path="contacts"
            element={
              <PrivateRouter>
                <Contacts />
              </PrivateRouter>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
