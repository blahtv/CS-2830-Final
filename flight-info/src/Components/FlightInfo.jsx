import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';


function FlightInfo()
{
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state?.data;

    const returnToHome = ()=>{
        navigate('/')
    }

    return (
    <>
    <div>
        <h1>Flight Information</h1>
        {data && 
        <>
        <h2>Flight Id: {data.id}</h2>
        <p>Depature Location: {data.departure_loc}</p>
        <p>Arrival Location: {data.arrival_loc}</p>
        </>
        }
    </div>
    <div>
        <button onClick={returnToHome}>Go Back</button>
    </div>
    </>
    )
}

export default FlightInfo;