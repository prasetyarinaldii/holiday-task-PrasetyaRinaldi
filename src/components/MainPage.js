import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import axios from '../config/axios'
import { Todos } from "./index"

function MainPage() {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ due_date, setDue_date] = useState("")
  const history = useHistory()
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      history.push('/login')
    }
  })
  useEffect(() => {
    
  })
  function logout() {
    localStorage.removeItem('access_token');
    history.push('/login')
  }
  function handlerSubmit(e) {
    e.preventDefault()
    axios({
      method: 'POST',
      url: '/todos',
      data: { title, description, due_date },
      headers: {
          access_token: localStorage.getItem("access_token")
      }
    })
      .then(({ data }) => {
        console.log(data, "DDDDDDDD");
        setTitle(e.target.value = "")
        setDescription(e.target.value = "")
        setDue_date(e.target.value = "")
      })
      .catch( error => {
        console.log(error, "RRRRRRR");
      })
  }
  return (
    <div className="container" id="main-page">
      <nav className="navbar navbar-light">
        <a className="navbar-brand" style={{ color: "blue" }}>Fancy Todo</a>
        <form className="form-inline" id="btn-logout">
          <button className="btn btn-outline-danger my-2 my-sm-0" onClick={ (e) => logout(e) }>log out</button>
        </form>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <p>my todo list</p>
            <div className="card" style={{ width: "35rem" }}>
              <div className="card-header">
                  tanggal
              </div>
              <div className="card-body" id="todo-list">
                  {/* di isi fetch */}
                  <Todos />
              </div>
            </div>
          </div>
          <div className="col-sm-6" id="form-todo">
            <div className="container" id="form-add">
              <p style={{ color: "#63F1FF" }}>add todo</p>
              <form id="fm-todo" onSubmit={ (e) => handlerSubmit(e) }>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label for="email">Title</label>
                    <input 
                      type="text" 
                      className="form-control form-control-sm" 
                      name="title" 
                      value={ title }
                      onChange={ (e) => setTitle(e.target.value) }
                    />
                  </div>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label for="description">Description</label>
                    <textarea 
                      className="form-control form-control-sm" 
                      rows="3" 
                      name="description"
                      value={ description }
                      onChange={ (e) => setDescription(e.target.value) }
                    />
                  </div>
                  <div className="form-group" style={{ textAlign: "left" }}>
                    <label for="due_date">Due Date</label>
                    <input 
                      className="form-control form-control-sm" 
                      type="date" 
                      name="due_date" 
                      value={ due_date }
                      onChange={ (e) => setDue_date(e.target.value) }
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-sm">add to list</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage;