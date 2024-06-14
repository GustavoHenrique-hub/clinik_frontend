import "./moveSlide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../assets/images/manicomio2.jpg";
import Slide2 from "../../assets/images/manicomio3.png";
import Slide3 from "../../assets/images/Gif.gif";

const data = [
  { id: "1", image: { Slide1 } },
  { id: "2", image: { Slide2 } },
  { id: "3", image: { Slide3 } },
];

function MoveSlide() {
  return (
    <div className="container">
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MoveSlide;
