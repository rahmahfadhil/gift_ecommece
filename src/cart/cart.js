import classes from './cart.module.css'
import OrderSlider from '../firstpage/orderslider'
import { useState } from 'react'


export default function Cart(props) {
    const itemcart = props.value.itemcart;

    const isEmpte = itemcart.length==undefined;

    const items = props.value.items;
    const [count, setCount] = useState([1]);
    const handelcountIncrease = () => {

        setCount(parseInt(count) + 1);
    }
    const handelcountDecrease = () => {
        count > 0 && setCount(parseInt(count) - 1)
    }
    console.log(itemcart)

    const EmptyCart = () => (<p >you have no items in your cart, start adding item</p>
    );

    const FilledCart = () => (
        <>
        
            { itemcart && itemcart.map((item) => (
                <div className={classes.cardPageContainer} key={item.id}>
                    <div className={classes.cardPageContainerDivider}>
                        <div className={classes.cardPageContainerDividerBoxImg}>
                            <div className={classes.cardPageContainerDividerImg} style={{ backgroundImage: `url(${item.image})` }}>
                                <i className='fas fa-times'></i>
                            </div>
                        </div>
                        <div className={classes.cardPageContainerDividerContent}>
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                        </div>

                    </div>


                    <div className={classes.cardPageContainerDivider}>
                        <div className={classes.cardPageContainerDividercount}>
                            <div className={classes.cardPageContainerDividercountIncDec} onClick={handelcountDecrease}>{itemcart ? ``:`-`}</div>
                            <div className={classes.cardPageContainerDividercountIncDec}>{count}</div>
                            <div className={classes.cardPageContainerDividercountIncDec} onClick={handelcountIncrease}>+</div>





                        </div> <br />
                        <div className={classes.cardPageContainerDividertotalprice}>
                            <span>total:{item.price}</span>
                        </div><br />
                    </div>

                </div>

            ))}

        </>
    )
    return (
        <>
            <div className={classes.cardPage}>
                <OrderSlider />
                <div className={classes.cardContainer}>
                    
                    {isEmpte ? <EmptyCart /> : <FilledCart />}
                </div>

            </div>


        </>
    )
}