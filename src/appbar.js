import classes from './appbar.module.css';
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import {Link , animateScroll} from 'react-scroll'


export default function AppBar() {
    const [clicked, setclick] = useState(false);

    const handleClick = () => {
        setclick(!clicked)
        console.log(clicked)
    }
    const history = useHistory()
    return (
        <header className={classes.appbar}>

            <div className={classes.appbarContainer}>
                <div className={classes.appbarContainerDivider}>
                    <div className={classes.appbarContainermenu}>

                        <nav className={classes.headerNav}>
                            <div className={classes.navmobbile} onClick={handleClick} >

                                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>



                            </div>



                            <div className={clicked ? classes.headerul : classes.headerulMenu}>
                                <a href='/login'>
                                    <i className="far fa-user"><p>Login</p></i></a>

                                <ul >
                                    <li>
                                        <a href="/" className={classes.navLink} >Home</a>
                                    </li>
                                    <li>
                                        <a href="#about" className={classes.navLink} >About</a>
                                    </li>
                                    <li>
                                        <a href="#resume" className={classes.navLink} >resume</a>
                                    </li>
                                    <li>
                                        <Link to='contactme' spy={true} smooth={true} duration={500}  className={classes.navLink}>Contact</Link>
                                    </li>

                                </ul></div>

                        </nav>

                    </div>
                </div>
                <div className={classes.appbarContainerDivider}>
                    <img alt='jj' src='Presents.svg' className={classes.appbarContainerDividerContentLogo}></img>
                    <i className={classes.appbarContainerDividerContentText}>Gift App</i>
                </div>
                <div className={classes.appbarContainerDivider}>

                    <a href="http://rahma97.fikracamp.com" className={classes.appbarContainerDividerContentbasket}><img src='shopping-basket.svg' alt='ah' onClick={()=>{history.push('/cart')}}></img></a>
                    <i className={classes.appbarcountNumber}>0</i>

                </div>
                <div className={classes.scrollToTap} onClick={()=>animateScroll.scrollToTop({
                  
                })}><i class="fas fa-angle-double-up" ></i></div>



            </div>

        </header>
    )
}



/*

<nav className={classes.headerNav}>
            <div className={classes.navmobbile} onClick={handleClick} >

              <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>



            </div>



            <div className={classes.headerMenu}></div>
            <ul className={clicked ? classes.headerul : classes.headerulMenu}>
              <li>
                <a href="#home" className={classes.navLink} >Home</a>
              </li>
              <li>
                <a href="#about" className={classes.navLink} >About</a>
              </li>
              <li>
                <a href="#resume" className={classes.navLink} >resume</a>
              </li>

            </ul>

          </nav>



*/