import React from 'react'

const UserInput = ({inputLabel,inputPlaceholder}) => {
    return (
        <div className="userInput">
            <p>{inputLabel} </p>
            <input placeholder={inputPlaceholder} type="text"/>
        </div>
    )
}

export default UserInput
