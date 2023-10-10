import banner from "../../public/images/sazzadBanner.jpg"

const Banner = () => {
    return (
        <div className="relative">
           <img className="lg:h-[550px] w-full opacity-50"  src={banner} alt="" /> 
           <h2 className="absolute  bottom-[200px] text-5xl font-bold text-center w-full">We do things As you desired..</h2>
        </div>
    );
};

export default Banner;