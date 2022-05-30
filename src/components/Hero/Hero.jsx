import React from 'react';
import Button from '../Button/Button';
import hero from './working.svg'
import s from './Hero.module.scss'
const Hero = () => {
    return (
        <div>
            <section className={s.Hero}>
                <div className={s.content}>
                    <h1 className={s.title}> More than just <br /> shorter links</h1>
                    <p className={s.text}>
                        {' '}
                        Build your brand’s recognition and get detailed insights
                        on how your links are performing.
                    </p>
                    <Button size={'160px'} text={'Get Started'} radius={'24px'}/>
                </div>
                <div className={s.img}>
                     <img style={{'width':'100%'}} src={hero} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Hero;
