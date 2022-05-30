import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../../store/LinksSlice';
import Link from './Link/Link';
import s from './Links.module.scss';
const Links = () => {
    const linkData = useSelector(selectData);
    
    const handleClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };
    if (!linkData.length) return null;
    return (
        <section className={s.Links}>
            {linkData.map((e) => (
                <Link
                     key={nanoid()}
                    oldLink={e.original_link}
                    newLink={e.short_link3}
                    handleClipboard={handleClipboard}
                />
            ))}
        </section>
    );
};

export default Links;
