import React from 'react'
import "../../Css/Solutions.css"

const EssentialSolution = () => {
  return (
    <div>
        <div className='container'>
            <div className='row essentailSolution'>
                <div className='col-md-6 solutionImage'>
                    <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1722254349/solutions1_s9yjoy.png' alt=''/>
                    <p>BEST IN SOLUTION</p>
                </div>
                <div className='col-md-6 solutions'>
                    <div className='solutekCompany'>
                        <h6>SOLUTEK COMPANY</h6>
                    </div>
                    <div className='modernBusiness'>
                        <h1>Essential IT Solutions For<br/>
                        Modern <span> Businesses.</span>
                        </h1>

                        <p>Monotonectally repurpose maintainable infrastruct whereas solutek in fermentum quis tempo sapien maximus design.</p>
                    </div>
                    <div className='cloudSolution'>
                        <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1722255430/cloudbased_sdvmev.png' alt=''/>
                        <h5>Cloud Based Solutions</h5>
                       
                        <p>
                        Monotonectally repurpose maintainable infrastruct whereas solutek in fermentum quis tempo sapien maximus design.
                        </p>
                        
                    </div>
                    <div>
                    <button className='exploreMore'>Explore More</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EssentialSolution