import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import InputWithSuggestions from './component/Home';
import ReduxDataGetting from './component/ReduxDataGetting';
import WeatherData from './component/weatherData/WeatherData';
import TodoList from './component/To-Do-List/TodoList';
import West from './component/west/West';

function App() {

  return (
    <Router className="App">
      <Routes>
        <Route 
          path='/' 
          element={<InputWithSuggestions />} 
        />
        <Route path='/redux-data-getting' element={<ReduxDataGetting/>}/>

        <Route path='/weather-data' element={<WeatherData/>}/>
        <Route path='/to-do-list' element={<TodoList/>}/>
        <Route path='/west' element={<West/>}/>

      </Routes>
    </Router>
  );
}

export default App;
