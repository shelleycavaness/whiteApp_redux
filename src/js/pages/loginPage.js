import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from '../store/auth'

const Login = (props) => {

    const dispatch = useDispatch();
    // const isLoading = useSelector(state => state.auth.isLoading);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(doLogin(username, password)).catch(err => {
            setError(err);
        })
    }
    // if (isLogged) return <Redirect to="/" />
return(
  <div className="flex flex-col justify-center my-auto">
  <h1>login PAGE</h1>

    <form onSubmit={handleSubmit} className={error ? "form-error bc-dark bw-2 bs-solid py-8 px-6 br-6 shadow-3 bg-white" : "bc-dark bw-2 bs-solid py-8 px-6 br-6 shadow-2 bg-white"}>
      {error && <span className="font-bold text-white f6 block bc-red bg-red py-2 px-2 br-4 text-align-center mb-2">{error}</span>}
      <div className="flex flex-col">
        <label className="font-normal f4 mb-1">Username</label>
        <input className="f4 placeholder:text-grey bs-solid bw-1 bc-grey-2 br-4 py-1 px-1" onChange={(event) => setUsername(event.target.value)} type="text" placeholder="username" required />
    </div>
    <div className="flex flex-col mt-2">
        <label className="font-normal f4 mt-2 mb-1">Password</label>
        <input className="f4 placeholder:text-grey bs-solid bw-1 bc-dark br-4 py-1 px-1" onChange={(event) => setPassword(event.target.value)} type="password" placeholder="*****" required />
     </div>
     <br />
     <button className="btn w-full" type="submit">Se connecter</button>
      <br />
    </form> 

  </div>
)

}
export default Login