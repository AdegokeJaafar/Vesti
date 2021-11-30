import React from 'react'
import './Vesti.css'
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded"



function vesti() {
    return (
        <div className="vesti col">
            <div className="card plain col-6"> 

            </div>
            <div className="what col-6 mx-5">
                <p>What is the Vesti card?</p>

                <h6>The Vesti card lets you spend using the real exchange rate online, in-store and while you travel - but exists only in your Wise account, either on your phone or laptop.</h6>
                <br /> 
                <h6>There's no need to carry your wallet, and no risk of your card being compromised. Your Vesti card has different details to your physical card, and can be frozen after each purchase. That means it's a safe, smart and simple way to spend no matter where in the world you are.</h6>
                <br />
                <h6>Hold 50+ currencies at once, convert them in real time using the free vesti app, then spend online, in-store and abroad with your virtual card.</h6>
                <br />
                <h6>Currently to get Vesti card you'll first need to order a physical card. But don't worry, you don't need to wait for your physical card to arrive before you start spending onyour virtual one.</h6>
            <br /> <br /> <br /> 
            <div className="arrow">
                Order The Vesti Card Now <ArrowRightAltRoundedIcon/>
            </div>
            </div>
        </div>
    )
}

export default vesti
