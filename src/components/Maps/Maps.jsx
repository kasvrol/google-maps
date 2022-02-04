import React, {useState, useEffect} from 'react';
import './maps.scss';

function Maps() {

  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect((zoom, lat, lng)=>{
    fetch(`https://www.waze.com/pt-BR/live-map/directions?z=${zoom}&to=ll.${lat}%2C${lng}`, 
    {mode: 'no-cors',
    credentials: 'include'}).then(response => response.json()).then(data => setProduct(data))
  }, [])
    
    if(loading){
      return(
        <h1>
          Carregando...
        </h1>
      )
    }
  
    return (
      <div className="map">
        {products(17, -25.42925552483614, -49.272003769320875)}
      </div>
  )

}
  
export default Maps;

var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://maptiles.p.rapidapi.com/es/map/v1/3/4/2.png',
  headers: {
    'x-rapidapi-host': 'maptiles.p.rapidapi.com',
    'x-rapidapi-key': '5d489e9cd6msh20227e06cd4f5eap1b6f12jsnb3e92f560f2b'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});