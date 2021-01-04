import React, { useState } from "react";
import img from "../image/login.svg";
import img1 from "../image/avatar.svg";
import { useHistory, Link } from 'react-router-dom'
import axios from '../config/axios'

function Login() {
  const history = useHistory()
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  function handlerSubmit(e) {
		e.preventDefault()
		axios({
			method: 'POST',
			url: '/login',
			data: { email, password }
		})
			.then(({data}) => {
				localStorage.setItem('access_token', data.access_token);
        history.push('/')
        setEmail(e.target.value = "")
				setPassword(e.target.value = "")
			})
			.catch(err => {
				console.log(err, "masuk error");
			})
  }
  
  return (
    <div className="container" id="login-page">
      <div className="row justify-content-md-center">
        <div className="col-sm-20" style={{ paddingRight: "10%" }}>
          <div className="row">
            <div className="col-sm-8" id="img-login">
              <img src={ img } style={{ width: "120%" }} />
              <h2 className="head-login">Funcy Todo</h2>
            </div>
            <div className="col-sm-4" id="form-login">
              <form id="fm-login" onSubmit={ (e) => handlerSubmit(e) }>
                <div className="text-right" id="avatar-login">
                  <img className="img-avatar" src={ img1 } />
                  <h4 className="sign-in">sign in</h4>
                </div>
                <div className="form-group" style={{ textAlign: "left" }}>
                  <label for="email">Email address</label>
                  <input type="email" 
                    className="form-control" 
                    name="email" 
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                  />
                  <small id="emailHelp" className="form-text text-muted">enter your email.</small>
                </div>
                <div className="form-group" style={{ textAlign: "left" }}>
                  <label for="password">Password</label>
                  <input type="password"
                    className="form-control"
                    name="password" 
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                  />
                  <small id="emailHelp" className="form-text text-muted">enter your password.</small>
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Login</button>
                <div align="center">
                  <span><small>don't have an account ? please </small></span>
                  <Link to="/register"> SignUp</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login