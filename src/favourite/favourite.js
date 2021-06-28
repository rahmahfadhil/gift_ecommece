import classes from './favurate.module.css';
import OrderSlider from '../firstpage/orderslider'
import { useHistory, useParams } from 'react-router-dom'
import { useState } from 'react'

export default function Favourite(props) {
   const itemfavourites = props.value.itemfavourites
    const [favourite, setfavourite] = useState([]);





    const handelAddItemToFavourite = props.value.handelAddItemToFavourite;
    const handelAddItemToCart=props.value.handelAddItemCart;
    const history = useHistory();

    console.log(itemfavourites)
    return (
        <>
            <div className={classes.CategoriesItemspage} id='favourite'>
                <OrderSlider />
                <divs className={classes.CategoriesItemsContainer}>
                    {itemfavourites?.map((item) => (
                        <div key={item.id} className={classes.CategoriesItemsContainerContent}>

                            <div className={classes.CategoriesItemsContentDivider}>
                                <div className={classes.CategoriesItemsImg} style={{ backgroundImage: `url('${item.image}')` }}> </div>
                            </div>
                            <div className={classes.CategoriesItemsContentDivider}>
                                <div ClassName={classes.CategoriesItemsContent}>
                                    <div className={classes.CategoriesItemsDividerContent}
                                    >
                                        <div onClick={() => {
                                            handelAddItemToCart(item.id, item.title, item.image, item.price, item.quantity)
                                            history.push('/cart')
                                        }}>
                                            <i className="fas fa-shopping-cart">

                                            </i></div>
                                        <div onClick={() => {
                                            handelAddItemToFavourite(item.id, item.title, item.image, item.price, item.quantity)
                                            history.push('/favourites')
                                        }}>
                                            <i className="fas fa-heart"></i>
                                        </div>
                                    </div>
                                    <div className={classes.CategoriesItemsDividerContent}>
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className={classes.CategoriesItemsDividerContent}>
                                        <h6>{item.price}$</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </divs>
            </div>
        </>
    )
}