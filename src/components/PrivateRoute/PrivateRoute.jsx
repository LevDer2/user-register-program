import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({children}) {
    const isLoginIn = useSelector(state => state.auth.isLoginIn)
    
    return isLoginIn ? children : <Navigate to="/login"/>
}