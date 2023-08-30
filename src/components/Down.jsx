import React from 'react'
import Componentd from './Componentd';
import Logo1 from '../Group 698.png';
import Logo2 from '../Group 699.png';
import Logo3 from '../Vector 85.png';
import Logo4 from '../Vector 84.png';
import Logo5 from '../Vector 88.png';
import Logo6 from '../Group 700.png';
import Foot from './Foot';


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
        <img className="group" alt="" src={Logo1} />
      </div>

      <div className="box2">
        <div className="group2">
          <div className="overlap-group2">
            <div className="rectangle2" />
            <div className="div2" />
            <img className="group" alt="" src={Logo2} />
          </div>
        </div>
      </div>

      <div className="box3">
        <img className="group3" alt="" src={Logo3} />
      </div>

      <div className="box4">
        <img className="group4" alt="" src={Logo4} />
      </div>

      <div className="box5">
        <img className="group5" alt="" src={Logo5} />
      </div>

      <div className="box6">
        <img className="group6" alt="" src={Logo6} />
      </div>

     <div>
      <Foot />
     </div>
    </>



  )
}

export default Down;
