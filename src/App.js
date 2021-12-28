import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Maps from './components/maps/maps';
import WeatherPad from './components/weatherPad/weatherPad';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className="App-wrapper">
        <WeatherPad />
        <Maps/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
