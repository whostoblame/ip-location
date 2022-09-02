import './App.css';
import axios from 'axios';
import react, { useState, useEffect } from 'react';

function App() {

  const [ip, setIp] = useState("")

  useEffect(() => {
    axios
      .get("https://geo.ipify.org/api/v2/country?apiKey=at_Tlen5IDNZUSsrlwOicHgbPmr1TJuo")
      .then((response) => {
        console.log(response)
        console.log(response.data)
        setIp(response.data.ip)
      }).catch((error) => console.log(error)
      )
  }, []);



  return (
    <div className="App">
      <div className="ip-field">
        <p>Your IP is: {ip}</p>
      </div>
      <div className="map-field"></div>
      <div className="ip-infos"></div>

    </div>
  );
}

export default App;
