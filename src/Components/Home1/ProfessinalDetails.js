import React from 'react'
import { FaPlus } from 'react-icons/fa6'

export const ProfessinalDetails = (props) => {
  return (
    <div className='col-lg-3 col-md-12 col-sm-12 col-12 professionalDetails'>
        <div>
            <img src={props.image} alt=''/>
        </div>
        <div>
            <h4>{props.head}</h4>
            <p>{props.details}</p>
        </div>
        <div >
            <FaPlus className='plusIcon'/>
        </div>
    </div>
  )
}
