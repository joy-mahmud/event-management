
import bannerImg from '../../public/images/sazzadBanner.jpg';

const About = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-5xl font-semibold text-center my-5'>Socialvent</h2>
            <div className='flex gap-10 items-center'>
                <img className="h-[450px]" src={bannerImg} alt="" />
                <p className='text-[18px]'>Socialvent is your one-stop solution for all your event planning needs. Whether you're organizing a corporate conference, a dream wedding, a charity fundraiser, or a memorable social gathering, our event management website has you covered. We bring your vision to life, making every event a resounding success. We offer a wide range of event planning services tailored to your specific needs. From concept development and venue selection to logistics and execution, our expert team handles it all.</p>
            </div>
        </div>
    );
};

export default About;