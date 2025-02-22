// 1. Импортираме Swiper.js и стиловите
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function Banner() {
    return (
        <div className="w-full  py-3 absolute mt-[1275px]">
            {/* 2. Креираме Swiper со autoplay */}
            <Swiper
                spaceBetween={50} 
                slidesPerView={3}  
                autoplay={ false } // Автоматска промена секои 2 секунди
                loop={false} // Бесконечна ротација
                modules={[Autoplay]}
                className='relative bottom-[330px] bg-[#24332A]'
            >
                {/* 3. Додаваме статички слајдови */}
                <SwiperSlide className="text-white text-center text-lg font-semibold bg-red-500 p-4 rounded-lg">
                    Mbappe
                </SwiperSlide>
                <SwiperSlide className="text-white text-center text-lg font-semibold bg-blue-500 p-4 rounded-lg">
                    Ronaldo
                </SwiperSlide>
                <SwiperSlide className="text-white text-center text-lg font-semibold bg-green-500 p-4 rounded-lg">
                    Messi
                </SwiperSlide>
                <SwiperSlide className="text-white text-center text-lg font-semibold bg-yellow-500 p-4 rounded-lg">
                    Neymar
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
