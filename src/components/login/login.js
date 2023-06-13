import react, { useState } from "react";
import './index.css'


const Login = (props) => {

    const [userInputName, updateUserInputName] = useState('')
    const [userInputPassword, updateUserInputPassword] = useState('')

    const getuserName = (event) => {
        updateUserInputName(event.target.value)
    }
    const getUserPassword = (event) => {
        updateUserInputPassword(event.target.value)
    }

    const submitUserDetails = () => {
        if (userInputName === 'abhi' && userInputPassword === 'abhi') {
            const { history } = props
            history.replace('/jokespage')
        }
    }

    return (
        <div className="login-container">
            <h1 className="login-heading">Login Page</h1>
            <form onSubmit={submitUserDetails} className="form">
                <label htmlFor="username" className="label">Enter UserName</label>
                <input type='text' id='username' onChange={getuserName} className="input" />
                <label htmlFor="password" className="label">Enter Password</label>
                <input type='password' id='password' onChange={getUserPassword} className="input" />
                <button type='submit' className="button">Login</button>
            </form >
        </div>
    )
}
export default Login