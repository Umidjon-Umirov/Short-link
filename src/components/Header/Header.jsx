import React from 'react';
import Button from '../Button/Button';
import logo from './logo.svg'
import s from './Header.module.scss'
const Header = () => {
    return (
        <header className={s.Header}>
            <section  className={s.headerWrapper} >
               <img  className={s.logo} src={logo}/>
               <ul  className={s.menu}>
                  <li  className={s.menuItem}><a  className={s.link}>Features</a></li>
                  <li  className={s.menuItem}><a  className={s.link}>Pricing</a></li>
                  <li  className={s.menuItem}><a  className={s.link}>Recources</a></li>
               </ul>
               <Button radius={'24px'} size={'100px'} text='Sign Up'/>
            </section>
        </header>
    );
};

export default Header;
