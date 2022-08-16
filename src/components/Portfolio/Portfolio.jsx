import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Hairy from '../../img/hairy.PNG';
import DoctorPortal from '../../img/doctorPortal.png';
import CookinMaster from '../../img/cookingMaster.png';
import BookShop from '../../img/bookShop.png';
import PickMeUp from '../../img/pickMeUp.PNG';
import { themeContext } from '../../Context';


const Portfolio = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id='Portfolio'>
            {/* heading */}
            <span style={{color:darkMode? 'white' : ''}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider" 
            >
                <SwiperSlide>
                    <img src={Hairy} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={DoctorPortal} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={CookinMaster} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={BookShop} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={PickMeUp} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;