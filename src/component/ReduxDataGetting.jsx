import React from 'react'
import { useSelector } from 'react-redux'

export default function ReduxDataGetting() {
    const result = useSelector((state)=>state.rootReducer.reducer.personalInfo)
    console.log(result)
  return (
    <div>
        <div><h1>Redux Data Getting on this page from </h1>
            <p>{result.fullName}</p>
            <p>{result.email}</p>
            <p>{result.mobileNumber}</p>
            <p>{result.password}</p>
        </div>
    </div>
  )
}
