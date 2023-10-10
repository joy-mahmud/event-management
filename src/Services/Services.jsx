import { useEffect, useState } from "react";
import CardService from "./CardService";


const Services = () => {
    const [serviceadata, setServiceData] = useState([])
    useEffect(() => {
        fetch('/ourService.json')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])

    return (

        <div>
            <h3 className="text-4xl font-semibold my-10 text-center">Our services</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:container lg:mx-auto gap-5">

                {
                    serviceadata.map(data => <CardService key={data.id} cardData={data}></CardService>)
                }
            </div>
        </div>
    );
};

export default Services;