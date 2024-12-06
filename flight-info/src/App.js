import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useState, useEffect} from 'react'
import FlightInfo from './Components/FlightInfo'

function App() {

  const[message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((rejected) => setMessage("Failed to fetch from server!!"));
  }, []); //recieve data from Backend/server.js at route /message

  return (
    <Router>
      <div>
      <Routes>
        <Route exact path='/' element={
          <div className="App">
          <h1>Home</h1>
          <p>Hello from React!</p>
          <p>{message}</p>
          </div>
        }/>
        <Route path='/flight' element={<FlightInfo/>}/>
      </Routes>
      </div>
    </Router>

  );
}

export default App;
