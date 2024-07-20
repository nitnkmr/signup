import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <>
       <div className="logo">
        <div className="img"></div>
       </div>
       <div className="form">
        <header className="header">
            <div className="mainHeader">Sign Up</div>
            <div className="subHeader"> or <button>SignUp</button></div>
        </header>
        <form action="">
            <input type="email" name="email" id="email"  placeholder='Email'/>
            <input type="password" name="password" id="password" placeholder='Password'/>
            <input type="password" name="confirm_password" id="password" placeholder='Re-enter Password' />
            <div className="checkBoxConatiner">
            <div className="checkBox">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember Me</label>
            </div>
            <span className="forgot">Forgot password ?</span>
            </div>
            <button type='submit' id='submit'>Log in</button>
        </form>
       </div>
    </>
  )
}

export default Form