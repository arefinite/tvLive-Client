import React from 'react';
import bannerImg from '../../../assets/banner.jpg'




const Banner = () => {
    return (
        <div className=''>
            <div>
                <div className="flex justify-center py-20 lg:min-h-screen bg-cover rounded-lg bg-bannerImg">
                    <div className=" flex-col justify-center  lg:flex-row-reverse">
                        <img src={bannerImg} alt="" className="md:w-[80%] mx-auto center rounded-lg shadow-2xl" />
                        <div className='text-center pt-20'>
                            <h1 className=" lg:text-5xl text-2xl font-semibold">Manufacturing on Demand</h1>
                            <p className=" rounded-full p-4">With over 2,000 manufacturers in Europe, our network has the capacity you need for prototyping and production.</p>
                            
                            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold">Get Your Instant Quote</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Banner;