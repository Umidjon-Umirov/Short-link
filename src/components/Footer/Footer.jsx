import React from 'react';
import s from './Footer.module.scss'
import fb from './facebook.svg'
import insta from './instagram.svg'
import tw from './twitter.svg'
import pt from './pinterest.svg'
const Footer = () => {
    return (
        <footer  className={s.Footer}>
            <section className={s.footerSection}>
                <div className={s.logo}>
                    <h1 className={s.logoName}>Shortly</h1>
                </div>
                <div className={s.menu}>
                    <h1 className={s.title}>Features</h1>
                    <ul>
                        <li className={s.item}>
                            <a href='#' className={s.link}>Link Shortening</a>
                        </li>
                        <li className={s.item}>
                            <a className={s.link} href='#'>Branded Links</a>
                        </li>
                        <li className={s.item}>
                            <a  className={s.link} href='#'>Analytics</a>
                        </li>
                    </ul>
                </div>
                <div className={s.messengers}>
                    <img src={fb} alt='' />
                    <img src={insta} alt='' />
                    <img src={tw} alt='' />
                </div>
            </section>
        </footer>
    );
};

export default Footer;
