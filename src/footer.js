import classes from './footer.module.css'


export default function Footer() {
    return (
        <footer className={classes.footer} id="contactme">

            <div className={classes.footerAbout}>
                <div className={classes.footerContainer}>
                    <div className={classes.footerContainerDiv}>
                        <div className={classes.footerContainerDivContent}>
                            <div>
                                <i className="fas fa-phone-alt"></i>
                                <p>Phone</p>
                                <p>Number:0751  0 00 00 0</p>
                            </div>
                        </div>
                        <div className={classes.footerContainerDivContent}>
                            <div>
                            <i className="fas fa-envelope-square"></i>
                            <p>Phone</p>
                            <p>Number:0751  0 00 00 0</p>
                            </div>
                        </div>
                        <div className={classes.footerContainerDivContent}>
                            <div>
                            <i className="fas fa-location-arrow"></i>     
                                           <p>Phone</p>
                            <p>Number:0751  0 00 00 0</p>
                            </div>
                        </div>


                    </div>
                     

                     <div className={classes.footerContainerDivInfo}>
                     <div className={classes.footerContainerDivInfoContent}>
                         <h5>About Us</h5>
                     <p>It’s a web application for displaying  the items of the gift  </p>
                     </div>
                     <div className={classes.footerContainerDivInfoContent}>
                     <h5>Company</h5>
                     <a href='/contactus'>Contact us</a>
                     <a href='/all_item'>All Items</a>
                     <a href='/sitting'>Sitting</a>
                     </div>
                     <div className={classes.footerContainerDivInfoContent}>
                         <h5>Gift Ecommerce</h5>
                      <a href="http://rahma97.fikracamp.com">Rahma Abbas<br/> 2021 &copy;</a>

                     </div>
                     <div className={classes.footerContainerDivInfoContent}>
                         <h5>Follow US</h5>
                    <div>
                    <a href="http://rahma97.fikracamp.com" >
                     <i className="fab fa-facebook"></i>
                     </a>
                        <a href="http://rahma97.fikracamp.com">
                        <i class="fab fa-twitter-square"></i>
                        </a>

                        <a href="http://rahma97.fikracamp.com">
                        <i class="fab fa-instagram-square"></i>
                        </a>

                        <a href="http://rahma97.fikracamp.com" >
                        <i class="fab fa-whatsapp-square"></i>
                        </a>
                    </div>
                     </div>
                     

                     </div>
                </div>

            </div>

        </footer>
    )
}


/*

 <div className={classes.footerAboutUs}>




                    <div className={classes.footerAboutUSContainerContent}>
                    <div className={classes.footerAboutUSContainerTitle}>
                        <h2>About Us</h2>
                    </div><br/><br/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                            Quisque metus odio, porta eget ipsum id, hendrerit maximus leo. Quisque finibus enim ligula, viverra luctus enim pretium nec.


                    </p></div>


                </div>

                <div className={classes.footerAboutUs}>
                    <div className={classes.footerAboutUscontact}>
                        <div className={classes.contactMeContainerSide}>
                            <h2>Contact Us</h2>
                            <form className={classes.contactmeForm}>
                                <div> <input type="text" name="name" placeholder="name" />
                                    <input type="email" name="email" placeholder="email" />
                                </div>
                                <div className={classes.formInput}>
                                   <input type="text" name="subject" placeholder="subject" />
                                <textarea name='message' placeholder='message'></textarea>
                                </div>

                                <button type='submit'>send<i className="fas fa-location-arrow"></i></button>
                            </form>
                        </div>
                    </div>
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

            </div>





            <div className={classes.footerContainer}>

                <div className={classes.footerAboutUsSocial}>
                    <div className={classes.ContactMePersonalSocial}>
                        <a href="http://rahma97.fikracamp.com" className="fab fa-facebook"></a>
                        <a href="http://rahma97.fikracamp.com" className="fab fa-twitter"></a>
                        <span>2021 &copy; <a href="http://rahma97.fikracamp.com">Rahma Abbas</a></span>

                        <a href="http://rahma97.fikracamp.com" className="fab fa-instagram"></a>

                        <a href="http://rahma97.fikracamp.com" className="fab fa-github"></a>

                    </div>

                </div>


*/