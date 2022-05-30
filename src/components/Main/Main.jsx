import React from 'react';
import s from './Main.module.scss';
import icon from './cardicon.svg';
const Main = () => {
    return (
        <main className={s.Main}>
            <section className={s.sectionMain}>
                <h1 className={s.title}> Advanced Statistics</h1>
                <p className={s.subtitle}>
                    {' '}
                    Track how your links are performing across the web with <br /> our
                    advanced statistics dashboard.
                </p>
                <div className={s.cards}>
                    <div className={s.card}>
                        <div className={s.cardImg}>
                            <img src={icon} alt='' />
                        </div>
                        <h1 className={s.cardTitle}>Brand Resognition</h1>
                        <p className={s.cardText}>
                            {' '}
                            Boost your brand recognition with  each click.
                            Generic links don’t mean a thing. Branded links help
                            instil confidence in your content.
                        </p>
                    </div>
                    <div className={s.card}>
                        <div className={s.cardImg}>
                            <img src={icon} alt='' />
                        </div>
                        <h1 className={s.cardTitle}>Brand Resognition</h1>
                        <p className={s.cardText}>
                            {' '}
                            Boost your brand recognition with each click.
                            Generic links don’t mean a thing. Branded links help
                            instil confidence in your content.
                        </p>
                    </div>
                    <div className={s.card}>
                        <div className={s.cardImg}>
                            <img src={icon} alt='' />
                        </div>
                        <h1 className={s.cardTitle}>Brand Resognition</h1>
                        <p className={s.cardText}>
                            {' '}
                            Boost your brand recognition with each click.
                            Generic links don’t mean a thing. Branded links help
                            instil confidence in your content.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;
