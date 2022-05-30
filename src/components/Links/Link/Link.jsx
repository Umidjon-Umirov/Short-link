import React, { useState } from 'react';
import { motion } from 'framer-motion';
import s from './Link.module.scss';
const Link = ({ oldLink, newLink, handleClipboard }) => {
    const [copyLink, setCopyLink] = useState(null);
    return (
        <motion.div
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 }}
            className={s.Link}
        >
            <span className={s.old}>{oldLink}</span>
            <motion.span
                whileHover={{ scale: 1.2, fontWeight: 700 }}
                transition={{duration:.1}}
                className={s.new}
            >
                {newLink}
            </motion.span>
            <button
                onClick={(e) => {
                    setCopyLink(newLink);
                    handleClipboard(newLink);
                }}
                style={{
                    backgroundColor: copyLink
                        ? ' #4B406B '
                        : 'hsl(180, 66%, 49%)',
                }}
                className={s.btn}
            >
                {copyLink ? 'copied!' : 'copy'}
            </button>
        </motion.div>
    );
};

export default Link;
