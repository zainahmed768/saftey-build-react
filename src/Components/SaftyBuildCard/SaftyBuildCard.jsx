import React from 'react'
import "../SaftyBuildCard/SaftyBuildCard.css"
const SaftyBuildCard = ({label,info}) => {
    return (
        <>
            <div className="safty_card">
                <div className="inner_card">
                    <h1>{label}</h1>
                    <div className="inner_child">
                        <p>{info}</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SaftyBuildCard