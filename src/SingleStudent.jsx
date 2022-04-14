import React from 'react'

const SingleStudent = (props) => {
  return (
    <>
    {/* <div className="col-md-4">
        <div className="student-data">
          <div className="student-photo">
            <img src={props.photo} alt="" />
          </div>
          <div className="student-name"><h2>{props.name}</h2></div>
          <div className="student-skill">{props.skill}</div>
          <h2>{props.serial}</h2>
        </div>
    </div> */}
    <div className="col-md-4">
        <div className="student-data">
          <div className="student-photo">
            <img src={props.photo} alt="" />
          </div>
          <div className="student-name"><h2>{props.name}</h2></div>
          <div className="student-skill">{props.skill}</div>
          <marquee behavior="scroll" direction="left" scrollammount="12"><h2>{props.serial}</h2></marquee>
        </div>
    </div>
    </>
  )
}

export default SingleStudent;