import React from 'react'
import AllSensor from './AllSensor'
import '../App.css'
import {Link, useNavigate} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Mainpage = () => {

  const navigate = useNavigate();{
  }
  return (
    <div className='big-banner' style={{height: '100vh'}}>




      <h1 className='p-5 text-white'>Menu </h1>
      <button className="btn btn-primary btn-lg my-3" onClick={()=> navigate('/latestSensor')}>Sensor Dashboard</button>
      <br/>
     <button className="btn btn-secondary btn-lg my-3" onClick={()=> navigate('/SensorDetails')} >All Sensor Details</button>
     <Dropdown>
      <Dropdown.Toggle variant="Info" id="dropdown-basic">
        Floor-wise Details
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/floor1">1st Floor</Dropdown.Item>
        <Dropdown.Item href="/floor2">2nd Floor</Dropdown.Item>
        <Dropdown.Item href="/floor3">3rd Floor</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>



    </div>
  )
}

export default Mainpage;
