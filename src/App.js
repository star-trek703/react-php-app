import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Products from './components/Products';

function App() {
  const API_URL = 'http://localhost/react-php-app/app_apis/'

  const [categories, setCategories] = useState(null)
  
  useEffect(() => {
      fetch(API_URL +'get_categories.php')
          .then(res => res.json())
          .then(data => setCategories(data.categories))
  }, [])
  
  // const getCategories = async () => {
  //     const res = await fetch(API_URL +'get_categories.php')
  //     const data = await res.json()
      
  //     return data
  // }
  
  // getCategories().then(data => setCategories(data.categories))
  

  return (
    <Router>
      <Header />

      <Route path='/' exact render={ (props) => (
        <Home />
      ) } />
      <Route path='/products' render={ () => (
        <Products categories={ categories } />
      ) } />
      <Route path='/services' component={ Services } />
      <Route path='/contact' component={ Contact } />
      <Route path='/about' component={ About } />
    </Router>
  );
}

export default App;
