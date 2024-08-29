import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import sw1 from '../../assets/i1.jpg'
import sw2 from '../../assets/i2.jpg'
import sw3 from '../../assets/i3.jpg'


function HomeSwiper() {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination,Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: true, }} 
                speed={5000}className="mySwiper">

                <SwiperSlide>
                    <img src={sw1} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide><img src={sw2} alt="Slide 1" /></SwiperSlide>
                <SwiperSlide><img src={sw3} alt="Slide 1" /></SwiperSlide>

            </Swiper>
        </div>
    )
}

export default HomeSwiper