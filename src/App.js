import './App.css';
import UseFetch from './UseFetch.js';
import moment from 'moment';

function App() {
  const { data, loading, error } = UseFetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/331216?apikey=3vXnzSU3onkZ9JG1wn46HLA6ElaZtLcc");
  

  if (loading) return <h1>Loading...</h1>

  if (error) console.log(error);

  return (
    <div className="App">
      <header className="App-header">
        <div className='WeatherCard'>
          
          <p className='title'>Salt Lake City</p>
          <div className='Day'>
          {moment().format('dddd')}
          </div>
          <div className='Date'>
          {moment().format('MMMM Do YYYY')}
          </div>
        
          
          <p className='HighTemp'>{data?.DailyForecasts[0].Temperature.Maximum.Value}</p>
          <p className='highLabel'>High</p>
        
        <p className='LowTemp'>{data?.DailyForecasts[0].Temperature.Minimum.Value}</p>
        <p className='lowLabel'>Low
        </p>
        <p className='Description'>{data?.DailyForecasts[0].Day.IconPhrase}</p>
        
        </div>
      </header>
    </div>
  );
}


export default App;
