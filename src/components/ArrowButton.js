import React from 'react';
import {MdKeyboardArrowUp} from "react-icons/md"

const ArrowButton = ({jobArray,code}) => {
    
    const arrowHandler = (e) => {
        let i = 0;
        jobArray.forEach((job)=>{
            console.log(code,job.jobUuid );
            if(job.jobUuid===code){
                console.log("Loop executed")
                const cardBotom = document.querySelectorAll(".cardBotom");
                const cardTop = document.querySelectorAll(".cardTop");
                const applyButton = document.querySelectorAll(".button-div");
                const knowMoreButton = document.querySelectorAll(".knowMoreButton");
                const cards = document.querySelectorAll(".cards");
                cardBotom[i].classList.toggle("cardBottom1");
                applyButton[i].classList.toggle("button-div1");
                knowMoreButton[i].classList.toggle("knowMoreButton1");
                cardTop[i].classList.toggle("cardTop1");
                cards[i].classList.toggle("cards1");
                i=i+1;
            }
            else{
                console.log("no")
                i=i+1;
            }
        })
    }

    return (
        <button className="knowMoreButton" onClick={arrowHandler} >
             <MdKeyboardArrowUp className="arrowIcon" />
        </button>
    )
}

export default ArrowButton
