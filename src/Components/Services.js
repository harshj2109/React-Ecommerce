import React from 'react'
import '../Css/Services.css'
import { BiSolidTruck } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import { GiReceiveMoney } from "react-icons/gi";
const Services = () => {
  return (
    <div className="container2">
        <div className="service-box">
            <div className="sb service-box1  service-box-same">
            <BiSolidTruck  className='sb-box-icon'/>

                <h3>Super fast and free delivery</h3>
            </div>  
            <div className=" service-box2">
                <div className="sb-2">
                <GoShieldCheck className='sb-box-icon' />
                    <h3>100% Secured shipping</h3>
                </div>
                <div className="sb-2">
                <GiReceiveMoney className='sb-box-icon' />

                    <h3>100% money back</h3>
                </div>

            </div>
            <div className="sb service-box3 service-box-same">
                <RiSecurePaymentFill className='sb-box-icon'/>
                <h3>Super secure payment system</h3>
            </div>
        </div>
    </div>
  )
}

export default Services