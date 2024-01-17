import React from "react";
import Herosection from "./Components/Herosection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted"
import Featuredproduct from "./Components/Featuredproduct";

export default function Home(){
    return (
        <>
        <Herosection name="TrendsCart"/>
        <Featuredproduct/>
        <Services/>
        <Trusted/>
        </>
    )
    
}