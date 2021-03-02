import React from 'react'

const Props = () => {
    return (
        <div>
            <Comp2 heading={"beauty"} />
        </div>
    )
}

const Comp2 = ({heading}) => {
    return (
        <div>
             <h1>{heading}</h1>
        </div>
    )
}
export default Props
