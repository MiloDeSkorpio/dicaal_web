// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function Galeria( props: {imagenes: any} ) {
  

  return (

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Virtual]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className=''
    >

    {props.imagenes.map((imagen: string , index:  number ) => (
            <SwiperSlide key={index}>
              <img src={imagen} alt={`Imagen ${index + 1}`} className='w-full bg-cover' />
            </SwiperSlide>
          ))}

          
        </Swiper>


  )
}
