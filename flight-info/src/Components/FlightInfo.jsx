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
        <h2>Flight ID: {data.id}</h2>
        <p>Depature Location: {data.departure_loc}</p>
        <p>Arrival Location: {data.arrival_loc}</p>
        <p>Depature Time: {new Date(data.depature_time).toLocaleDateString("en-us",{hour: "2-digit", minute: "2-digit"})}</p>
        <p>Gate: {data.gate}</p>
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