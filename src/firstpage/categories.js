import classes from './categories.module.css'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Categoryies() {
    const history = useHistory();
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('http://specoper99.fikracamp.com/categories', {})
       
        .then(res => res.json())
        .then(data => setCategories(data.categories))
    },[])

    return (
        <section className={classes.CategoryiesSections}>
            <div className={classes.CategoryiesContanier}>
                <h1>Categories Of Gift</h1>
                {categories.map((category) => (<div>{category.categoryName}</div>))}
                 <div className={classes.CategoryiesContanierbox}>
                <div className={classes.CategoryiesContanierDep}>
                    <div className={classes.CategoryiesContanierDepTitle}
                        onClick={() => {
                            history.push("/categories-items")
                        }}
                    >
                        <p>Flower</p>
                    </div>

                </div>


                <div className={classes.CategoryiesContanierDep}>
                    <div className={classes.CategoryiesContanierDepTitle}>
                        <p>Gifts</p>
                    </div>

                </div>
                <div className={classes.CategoryiesContanierDep}>
                    <div className={classes.CategoryiesContanierDepTitle}>
                        <p>Gifts</p>
                    </div>

                </div>


                <div className={classes.CategoryiesContanierDep}>
                    <div className={classes.CategoryiesContanierDepTitle}>
                        <p>Boxes</p>
                    </div>

                </div>

                <div className={classes.CategoryiesContanierDep}>
                    <div className={classes.CategoryiesContanierDepTitle}>
                        <p>Papers</p>
                    </div>

                </div>
                <div className={classes.CategoryiesContanierDep}>
                    <div className={classes.CategoryiesContanierDepTitle}>
                        <p>Candy</p>
                    </div>

                </div></div>
            </div>


        </section>
    )
}