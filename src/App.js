import './App.css';
import UseFetch from './UseFetch.js';
import weatherImage from './images/06-s.png';

function App() {
  const { data, loading, error } = UseFetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/331216?apikey=3vXnzSU3onkZ9JG1wn46HLA6ElaZtLcc");
  

  if (loading) return <h1>Loading...</h1>

  if (error) console.log(error);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={weatherImage} alt='' />
        </div>
        <h2>{data?.DailyForecasts[0].Temperature.Maximum.Value}</h2>
        <h2>{data?.DailyForecasts[0].Temperature.Minimum.Value}</h2>
        <h2>{data?.Headline.Text}</h2>
        
      </header>
    </div>
  );
}

export default App;
