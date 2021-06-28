import classes from './categories.module.css'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Categoryies() {
    const history = useHistory();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://specoper99.fikracamp.com:29999/categories', {})

            .then(res => res.json())
            .then(data => setCategories(data.categories))
    }, [])

    return (
        <section className={classes.CategoryiesSections}>
            <div className={classes.CategoryiesContanier}>
                <h1>Categories Of Gift</h1>
                <div className={classes.CategoryiesContanierbox}>
                    {categories.map((category) => (
                        <div style={{cursor:"pointer"}} className={classes.CategoryiesContanierDep}>
                            <div className={classes.CategoryiesContanierDepTitle}
                                onClick={() => {
                                    history.push("/categories-items/"+category.categoryName)
                                }}>
                                <p>{category.categoryName}</p>
                            </div>

                        </div>
                    ))}



                   


                   
                    {/* <div className={classes.CategoryiesContanierDep}>
                        <div className={classes.CategoryiesContanierDepTitle}>
                            <p>Candy</p>
                        </div>

                    </div> */}
                    </div>
            </div>


        </section>
    )
}