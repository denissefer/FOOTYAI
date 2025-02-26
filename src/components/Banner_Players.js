import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function Banner() {
    return (
        <div className="w-full  py-3 absolute mt-[693px]">
            {/* 2. Креираме Swiper со autoplay */}
            <Swiper
                spaceBetween={50} 
                slidesPerView={3}  
                autoplay={ false } // Автоматска промена секои 2 секунди
                loop={false} // Бесконечна ротација
                modules={[Autoplay]}
                className='bg-[#24332A] w-full `mt-[175px]'
                
            >
                {/* 3. Додаваме статички слајдови */}
               
                <SwiperSlide className="text-white text-center text-lg font-semibold bg-red-500 p-4 rounded-lg">
                    Barcelona 2 - 1 Real Madrid
                </SwiperSlide>
                <SwiperSlide className="text-white text-center text-lg font-semibold bg-blue-500 p-4 rounded-lg">
                    Manchester City 3 - 0 Arsenal
                </SwiperSlide>
                <SwiperSlide className="text-white text-center text-lg font-semibold bg-green-500 p-4 rounded-lg">
                    PSG 1 - 1 Bayern Munich
                </SwiperSlide>
                <SwiperSlide className="text-white text-center text-lg font-semibold bg-yellow-500 p-4 rounded-lg">
                    Liverpool 4 - 2 Chelsea
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
