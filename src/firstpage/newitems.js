import classes from './newitems.module.css'

export default function NewItems() {
    return (
        <section className={classes.NewItemsSection}>
            <div className={classes.NewItemsSectionContainer}>
            <h1>New Gifts</h1>
             <div className={classes.NewItemsContainer}>
                <div className={classes.NewItemsSectioncontent}>
                    <div className={classes.NewItemsSectioncontentImg}>
                        <div className={classes.NewItemsSectionContentInfo}>
                            <p>
                                $20
                            </p>
                        </div>
                    </div>
                </div>


                <div className={classes.NewItemsSectioncontent}>
                    <div className={classes.NewItemsSectioncontentImg}>
                        <div className={classes.NewItemsSectionContentInfo}>
                            <p>
                                $20
                            </p>
                        </div>
                    </div>
                </div>



                <div className={classes.NewItemsSectioncontent}>
                    <div className={classes.NewItemsSectioncontentImg}>
                        <div className={classes.NewItemsSectionContentInfo}>
                            <p>
                                $20
                            </p>
                        </div>
                    </div>
                </div>

                <div className={classes.NewItemsSectioncontent}>
                    <div className={classes.NewItemsSectioncontentImg}>
                        <div className={classes.NewItemsSectionContentInfo}>
                            <p>
                                $20
                            </p>
                        </div>
                    </div>
                </div>

                <div className={classes.NewItemsSectioncontent}>
                    <div className={classes.NewItemsSectioncontentImg}>
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