import React from 'react'
import './Order.css'
import card1 from "../images/card 1.svg"
import card2 from "../images/card 2.svg"



function Order() {
    return (
        <div className="order col ">
            <div className="intro col-6">
                <h3 className="int">Introducing Our</h3>
                <h3 className="new">New Vesti cards.</h3>
                <div className="get">
                    <h6>Get all the benefits of the Vesti card - spend online, in-store</h6>
                    <h6>and abroad while saving on currency conversion fees, with the</h6>
                    <h6>extra layer of security of the Vesti digital card.</h6>
                </div>

                <button className="but">
                    Order Your Card Now
                </button>
            </div>

            <div className="cards col-6">
                <img className="card2" src={card2} alt="" />
                <img className="card1" src={card1} alt="" />

            </div>

        </div>
    )
}


export default Order
