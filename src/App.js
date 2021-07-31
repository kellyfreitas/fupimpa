import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/pages/Home/Home';
import { Login } from './components/pages/PaginaLogin/Login';

function App() {
  return (
    <BrowserRouter>
    
        <Route exact path="/">
            <Home></Home>
        </Route>

        <Route path="/login">
            <Login></Login>
        </Route>
    </BrowserRouter>
    
  );
}

export default App;
