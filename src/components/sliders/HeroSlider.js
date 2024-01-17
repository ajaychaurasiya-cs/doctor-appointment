import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import Hero from "../../data/Hero"
import commonContext from '../../contexts/common/commonContext';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';



const HeroSlider = () => {
    const { formUserInfo, toggleForm } = useContext(commonContext);
    const api = Hero;

    return (
        <Swiper
            modules={[Pagination, A11y, Autoplay]}
            loop={true}
            speed={400}
            spaceBetween={100}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            {
                // heroProducts
                api.map((item, i) => {
                    const { id, title, image,  path } = item;
                    return (

                        <SwiperSlide
                            key={id}
                            className='wrap_hero'
                        >
                            <div className="hero_item_txt">
                                <h3>{title}</h3>    
                                <Link to={`${path}`} className="btn" onClick={() => toggleForm(formUserInfo? "": true)}>
                                    Click Here
                                </Link>

                            </div>
                            <figure className="hero_item_img">
                                <img className='hero_img' src={image} alt="hero_img" />
                            </figure>
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
};

export default HeroSlider;