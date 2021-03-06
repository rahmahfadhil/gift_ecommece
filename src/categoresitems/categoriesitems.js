import classes from './categoriesitems.module.css'
import OrderSlider from '../firstpage/orderslider'
import { useHistory, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function CategoriesItems(props) {
    // const items = props.value.items;
    // const setItems = props.value.setItems;
    const { categoryName } = useParams();
    const [categories, setCategories] = useState([]);

    const quatity = 1;
    useEffect(() => {
        fetch(`http://specoper99.fikracamp.com:29999/products/category/${categoryName}`, {})

            .then(res => res.json())
            .then(data => setCategories(data.products))
    }, [])

    console.log(categories);


    const handelAddItemToCart = props.value.handelAddItemToCart;
    const handelAddItemToFavourite= props.value.handelAddItemToFavourite

    const history = useHistory();

    // console.log(items)
    console.log(handelAddItemToCart)
    return (
        <>
            <div className={classes.CategoriesItemspage}>
                <OrderSlider />
                <divs className={classes.CategoriesItemsContainer}>
                    {categories?.map((item) => (
                        <div key={categories.id} className={classes.CategoriesItemsContainerContent}>

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
                                        <div  onClick={() => {
                                            handelAddItemToFavourite(item.id, item.title, item.image, item.price, item.quantity)
                                            history.push('/favourite')
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