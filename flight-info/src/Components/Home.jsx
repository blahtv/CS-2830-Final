import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

function Home()
{
    const navigate = useNavigate();

    const [message, setMessage] =useState('');
    const getMessage = ()=>{
        axios.get('http://localhost:8000/message').then(
            res=>{
                console.log(res);
                setMessage(res.data.message);
            }
        )
    }

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const [errorValue, setErrorValue] = useState('');

    const fetchEntry = async ()=>{
        try{
            const response = await axios.get('http://localhost:8000/api/data/' + inputValue);
            navigate('/flight', {state: {data: response.data}})
        }
        catch(err){
            console.log(err);
            setErrorValue("Flight ID not found.");
        }
    }

    return(
        <>
        <div>
            <h1>Home</h1>
            <button onClick={getMessage}>Check server response</button>
            {message && <p>{message}</p>}
        </div>
        <div>
            <input type="number" placeholder="Enter Flight ID" value={inputValue} onChange={handleInputChange}/>
            <button onClick={fetchEntry}>Find Flight</button>
            {errorValue && <p>{errorValue}</p>}
        </div>
        </>
    )
}

export default Home;