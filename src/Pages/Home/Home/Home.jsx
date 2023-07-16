import React from 'react';
import Banner from '../Banner/Banner';
import CreativePlatForm from '../CreativePlatForm/CreativePlatForm';
import FindTrustedAssociate from '../FindTrustedAssociate/FindTrustedAssociate';
import OurFeaturedServices from '../OurFeaturedServices/OurFeaturedServices';
import GraphicsServices from '../GraphicsServices/GraphicsServices';
import OurBlog from '../OurBlog/OurBlog';
import RealWedding from '../RealWedding/RealWedding';
import Testimonials from '../Testimonials/Testimonials';
import CoupleChoice from '../CoupleChoice/CoupleChoice';
import Success from '../Success/Success';
import PhotoGraphy from '../PhotoGraphy/PhotoGraphy';
import GrouFrelencing from '../GrouFrelencing/GrouFrelencing';
import Footer from '../../Shared/Footer/Footer';
import PopularSection from '../PopularSection/PopularSection';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Helmet from "react-helmet"
import BannerBottom from '../BannerBottom/BannerBottom';
const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Helmet>
                <title>
                    Fliqindia | Home
                </title>
            </Helmet>
           <Banner></Banner>
           <BannerBottom></BannerBottom>
           <PopularSection></PopularSection>
           <PopularInstructor></PopularInstructor>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;