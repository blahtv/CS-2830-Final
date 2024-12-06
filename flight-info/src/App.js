import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import FlightInfo from './Components/FlightInfo'

function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/flight' element={<FlightInfo/>}/>
      </Routes>
      </div>
    </Router>

  );
}

export default App;
