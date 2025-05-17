import { useEffect, useState } from 'react'
import { projects } from '../PortFolioObject/portFolioObject'
import '../PortFolioDetailWithUrl/PortFolioDetail.css'
import { Link } from 'react-router-dom';
import AboutDeveloper from './AboutDevloper';
// import React, { useEffect, useState } from 'react'
export default function PortFolioDetail() {
  const [showData, setShowData] = useState([])

  useEffect(() => {
    setShowData(projects);
  }, []);

  console.log('showDatya:-', showData)
  return (
    <div className='PortFolio'>
      <div>
        <AboutDeveloper/>
      </div>
      {showData && showData.map((item) => (
        <div class="card" key={item.id}>
          <p className='hover'>Hover To Show {item.title}</p>
          <div class="card__content">
            <p class="card__title">{item.title}</p>
            {/* <Link style={{ textDecoration: 'none', color: 'black' ,marginTop:'10px'}} 
            to="https://www.linkedin.com/in/shahrukh-mirza-3027438a/">GitHub Link:- {item.githubLink}</Link> */}
            <p class="card__description">{item.description}</p>
            <div className='d-md-flex justify-content-between'>
              <div>
                <label htmlFor="Features">Features</label>
                <p>{(item.features).map((ite1, index) => (

              <li className='card__description' key={index}>
                {ite1}</li>
            ))}</p>
              </div>
            <div>
              <label htmlFor="stack">Stack</label>
               <p>{(item.techStack).map((ite2, index) => (
              <li className='card__description' key={index}> {ite2}</li>
            ))}</p>
            </div>
           
            </div>
            
            <Link class="card__button" to={item.liveLink}>Go To App</Link>
            <Link class="card__button secondary" to={item.githubLink}>GitHub Link</Link>
          </div>
        </div>

      ))}
    </div>
  )
}
