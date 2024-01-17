import React from "react";
import { Link } from "react-router-dom";
import '../Css/Herosection.css'
export default function Herosection(props){
    return(
        <div className="container">
            <div className="hero-section">
                <div className="hero-section-flex">
                    <div className="hero-section-text">
                    <p>Welcome to</p>
                    <h1>{props.name}</h1>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ex dolore voluptate dignissimos id ut rerum cum voluptatibus iusto corrupti obcaecati necessitatibus deserunt illo totam harum eveniet sed, ipsum nostrum.</div>
                    <Link to='/Products'>
                        <button>Shop Now</button>
                    </Link>
                    </div>


                    
                    <div className="hero-section-img">
                        <div className="hero-img-text">
                            <div className="hero-section-img-text">
                    <p>Welcome to</p>

                    <h1>{props.name}</h1>

                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ex dolore voluptate dignissimos id ut rerum cum voluptatibus iusto corrupti obcaecati necessitatibus deserunt illo totam harum eveniet sed, ipsum nostrum.</div>


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

