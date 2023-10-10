import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const CardUp = ({upData}) => {
    const{img,id,longDescription,title,price} = upData

    let fade
    if(id==1){
         fade="fade-right"
    }
    if(id==2){
         fade ="fade-left"
    }
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <div data-aos={fade} className="card card-side bg-base-100 shadow-xl mb-5">
            <figure ><img className="w-full h-[300px]" src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{longDescription}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{price}</button>
                </div>
            </div>
        </div>
    );
};

export default CardUp;