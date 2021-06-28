import classes from './newitems.module.css'
import jj from "./img/jj.jpg";
import candy from "./img/candy.jpg";
import watch from "./img/watch.jpg";
import tt from "./img/tt.jpg";
import flower from "./img/mm.jpg";
import fl from "./img/kkk.jpg";

export default function NewItems() {
    return (
        <section className={classes.NewItemsSection}>
            <div className={classes.NewItemsSectionContainer}>
            <h1>New Gifts</h1>
             <div className={classes.NewItemsContainer}>
                <div className={classes.NewItemsSectioncontent}>
                    <div className={classes.NewItemsSectioncontentImg} style={{ backgroundImage: `url(${jj})` }}>
                        <div className={classes.NewItemsSectionContentInfo}>
                            <p>
                                $20
                            </p>

                        </div>
                    </div>
                </div>


                <div className={classes.NewItemsSectioncontent}>
                    <div className={classes.NewItemsSectioncontentImg} style={{ backgroundImage: `url(${candy})` }}>
                        <div className={classes.NewItemsSectionContentInfo}>
                            <p>
                                $20
                            </p>
                        </div>
                    </div>
                </div>



                <div className={classes.NewItemsSectioncontent}>
                    <div className={classes.NewItemsSectioncontentImg} style={{ backgroundImage: `url(${watch})` }}>
                        <div className={classes.NewItemsSectionContentInfo}>
                            <p>
                                $20
                            </p>
                        </div>
                    </div>
                </div>

                <div className={classes.NewItemsSectioncontent}>
                    <div className={classes.NewItemsSectioncontentImg} style={{ backgroundImage: `url(${tt})` }}>
                        <div className={classes.NewItemsSectionContentInfo}>
                            <p>
                                $20
                            </p>
                        </div>
                    </div>
                </div>

                <div className={classes.NewItemsSectioncontent}>
                    <div className={classes.NewItemsSectioncontentImg} style={{ backgroundImage: `url(${flower})` }}>
                        <div className={classes.NewItemsSectionContentInfo}>
                            <p>
                                $20
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.NewItemsSectioncontent}>
                    <div className={classes.NewItemsSectioncontentImg} style={{ backgroundImage: `url(${fl})` }}>
                        <div className={classes.NewItemsSectionContentInfo}>
                            <p>
                                $20
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </section>
    )
}