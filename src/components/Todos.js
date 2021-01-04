import React, { useState, useEffect } from 'react'
import axios from '../config/axios'

function Todos() {
  const [ trueTodo, setTrueTodo ] = useState([])
  const [ falseTodo, setFalseTodo ] = useState([])
  useEffect(() => {
    axios({
      method: "GET",
      url: "/todos",
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
      .then(({ data }) => {
        data.forEach(todo => {
          if (todo.status) {
            setTrueTodo(data)
          } else {
            setFalseTodo(data)
          }
        })
      })
      .catch( error => {
        console.log(error.response);
      })
  }, [])
  return (
    <>
      { 
        trueTodo.map((todo, key) => (
          <div class="card bg-light border-success">
            <div class="card-body">
              <div class="form-group row">
                <div class="col-sm" id="title" key={ key } >{todo.title}</div>
                <div class="col-sm" align="center">
                  <span class="badge badge-pill badge-success">completed</span>
                </div>
                <div> due date :<span class="badge badge-secondary" key={ key } >{todo.due_date}</span> </div>
                <div class="col-sm" id="title" align="right">
                  <div class="btn-group">
                    <button type="button" class="btn btn-info btn-sm">Act</button>
                    <button type="button"
                      class="btn btn-info dropdown-toggle dropdown-toggle-split btn-sm"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu" id="add-act">
                      <a class="dropdown-item" id="showUpdateTodo" style={{ color: "blue" }}>Update</a>
                      <a class="dropdown-item" style={{ color: "red" }}>Dtodoete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group row" align="left">
                <div class="col-sm">
                    <small key={ key } >{todo.description}</small>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      { 
        falseTodo.map((todo, key) => (
          <div class="card border-danger">
              <div class="card-body">
                  <div class="form-group row">
                      <div class="col-sm" id="title" key={ key }>{todo.title}</div>
                      <div class="col-sm" align="center">
                          <span class="badge badge-pill badge-danger">uncompleted</span>
                      </div>
                      <div> due date : <span class="badge badge-secondary" key={ key }>{todo.due_date}</span> </div>
                      <div class="col-sm" id="title" align="right">
                          <div class="btn-group">
                              <button type="button" class="btn btn-info btn-sm">Act</button>
                              <button type="button"
                                  class="btn btn-info dropdown-toggle dropdown-toggle-split btn-sm"
                                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <span class="sr-only">Toggle Dropdown</span>
                              </button>
                              <div class="dropdown-menu">
                                  <a class="dropdown-item" id="showUpdateTodo" style={{ color: "blue" }}>Update</a>
                                  <a class="dropdown-item"  style={{ color: "red" }}>Dtodoete</a>
                                  <a class="dropdown-item"  style={{ color: "green" }}>Mark as Done</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="form-group row" align="left">
                      <div class="col-sm">
                          <small key={ key }>{todo.description}</small>
                      </div>
                  </div>
              </div>
          </div>
        ))
      }
    </>
  )
}

export default Todos