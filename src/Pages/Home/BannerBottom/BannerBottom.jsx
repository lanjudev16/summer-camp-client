import React from 'react';
import image1 from '../../../../public/bannerBottom/image1.png'
const BannerBottom = () => {
    return (
        <div className='grid lg:grid-cols-4 lg:w-[1140px] mx-auto my-10 gap-5 hover:transition hover:ease-in-out hover:delay-150'>
            <div className='text-center p-[50px] bg-[#F8FFFB] rounded-md  hover:shadow-xl'>
                <img className='h-[85px] w-[66px] mx-auto' src="bannerBottom/image1.png" alt="" />
                <h2 className='text-2xl font-medium text-[#413960] my-2'>1500+ Topic</h2>
                <p className='text-[16px] text-[#585859] font-normal'>Learn Anythings</p>
            </div>
            <div className='text-center p-[50px] bg-[#F8FFFB] rounded-md  hover:shadow-xl'>
                <img className='h-[85px] w-[66px] mx-auto' src="bannerBottom/image2.png" alt="" />
                <h2 className='text-2xl font-medium text-[#413960] my-2'>1500+ Topic</h2>
                <p className='text-[16px] text-[#585859] font-normal'>Learn Anythings</p>
            </div>
            <div className='text-center p-[50px] bg-[#F8FFFB] rounded-md  hover:shadow-xl'>
                <img className='h-[85px] w-[66px] mx-auto' src="bannerBottom/image3.png" alt="" />
                <h2 className='text-2xl font-medium text-[#413960] my-2'>1500+ Topic</h2>
                <p className='text-[16px] text-[#585859] font-normal'>Learn Anythings</p>
            </div>
            <div className='text-center p-[50px] bg-[#F8FFFB] rounded-md  hover:shadow-xl'>
                <img className='h-[85px] w-[66px] mx-auto' src="bannerBottom/image4.png" alt="" />
                <h2 className='text-2xl font-medium text-[#413960] my-2'>1500+ Topic</h2>
                <p className='text-[16px] text-[#585859] font-normal'>Learn Anythings</p>
            </div>
        </div>
    );
};

export default BannerBottom;