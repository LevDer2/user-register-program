import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operatons";

export default function UserMenu() {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <div>
            <p>{user.email}</p>
            <button type="button" onClick={handleLogOut}>Log out</button>
        </div>
    )
} 