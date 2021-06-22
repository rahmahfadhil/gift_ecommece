
import classes from './header.module.css'
import Particles from 'react-particles-js'
export default function Header(){
    return(
        <section className={classes.headerSection}>
        <div className={classes.headerContainer}>
        <Particles width='100%' height="100vh" />
         <div className={classes.headerContainerContent}></div>
        </div>
        </section>
    )
}