import './App.css';
import UseFetch from './UseFetch.js';
import { Card, CardTitle } from 'reactstrap';
import moment from 'moment';

function App() {
  const { data, loading, error } = UseFetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/331216?apikey=3vXnzSU3onkZ9JG1wn46HLA6ElaZtLcc");
  

  if (loading) return <h1>Loading...</h1>

  if (error) console.log(error);

  return (
    <div className="App">
      <header className="App-header">
        <Card className='WeatherCard'>
          <CardTitle>Salt Lake City</CardTitle>
          <div className='Day'>
          {moment().format('dddd')}
          </div>
          <div className='Date'>
          {moment().format('MMMM Do YYYY')}
          </div>
        
          
          <h4 className='HighTemp'>{data?.DailyForecasts[0].Temperature.Maximum.Value}</h4>
          <p>High</p>
        
        <h4 className='LowTemp'>{data?.DailyForecasts[0].Temperature.Minimum.Value}</h4>
        <p>Low
        </p>
        <h4 className='Description'>{data?.DailyForecasts[0].Day.IconPhrase}</h4>
        </Card>
      </header>
    </div>
  );
}


export default App;
