import React, { useState } from "react";
import img1 from "../image/login.svg"
import img2 from "../image/avatar2.svg"
import { Link, useHistory } from "react-router-dom"
import axios from '../config/axios'

function Register() {	
	const [ full_name, setFull_name ] = useState("")
	const [ email, setEmail ] = useState("")
	const [ password, setPassword ] = useState("")
	const history = useHistory()
	function handlerSubmit(e) {
		e.preventDefault()
		axios({
			method: 'POST',
			url: '/register',
			data: { full_name, email, password }
		})
			.then(({data}) => {
				console.log("scs");
				history.push('/login')
				setFull_name(e.target.value = "")
				setEmail(e.target.value = "")
				setPassword(e.target.value = "")
			})
			.catch(err => {
				console.log(err, "masuk error");
			})
	}
	return (
		<div className="container" id="register-page">
			<div className="row justify-content-md">
				<div className="col-sm-20" style={{ paddingRight: "10%" }}>
					<div className="row">
						<div className="col-sm-8" id="img-login">
								<img src={ img1 } style={{ width: "120%" }} id="img-log" />
								<h2 className="head-login">Funcy Todo</h2>
						</div>
						<div className="col-sm-4" id="form-register" >
							<form id="fm-register" onSubmit={ (e) => handlerSubmit(e) }>
								<div className="text-right" id="avatar-signUp">
									<img className="img-avatar2" src={ img2 } />
									<h4 className="sign-in">sign up</h4>
								</div>
								<div class="form-group" style={{ textAlign: "left" }}>
									<label for="full_name">Full Name</label>
									<input 
										type="text"
										className="form-control"
										autoComplete="off"
										name= "full_name"
										value= { full_name }
										onChange={ (e) => setFull_name(e.target.value) }	
									/>
									<small className="form-text text-muted">enter your full name.</small>  
								</div>
								<div className="form-group" style={{ textAlign: "left" }}>
									<label for="email">Email address</label>
									<input 
										type="email" 
										className="form-control" 
										autoComplete="off"
										name= "email"
										value= { email }
										onChange={ (e) => setEmail(e.target.value) }	
									/>
									<small className="form-text text-muted">enter your email.</small>
								</div>
								<div class="form-group" style={{ textAlign: "left" }}>
									<label for="password">Password</label>
									<input 
										type="password" 
										className="form-control" 
										autoComplete="off" 
										name= "password"
										value={ password }
										onChange={ (e) => setPassword(e.target.value) }	
									/>
									<small className="form-text text-muted">enter your password</small>
								</div>
								<button type="submit" className="btn btn-primary btn-sm" id="">Submit</button>
								<div align="center">
									<span><small>do you have account ?</small></span>
									<Link to="/login"> SignIn</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register;