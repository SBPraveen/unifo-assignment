import React from 'react';
import Cards from "./Cards.js";

const Body2 = ({jobArray}) => {
    return (
        <div className="body body2">
            <h2>Job Lists</h2>
            <div className="cardsContainer">
                {jobArray.map( (job) => (<Cards jobArray={jobArray} jobNumber={job.jobNumber} jobTitle={job.jobTitle} jobDescription={job.jobDescription} code={job.jobUuid} key={job.jobUuid}/>))}
            </div>      
        </div>
    )
}

export default Body2;
