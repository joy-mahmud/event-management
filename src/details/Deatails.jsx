import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Deatails = () => {
    const id = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/ourService.json')
            .then(res => res.jspn())
            .then(data => setData(data))
    }, [])

    const Item = data.find(item => item.id == id.id)
    const { img, title, longDescription, price } = Item

    return (
        <div className="container mx-auto">
            <img className="w-full lg:h-[550px]" src={img} />
            <div className="mb-10">
                <h2 className="font-semibold text-5xl my-2">{title}</h2>
                <p className="text-2xl">{longDescription}</p>
            </div>
            <div className="btn btn-secondary flex flex-col"><p className="">Get this service.</p><p>price:{price}</p></div>
            <button></button>
        </div>
    );
};

export default Deatails;