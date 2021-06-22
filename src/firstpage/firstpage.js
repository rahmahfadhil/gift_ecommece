
import classes from './firstpage.module.css'
import OrderSlider from './orderslider'
import NewItems from './newitems'
import Categoryies from './categories'

export default function FirstPage(){
    return(
        <section className='home'>
            <div className={classes.FirstPage}>
<OrderSlider/>
<NewItems/>
<Categoryies/>


        </div>
        </section>
    )
}