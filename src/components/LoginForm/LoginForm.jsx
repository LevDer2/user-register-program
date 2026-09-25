import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../../redux/auth/operatons"

const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword]= useState("")
    
  const dispatch = useDispatch()
  const navigate = useNavigate()
const error = useSelector(state=> state.auth.error)
    const handleSubmit = async (evt) => {
        evt.preventDefault()

        await dispatch(login({
            email, 
            password,
        }))
      navigate("/contacts")
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
                <button type="submit">send</button>
                {error && <p>{error}</p>}
        </form>
      </>
    );

}
export default LoginForm