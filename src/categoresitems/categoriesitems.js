import classes from './categoriesitems.module.css'
import OrderSlider from '../firstpage/orderslider'
import {useHistory} from 'react-router-dom'

export default function CategoriesItems(props) {
    const items = props.value.items;
    const setItems=props.value.setItems;
    const quatity=1;
   
    const handelAddItemToCart = props.value.handelAddItemToCart;
    const history = useHistory();
  
    // console.log(items)
    console.log(handelAddItemToCart)
    return (
        <>
        <div className={classes.CategoriesItemspage}>
            <OrderSlider/>

            <div className={classes.CategoriesItemsContainer}>
              {items && items.map((item) => (
              
              <div key={item.id} className={classes.CategoriesItemsContainerContent}>

                 
                  <div className={classes.CategoriesItemsContentDivider}>
                      <div className={classes.CategoriesItemsImg} style={{backgroundImage: `url(${item.image})`}}> </div>
                  </div>
                  <div className={classes.CategoriesItemsContentDivider}>
                 <div className={classes.CategoriesItemsContent}>
                     <div className={classes.CategoriesItemsDividerContent} 
                     onClick={() =>{handelAddItemToCart(item.id,item.title,item.image,item.price,quatity)
                     history.push('/cart')
                     }}>
                     <i className="fas fa-shopping-cart"></i>
                     <i className="fas fa-heart"></i>
   
                     </div>
                     <div className={classes.CategoriesItemsDividerContent}>
                      <h2>{item.title}</h2>
                     </div>
                     <div className={classes.CategoriesItemsDividerContent}>
                    <h6>{item.price}</h6>
                     </div>
                 </div>
                  </div>
                 </div>
              ))}
            </div>
        </div>
        </>
    )
}