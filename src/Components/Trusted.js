import React from "react";
import '../Css/Trusted.css'

export default function Trusted(){
    return(
        <div className="container3">
            <div className="trusted-heading">
                Trusted by 1000+ companies
            </div>
            <div className="trusted-company">
                <div className="timg">
                    <img src="./Images/Trusted/logo1.png" alt="" className="trusted-company-img" />
                </div>
                <div className="timg">
                    <img src="./Images/Trusted/logo2.png" alt="" className="trusted-company-img" />
                </div>
                <div className="timg">
                    <img src="./Images/Trusted/logo3.png" alt="" className="trusted-company-img" />
                </div>
                <div className="timg">
                    <img src="./Images/Trusted/logo4.png" alt="" className="trusted-company-img" />
                </div>
            </div>
        </div>
    )
}