import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import { Cross, Menu, TelegramLogo, XLogo } from 'assets/icons';

// Components
import { navbarLinks } from './desktop';

const iconClasses = 'flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#E1EAF7]';

const MobileNavbar = () => {
    const [sandwichMenuStatus, setSandwichMenuStatus] = useState(false);
    return (
        <>
            <nav className='fixed top-0 z-50 flex h-[58px] w-full items-center justify-between bg-white px-5 pl-2 lg:hidden'>
                <img src='/img/logoWithText.webp' className='w-[140px]' alt='' />{' '}
                <AnimatePresence mode='wait'>
                    {sandwichMenuStatus ? (
                        <motion.div
                            key='cross'
                            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className='cursor-pointer'
                            onClick={() => setSandwichMenuStatus(!sandwichMenuStatus)}
                        >
                            <Cross />
                        </motion.div>
                    ) : (
                        <motion.div
                            key='menu'
                            initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className='cursor-pointer'
                            onClick={() => setSandwichMenuStatus(!sandwichMenuStatus)}
                        >
                            <Menu />
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            <AnimatePresence mode='wait'>
                {sandwichMenuStatus && (
                    <motion.section
                        key='mobile-menu'
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{
                            duration: 0.35,
                            ease: 'easeOut'
                        }}
                        className='fixed top-[58px] left-0 z-50 flex h-[calc(100vh-58px)] w-full flex-col justify-between bg-[#070B0A] p-[20px] pt-[32px] pb-[40px]'
                    >
                        <ul className='rounded-[5px] bg-[#141F37] p-5'>
                            {navbarLinks.map((item, index) => (
                                <li
                                    key={`navbar-links-${index}`}
                                    className={`relative flex border-b-2 border-b-[#2C3B5B] text-[14px] text-white transition-all duration-300 before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-[#4C6CFF] before:transition-all before:duration-300 last:border-b-0 hover:text-[#3385FF] hover:before:w-[72px] ${window.location.hash === item.link ? '!text-[#3385FF] before:w-[72px] before:bg-[#4C6CFF]' : ''}`}
                                >
                                    <a href={item.link} className='flex h-full w-full py-4'>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className='flex items-center justify-center gap-3'>
                            <a href='' className={iconClasses}>
                                <XLogo />
                            </a>
                            <a href='' className={iconClasses}>
                                <TelegramLogo />
                            </a>
                            <a
                                href=''
                                className='flex h-[45px] w-[124px] items-center justify-center rounded-full bg-[#0153FD] text-[14px] text-white'
                            >
                                Join Us
                            </a>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileNavbar;
