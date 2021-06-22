import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import classes from './orderslider.module.css';

import slide1 from "./img/tt.jpg";
import slide2 from "./img/jj.jpg";
import slide3 from "./img/mm.jpg";
export default function OrderSlider(){
    return (
        <section className={classes.orderSliderSection} id='home'>

<AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={slide1} className={classes.sliderimg} alt=""/>
      <img src={slide2} className={classes.sliderimg} alt=""/>
      <img src={slide3} className={classes.sliderimg} alt=""/>
    </AliceCarousel>
        </section>
    )
}