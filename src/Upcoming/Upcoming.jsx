
import { useEffect, useState } from "react";
import CardUp from "./CardUp";
const Upcoming = () => {
    const[upcomingserviceadata,setupcomingServiceData] =useState([])
    
    useEffect(()=>{
        fetch('/upcomingService.json')
        .then(res=>res.json())
        .then(data=>setupcomingServiceData(data))
    },[])
   
    return (
        
        <div className=" mt-10 container mx-auto">
            <h2 className="text-4xl font-semibold mb-5 text-center">Our upcoming services</h2>
            {
                upcomingserviceadata.map(item=><CardUp key={item.id} upData={item}></CardUp>)
            }
        </div>
    );
};

export default Upcoming;