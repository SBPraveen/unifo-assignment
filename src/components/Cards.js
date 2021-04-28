import React from 'react';
import ArrowButton from "./ArrowButton";
const Cards = ({jobArray,jobNumber, jobTitle, jobDescription, code}) => {

    
    return (
        
        <div className="cards">
            <div className="cardTop" >
                <ArrowButton jobArray={jobArray} code={code}/>
                <p>{jobNumber} </p>
                <p>{jobTitle} </p>
            </div>
            <div className="cardBotom">
                <div className="cardBotomLeft">
                    <p>Job Number :</p>
                    <p>Job Title :</p>
                    <p>Job Description :</p>
                </div>
                <div className="cardBotomRight">
                    <p>{jobNumber} </p>
                    <p>{jobTitle} </p>
                    <p>{jobDescription}</p>
                </div>
            </div>
            <div className="button-div">
                    <button className="applyButton">Apply Now</button>
                </div>
        </div>
    )
}

export default Cards

