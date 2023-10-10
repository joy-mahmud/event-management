

const PortCard = ({data}) => {
    const {image,id,title,location,date} = data
    return (
        <div className="rounded-lg">
            <div className="rounded">
                <img className="h-[250px] w-full rounded-lg" src={image} alt="" />
                <h2>{title}</h2>
                <p>{location}</p>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default PortCard;