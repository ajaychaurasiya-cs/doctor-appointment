import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, A11y, Autoplay } from 'swiper/modules';
import Data from '../../data/data';


import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import "swiper/scss/effect-coverflow";


const FeaturedSlider = () => {

    const navigate = useNavigate();


    return (
        <Swiper
            modules={[EffectCoverflow, Pagination, A11y, Autoplay]}
            loop={true}
            speed={400}
            spaceBetween={100}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            effect={"coverflow"}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 70,
                modifier: 3,
                slideShadows: false,
            }}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 200
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 250
                },
            }}
            className="featured_swiper"
        >
            {
                Data.slice(0, 8).map((item) => {
                    const { id, images, title, fees, Specializations} = item;

                    return (
                        <SwiperSlide key={id} className="featured_slides" onClick={()=> navigate(`${'/doctor-detail/'}${id}`)}>
                            <div className="featured">
                        
                                <figure className="featured_img">
                                    <div className='featured_img_wrap'>
                                        <div className='f_img'>
                                            <img src={images} alt="" />
                                        </div>
                                        
                                    </div>
                                </figure>
                                    <div className="featured_title">{title}</div>

                                <h2 className="products_price">
                                fee ₹{fees}
                                    <small><p>{Specializations}</p></small>
                                </h2>

                            </div>
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
};

export default FeaturedSlider;