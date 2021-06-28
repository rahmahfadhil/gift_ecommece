import classes from './cart.module.css'
import OrderSlider from '../firstpage/orderslider'
import { useState } from 'react'


export default function Cart(props) {
    const itemcart = props.value.itemcart;
    const isEmpte = itemcart.length==undefined;

    const items = props.value.items;
    const counters = {};
    const totalprices={};
    items.forEach((item)=>totalprices[item.id]=0)
    itemcart.forEach((item) => counters[item.id] = 0);
    const [prices, setprices] = useState(totalprices);
    const [count, setCount] = useState(counters);
    const handelcountIncrease = (id,price) => {
        const oldCount = {...count};
        const oldprices={...prices}
        if(oldCount[id] === undefined || oldprices[id]) {
            oldCount[id] = 0
            oldprices[id] =0

        }
        oldCount[id] = parseInt(oldCount[id]) + 1;
        oldprices[id]=parseInt(oldprices[id]+price[id])
        setCount(oldCount);
        setprices(oldprices)
    }
    const handelcountDecrease = (id) => {
        const oldCount = {...count};
        if(oldCount[id] === undefined) {
            oldCount[id] = 0
        }
        if(oldCount[id] > 0)
            oldCount[id] = parseInt(oldCount[id]) - 1;
        setCount(oldCount);
    }

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
                            <div className={classes.cardPageContainerDividercountIncDec} onClick={() => handelcountDecrease(item.id,item.price)}>{itemcart ? ``:`-`}-</div>
                            <div className={classes.cardPageContainerDividercountIncDec}>{count[item.id]}</div>
                            <div className={classes.cardPageContainerDividercountIncDec} onClick={() => handelcountIncrease(item.id,item.price)}>+</div>
                        </div> <br />
                        <div className={classes.cardPageContainerDividertotalprice}>
                            <span>total:{totalprices[item.id]}</span>
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