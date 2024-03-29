import React, { useEffect } from "react";
import { NavLink,Link } from "react-router-dom";
import '../Css/Herosection.css'
// import AOS from 'aos';
// import 'aos/dist/aos.css';


export default function Herosection(props){

    // useEffect(()=>{
    //     AOS.init()
    // },[])
    return(
        <div className="container" >
            <div className="hero-section">
                <div className="hero-section-flex">
                    <div className="hero-section-text">
                    <p>Welcome to</p>
                    <h1>{props.name}</h1>
                    <div>Discover more and shop better at our online haven where trends and impeccable taste collide, ensuring you stand out in every crowd with our handpicked selections.</div>
                    <NavLink to='/Products'>
                        <button>Shop Now</button>
                    </NavLink>
                    </div>


                    
                    <div className="hero-section-img">
                        <div className="hero-img-text">
                            <div className="hero-section-img-text">
                    <p>Welcome to</p>

                    <h1>{props.name}</h1>

                    <div>Discover more and shop better at our online haven where trends and impeccable taste collide, ensuring you stand out in every crowd with our handpicked selections.</div>


                    <Link to='/Products'>
                        <button>Shop Now</button>
                    </Link>
                            </div>
                        </div>



                        <img src="/Images/Herosection/img1.png" alt="" />
                    
                    </div>
                </div>
                

            </div>
        </div>
    )
}

