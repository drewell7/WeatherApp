import { useState } from 'react';
import "./App.css";
import UseFetch from "./UseFetch.js";
import moment from "moment";
import WeatherIcons from './WeatherIcons.js';


export default function App() {
  const [index, setIndex] = useState(1);
  const {image, name} = WeatherIcons[index];
  const { data, loading, error } = UseFetch(
    "http://dataservice.accuweather.com/forecasts/v1/daily/5day/331216?apikey=3vXnzSU3onkZ9JG1wn46HLA6ElaZtLcc"
  );

  if (loading) return <h1>Loading...</h1>;

  if (error) console.log(error);

  console.log(data);


  

    
    
  
  return (
    
    <div className="App">
      <header className="App-header">
        <div className="WeatherCard">
          <p className="title">Salt Lake City</p>
          <div className="Day">{moment().format("dddd")}</div>
          <div className="Date">{moment().format("MMMM Do YYYY")}</div>
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="HighTemp">
                  {data?.DailyForecasts[0].Temperature.Maximum.Value}°
                </p>
                <p className="highLabel">High</p>
              </div>
              <div className="col">
                <p className="LowTemp">
                  {data?.DailyForecasts[0].Temperature.Minimum.Value}°
                </p>
                <p className="lowLabel">Low</p>
              </div>
            </div>
        
            <div onLoad={() => setIndex(data?.DailyForecasts[0].Day.Icon)}>
                <img className='weatherIcon' src={image} alt={name} key='id' />
            </div>
           
            <p className="Description">
              {data?.DailyForecasts[0].Day.IconPhrase}
            </p>

          </div>
        </div>
      </header>
    </div>
            
  );
  // {data?.DailyForecasts[0].Day.Icon}


};








