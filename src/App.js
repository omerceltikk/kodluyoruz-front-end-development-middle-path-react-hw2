import './App.css';
import { SelectProvider } from './context/SearchContext/SearchContext';
import Header from './components/Header/index';
import Main from './components/Main';
import { WheatherProvider } from './context/WeatherContext/WeatherContext';
function App() {
  return (
    <div className="App">
     <SelectProvider>
      <WheatherProvider>
      <Header />
      <Main />
      </WheatherProvider>
     </SelectProvider>
     
     </div>
  );
}

export default App;
