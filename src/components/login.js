import React from 'react'

const Login = (props) => {

    const {
    email, 
    setEmail,
    password, 
    setPassword, 
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
    } = props;

    return (
        <section className="login">
            <div className="login-container">
                <label>Username</label>
                <input 
                    type="text" 
                    autofocus 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}  
                />
                <p className="error-message">{emailError}</p>

                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <p className="error-message">{passwordError}</p>
            </div>
        </section>
    )
}

export default Login
