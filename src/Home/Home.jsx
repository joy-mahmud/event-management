import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Upcoming from "../Upcoming/upcoming";
import Carousel from "../carousel/Carousel";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";


const Home = () => {

    return (
        <div>
            <div className="container mx-auto my-10">
            <Banner></Banner>
            </div>
           <Services></Services>
           <Upcoming></Upcoming>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;