import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FlightInfo from './Components/FlightInfo'

function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route exact path='/' element={
          <div className="App">
          <h1>Home</h1>
          <p>Hello from React!</p>
          </div>
        }/>
        <Route path='/flight' element={<FlightInfo/>}/>
      </Routes>
      </div>
    </Router>

  );
}

export default App;
