import './App.css';
import { Register, Login, MainPage } from './components/index'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <MainPage />
      </Route>
    </Switch>
  );
}

export default App;
