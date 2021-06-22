import classes from './footer.module.css'


export default function Footer() {
    return (
        <footer className={classes.footer} id="contactme">

            <div className={classes.footerAbout}>
                <div className={classes.footerAboutUs}>
                    <div className={classes.footerAboutUSContainerTitle}>
                        <h1>About Us</h1>
                    </div>



                    <div className={classes.footerAboutUSContainerContent}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                            Quisque metus odio, porta eget ipsum id, hendrerit maximus leo. Quisque finibus enim ligula, viverra luctus enim pretium nec.


                    </p></div>


                </div>

                <div className={classes.footerAboutUs}>
                    <div className={classes.footerAboutUsInf}>
                    <i className="fas fa-phone-alt"></i>
                    <p>Phone</p>
                    <p>Number:0751  0 00 00 0</p>
                    </div>
                    <div className={classes.footerAboutUsInf}>
                    <i className="fas fa-envelope-square"></i>
                    <p>Phone</p>
                    <p>Number:0751  0 00 00 0</p>
                    </div>
                    <div className={classes.footerAboutUsInf}>
                    <i className="fas fa-location-arrow"></i>                    <p>Phone</p>
                    <p>Number:0751  0 00 00 0</p>
                    </div>

                </div>
                <div className={classes.footerAboutUs}>
                <div className={classes.footerAboutUscontact}>
                <div className={classes.contactMeContainerSide}>
                    <h2>Contact Us</h2>
                    <form className={classes.contactmeForm}>
                        <div> <input type="text" name="name" placeholder="name" />
                            <input type="email" name="email" placeholder="email" />
                        </div>
                        <input type="text" name="subject" placeholder="subject" />
                        <textarea name='message' placeholder='message'></textarea>
                        <button type='submit'>send<i className="fas fa-location-arrow"></i></button>
                    </form>
                </div>
                </div>
               
               
               
                <div className={classes.footerAboutUsSocial}>
                <div className={classes.ContactMePersonalSocial}>
                                <a href="http://rahma97.fikracamp.com" className="fab fa-facebook"></a>
                                <a href="http://rahma97.fikracamp.com" className="fab fa-twitter"></a>
                                <a href="http://rahma97.fikracamp.com" className="fab fa-instagram"></a>
                                <a href="http://rahma97.fikracamp.com" className="fab fa-github"></a>
                                <a href="http://rahma97.fikracamp.com" className="fab fa-linkedin"></a>

                            </div>
                </div>

                </div>





            </div>





            <div className={classes.footerContainer}>
                <span>2021 &copy; <a href="http://rahma97.fikracamp.com">Rahma Abbas</a></span>




            </div>

        </footer>
    )
}