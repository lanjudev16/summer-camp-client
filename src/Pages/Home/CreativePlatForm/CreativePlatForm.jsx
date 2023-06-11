import React from 'react';

const CreativePlatForm = () => {
    return (
        <div>
            <h2 className='text-[64px] text-center font-bold mt-[22px]'>India’s Leading Creative Platform</h2>
            <p className='text-[32px] font-light text-[#4C696D] text-center mb-[32px]'>Experience hassles free bookings.Trusted by 2500+ customer</p>
            <div className='text-center mb-[53px] lg:w-[900px] mx-auto relative'>
                <input  className=' text-[#000000] border-[#000000] border-[1px]   text-center focus:outline-none w-[100%] h-[51px] rounded-3xl text-[24px]' type="text" name="" placeholder='Search service,blog and many more' id=""  />
                <button className='bg-[#000000] text-[#FFF] absolute right-0 top-0 text-[24px] font-normal w-[227px] h-[51px] rounded-3xl'>Search</button>
            </div>
            <div className='grid lg:grid-cols-4 mx-[36px]  my-[36px]'>
                <div className='flex items-center gap-5'>
                    <img src="review.png" alt="" />
                    <div>
                    <h3 className='font-bold text-xl'>Verified Reviews</h3>
                    <h4 className='font-light text-base text-black'>For verified reviewers</h4>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <img src="TopArticle.png" alt="" />
                    <div>
                    <h3 className='font-bold text-xl'>Top Articles</h3>
                    <h4 className='font-light text-base text-black'>Helps you decide</h4>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <img src="WriteShareWithContent.png" alt="" />
                    <div>
                    <h3 className='font-bold text-xl'>Write Share Win Contest</h3>
                    <h4 className='font-light text-base text-black'>Earn cash for reviews</h4>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <img src="Mouth.png" alt="" />
                    <div>
                    <h3 className='font-bold text-xl'>MouthShut for Brands</h3>
                    <h4 className='font-light text-base text-black'>Request a Demo</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativePlatForm;