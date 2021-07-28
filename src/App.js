import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Products from './components/Products';

function App() {
  const API_URL = 'http://localhost/react-php-app/app_apis/'

  return (
    <Router>
      <Header />

      <Route path='/' exact render={ (props) => (
        <Home />
      ) } />
      <Route path='/products' render={ () => (
        <Products API_URL={ API_URL } />
      ) } />
      <Route path='/services' component={ Services } />
      <Route path='/contact' component={ Contact } />
      <Route path='/about' component={ About } />
    </Router>
  );
}

export default App;
