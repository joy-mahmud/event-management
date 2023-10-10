import { CiMail } from 'react-icons/ci';
import { FiPhoneCall } from 'react-icons/fi';

const Contact = () => {
    return (
        <div className="flex h-[200px] md:h-[250px] lg:h-[300px] container mx-auto my-10">
            <div className="bg-[#F71735] w-1/3 h-full">

            </div>
            <div className="bg-[#011627] h-full w-full">
                <div className=" h-[150px] md:h-[200px] lg:h-[300px] flex flex-col items-center justify-center ml-10">
                    <div className='text-white'>
                        <h2 className='text-3xl font-medium mb-10'>Contact us:</h2>
                        <div className='flex items-center gap-2'><FiPhoneCall></FiPhoneCall> <p>+8801234574489</p></div>
                        <div className='flex items-center gap-2'><CiMail></CiMail><p>socialvent123@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;