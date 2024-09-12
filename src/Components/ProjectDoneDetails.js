import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const ProjectDoneDetails = ({image, jobType}) => {
  
  return (
    <div className='col-md-6'>
        <div>
        <img src={image} alt=''/>
        </div>
        <div className='projectDone'>
        <div className='marketing' >
            <p>
                Marketing, Software
            </p>
            <h3>
                {jobType}</h3>
        </div>
        <div>
            <FaArrowRight className='arrowIcon'/>
        </div>
        </div>
    </div>
  )
}

export default ProjectDoneDetails