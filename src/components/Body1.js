import UserInput from "./UserInput.js";
import { v4 as uuidv4 } from 'uuid';


const Body1 = ({jobArray, setjobArray}) => {
    const formSubmitHandler = (e) => {
        if(e.target[0].value !== "" && e.target[0].value !== null && e.target[0].value !== undefined && e.target[1].value !== "" && e.target[1].value !== null && e.target[1].value !== undefined && e.target[2].value !== "" && e.target[2].value !== null && e.target[2].value !== undefined ){
            e.preventDefault();
            // setTweets([...tweets, newText])
            setjobArray([...jobArray,{jobNumber:e.target[0].value, jobTitle:e.target[1].value, jobDescription:e.target[2].value, jobUuid:uuidv4()}]);
            e.target[0].value="";
            e.target[1].value="";
            e.target[2].value="";
        }
        else{
            alert("All fields are mandatory")
        }
    };

    return (
        <form className="body body1" onSubmit={formSubmitHandler}>
            <h2>Enter the Job Details </h2>
            <div className="userInputList">
                <UserInput inputLabel="Job Number" inputPlaceholder="Eg:Dev01902"/>
                <UserInput inputLabel="Job Title" inputPlaceholder="Eg:FrontEnd Developer"/>
                <UserInput inputLabel="Job Description" inputPlaceholder="Eg:Responsible for UI design"/>
            </div>
            <div className="button-div">
            <button >Save</button>
            </div>
        </form>
    )
}

export default Body1;


