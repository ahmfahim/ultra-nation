import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      {
        countries.map(country=><Country countryInfo={country}></Country>)
      }
    </div>
  );
}

export default App;
