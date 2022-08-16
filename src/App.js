import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [celsius, setCelsius] = useState(0);
  const [far, setFar] = useState(0);
  const [kelvin, setKelvin] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(tipo == 1){
      setFar((total * 9/5)+32);
      setKelvin(total + 273.15);
      setCelsius(total);
    }else if(tipo == 2){
      setCelsius((total-32)*5/9);
      setKelvin((total-32)*(5/9)+273.15);
      setFar(total);
    }else if(tipo == 3){
      setCelsius(total - 273.15);
      setFar((total-275.15)*(9/5)+32);
      setKelvin(total);
    }
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de unidades</h1>

      <p>Celsius: {celsius}</p>
      <p>Fahrenheit: {far}</p>
      <p>Kelvin: {kelvin}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Celsius</option>
        <option value={2}>Fahrenheit</option>
        <option value={3}>Kelvin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
