import { useEffect, useState } from "react";
import PortCard from "./PortCard";

const Portfolio = () => {
    const[data, setData] = useState([])
    useEffect(()=>{
        fetch('/portfolio.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center my-10">The events that we organized</h2>
        <div className="container mx-auto grid lg:grid-cols-3 gap-5">
            
            {
                data.map(item=><PortCard key={item.id} data={item}></PortCard>)
            }
        </div>
        </div>
    );
};

export default Portfolio;