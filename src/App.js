import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, [])

  // event handler
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h3>country added:{cart.length} </h3>
      <Cart cart={cart}></Cart>
      {
        countries.map(country=><Country countryInfo={country} handleAddCountry={handleAddCountry}></Country>)
      }
    </div>
  );
}

export default App;
