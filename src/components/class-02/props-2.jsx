import React from 'react'

const Props2 = ({user, func}) => {
    console.log(user);
    return (
        <div>
            <h1> {user.age} </h1>
            <button onClick={func}>Click Me</button>
        </div>
    )
}

export default Props2
