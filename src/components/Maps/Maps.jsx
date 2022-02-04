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