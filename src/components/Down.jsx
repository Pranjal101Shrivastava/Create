import React from 'react'
import Componentd from './Componentd';
import Loogo from '../Group 698.png';

const Down = () => {
  return (
    <>
    <div className="label-4">
        <p className="get-the-freedom-to">&nbsp;&nbsp;&nbsp;Get the freedom
        <br />to be more creative!
        </p>
    </div>
    <div className="label-5">
    <p className="text-wrapper">
    Let your imagination soar in the magical world where creativity knows no bounds, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;where knowledge and expertise
    intertwine to create something truly &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;extraordinary, fostering brilliance and enabling new ideas to flourish.
    </p>
    </div>
    <div className='Get'>
       <Componentd />
    </div>
    <div className="box">
            <img className="group" alt="" src={Loogo} />
        </div>
    </>



  )
}

export default Down;
