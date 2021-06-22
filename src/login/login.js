import classes from './login.module.css'
import OrderSlider from '../firstpage/orderslider'

export default function Login(){
    return(
        <>

        <div className={classes.loginPage}>
            <OrderSlider/>
            <form className={classes.loginPageForm}>
            <div>
            <input type="text" name="user name" placeholder="user name" />
            <input type="password" name="passsword" placeholder="password" />
            <a href="http://rahma97.fikracamp.com">forget your password?</a>
                <button type='submit'>send<i className="fas fa-location-arrow"></i></button>
                <a href="http://rahma97.fikracamp.com">create account</a>
            </div>



            </form>
        </div>
        </>
    )
}