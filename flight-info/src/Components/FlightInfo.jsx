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
        {data.message && <p>{data.message}</p>}
    </div>
    <div>
        <button onClick={returnToHome}>Go Back</button>
    </div>
    </>
    )
}

export default FlightInfo;