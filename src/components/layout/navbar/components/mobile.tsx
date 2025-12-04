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
            <nav className='fixed top-0 flex h-[58px] w-full items-center justify-between bg-white px-5 pl-2 lg:hidden'>
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
                        className='h-[calc(100vh-58px)] fixed top-[58px] left-0 z-50 w-full bg-[#070B0A] p-[20px] pt-[32px] pb-[40px] flex flex-col justify-between'
                    >
                        <ul className='bg-[#141F37] p-5 rounded-[5px]'>
                            {navbarLinks.map((item, index) => (
                                <li
                                    key={`navbar-links-${index}`}
                                    className={`relative flex text-white text-[14px] transition-all duration-300 border-b-2 border-b-[#2C3B5B] last:border-b-0 before:absolute before:left-0 before:bottom-[-2px] before:h-[2px] before:w-0 before:bg-[#4C6CFF] before:transition-all before:duration-300 hover:before:w-[72px] hover:text-[#3385FF] ${window.location.hash === item.link ? '!text-[#3385FF] before:bg-[#4C6CFF] before:w-[72px]' : ''}`}
                                >
                                    <a href={item.link} className='flex w-full h-full py-4'>
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
                                className='w-[124px] h-[45px] rounded-full bg-[#0153FD] flex items-center justify-center text-white text-[14px]'
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
