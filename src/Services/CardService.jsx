import { useNavigate } from "react-router-dom";


const CardService = ({cardData}) => {
    const navigate =useNavigate()
   const{shortDescription,img,id,title,price} = cardData

   const showDetails = (id)=>{
    navigate(`/details/${id}`)
}
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img  className="h-[250px] w-full" src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{shortDescription}</p>
                <div className="card-actions justify-between items-center">
                    <p className="text-[18px] font-medium text-[#4A07DA]">{price}</p>
                    <button onClick={()=>showDetails(id)} className="btn btn-primary">Show details</button>
                </div>
            </div>
        </div>
    );
};

export default CardService;