import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import './ApplicationTracker.css'
export default function JobApplicationTracker() {
    const [input, setInput] = useState(() => {
        const saved = localStorage.getItem('input');
        return saved ? JSON.parse(saved) : {
          companyName: '',
          jobTitle: '',
          applicationDate: '',
          jobDescriptionUrl: '',
        };
      });
    const [show, setShow] = useState([])
    const [status, setStatus] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    const handleClickToAppliedJob = () => {
        const updatedShow = [...show, input];
        setShow(updatedShow);
        localStorage.setItem('input', JSON.stringify(updatedShow));
        setInput({
          companyName: '',
          jobTitle: '',
          applicationDate: '',
          jobDescriptionUrl: '',
        });
       
          
    }
    useEffect(() => {
        const getItem = localStorage.getItem('input');
        if (getItem) {
            const parsed = JSON.parse(getItem) || [];
            
            setShow(parsed);
        }
        console.log('inputvalue:-', input);
    }, []);
   
    return (
        <div className='applicationTracker'>
            <h1 className="trackerTitle">Job Application Tracker</h1>

            <div className="trackerSection">
                <div className='appliedBox'>
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div><h3 className="sectionTitle">Applied (<span>{Object.keys(show).length}</span>)</h3></div>
                            <div className="popupContainer">
                                <Popup
                                    modal
                                    nested
                                    className='popupForm'


                                    trigger={
                                        <button type='button' className='submitBtn'>Add New Job Application</button>
                                    }
                                >
                                    {close => (
                                        <div className="formWrapper">
                                            <div className='formGroup'>
                                                <label htmlFor="companyName">Company Name</label>
                                                <input type="text" name='companyName' value={input.companyName} onChange={handleChange} />
                                            </div>
                                            <div className='formGroup'>
                                                <label htmlFor="jobTitle">Job Title</label>
                                                <input type="text" name='jobTitle' value={input.jobTitle} onChange={handleChange} />
                                            </div>
                                            <div className='formGroup'>
                                                <label htmlFor="applicationDate">Application Date</label>
                                                <input type="datetime-local" name='applicationDate' value={input.applicationDate} onChange={handleChange} />
                                            </div>
                                            <div className='formGroup'>
                                                <label htmlFor="jobDescriptionUrl">Job Description URL</label>
                                                <input type="text" name='jobDescriptionUrl' value={input.jobDescriptionUrl} onChange={handleChange} />
                                            </div>
                                            <div className="formActions">
                                                <button
                                                    className="submitBtn"
                                                    onClick={() => {
                                                        console.log('Confirmed!');
                                                        close();
                                                        handleClickToAppliedJob()
                                                        setStatus(true)
                                                    }}
                                                >
                                                    Okay
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                            </div>


                        </div>
                        <div className='showItemBox'>
                            {show.map((item, index) => (
                                <div key={index} className='showItemDiv'>
                                    
                                        <div >
                                            <div className='showItemInnerDiv'><strong style={!item.companyName ? { display: 'none' } : { display: 'block' }}>Company Name:-</strong><p className='showItem'>{item.companyName}</p></div>
                                            <div className='showItemInnerDiv'><strong style={!item.companyName ? { display: 'none' } : { display: 'block' }}>Job Title:-</strong> <p className='showItem'>{item.jobTitle}</p></div>
                                            <div className='showItemInnerDiv'><strong style={!item.companyName ? { display: 'none' } : { display: 'block' }}>Application Date:-</strong><p className='showItem'>{item.applicationDate}</p></div>
                                            <div className='showItemInnerDiv'><strong style={!item.companyName ? { display: 'none' } : { display: 'block' }}>Job Description URL:-</strong><p className='showItem'><a href={item.jobDescriptionUrl} >{item.jobDescriptionUrl}</a></p></div>
                                            <hr style={{marginBottom:'15px'}}/>
                                        </div>
                                    
                                </div>

                            ))}
                        </div>

                    </div>



                </div>
            </div>
        </div>

    )
}
