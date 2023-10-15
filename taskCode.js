import React, { useState } from 'react';
export default function Code(){
    const [age, changeAge] = useState(0)
    let inDate = useState()
    const date = new Date()
    let currDay = date.getDate()
    let currMonth = date.getMonth()+1
    let currYear = date.getFullYear()
    let inDay,inMonth,inYear = 2023

    const handleAgeChange = ()=>{
        let ageCal = currYear-inYear
        if (currMonth < inMonth ||(currMonth === inMonth && currDay < inDay)) 
        {ageCal--}
        console.log(inDay+" "+ inMonth +" "+inYear)
        changeAge(ageCal)
    }
    const handleDate = (e)=>{
        inDate = new Date (e.target.value)
        inDay = inDate.getDate()
        inMonth = inDate.getMonth() +1
        inYear = inDate.getFullYear()
        
    }

    return (
        <div className="w-25">
            <h1 className="fw-bold mt-3">Age Calculator</h1>
            <h5 className="fw-bold mt-4">Enter your date of birth</h5>
            <input className="form-control mt-3" type="date" onInput={handleDate}/>
            <button type="button" class="btn btn-primary mt-3" onClick={handleAgeChange}>Calculate Age</button>
            <h4 className="fw-bold mt-4">You are {age} years old</h4>
        </div>
    )
}