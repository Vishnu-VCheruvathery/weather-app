import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Cities from './components/Cities';



function App() {
   const [city, setCity] = useState('');
   const [data, setData] = useState({});
   const [lat, setLat] = useState('');
   const [lon, setLon] = useState('');
   const [searched, setSearched] = useState(false);
   const fetchWeather = async (lat, lon) => {
      try {
         const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`
         );
         const data = await response.json();
         setData(data);
      } catch (err) {
         console.error(err);
      }
   };

   const fetchLocation = async (city) => {
      try {
         const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${city},${city},${city}&limit=5&appid=${import.meta.env.VITE_API_KEY}`
         );
         const data = await response.json();
         if (data[0]) {
            setLat(data[0].lat);
            setLon(data[0].lon);
            setSearched(true);
         } else {
            setSearched(false);
         }
      } catch (err) {
         console.error(err);
      }
   };

   

   const handleSubmit = (e) => {
      e.preventDefault();
      fetchLocation(city); // Fetch location based on the entered city
   };

   useEffect(() => {
      if (lat && lon) {
         fetchWeather(lat, lon);
      }
      
   }, [lat, lon]);

   return (
      <div className="App">
         <Navbar />
         <form onSubmit={handleSubmit}>
         <div className="input-container">
               <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
               />
               <button type="submit" className="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
               </button>
            </div>
         </form>
         {searched ? (
            <div className="boxes">
               <Card data={data} />
               
            </div>
         ) : (
            
            <Cities/>
            
          
         )}
      </div>
   );
}

export default App
