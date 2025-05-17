import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import InputWithSuggestions from './component/Home';
import ReduxDataGetting from './component/ReduxDataGetting';
import WeatherData from './component/weatherData/WeatherData';
import TodoList from './component/To-Do-List/TodoList';
import West from './component/west/West';
import ExpensesTracker from './component/ExpencesTracker/ExpencessTracker';
import Counter from './component/CountDown/Counter';
import JobApplicationTracker from './component/Application Tracker/JobApplicationTracker';
import PortFolioDetail from './component/PortFolioDetailWithUrl/PortFolioDetail';
import About from './component/PortFolioDetailWithUrl/About'
import Contact from './component/PortFolioDetailWithUrl/Contact';
import Ecommerce from './component/EcommerceWebsite/Ecommerce';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<InputWithSuggestions />} />
        <Route path='/redux-data-getting' element={<ReduxDataGetting />} />
        <Route path='/weather-data' element={<WeatherData />} />
        <Route path='/to-do-list' element={<TodoList />} />
        <Route path='/expensesTracker' element={<ExpensesTracker />} />
        <Route path='/counter' element={<Counter/> } />
        <Route path='/job-application-tracker' element={<JobApplicationTracker />} />
        <Route path='/portfolio-detail' element={<PortFolioDetail/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/ecommerce' element={<Ecommerce/>} />
        {/* <Route path='/west' element={<West />} /> */}
        <Route path='/west' element={<West />} />
      </Routes>
    </Router>
  );
}

export default App;
