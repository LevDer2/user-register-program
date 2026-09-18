import LoginForm from "../components/LoginForm/LoginForm"
import { useSelector } from "react-redux"

export default function Login() {

  const auth = useSelector(state => state.auth)
  console.log(auth);
  return (
    <>
      <h1>login</h1>
      <LoginForm />
      <pre>{JSON.stringify(auth, null, 2 ) }</pre>
    </>
  )
}
