import { SpecialArrow, TelegramLogo, XLogo } from 'assets/icons';
import { motion } from 'framer-motion';

const iconClasses = 'flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#E1EAF7]';

const AboutBusiness = () => {
    return (
        <div className='mb-10 w-full py-20 md:m-auto md:flex md:max-w-[1200px] md:flex-row-reverse md:items-center'>
            <div className='relative flex items-center justify-center'>
                <motion.img
                    src='/img/evmImg1.webp'
                    alt=''
                    className='absolute z-1 w-[50%] max-w-[240px] opacity-[0.9] md:w-[300px] md:max-w-[unset]'
                    initial={{ y: -80 }}
                    animate={{ y: [-80, -30, -80] }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
                <img src='/img/evmImg2.webp' alt='' className='w-[80%] max-w-[400px] md:w-[550px] md:max-w-[unset]' />
            </div>
            <div className='relative z-5 text-center text-white'>
                <h3 className='accent-font text-[32px] font-bold md:text-left md:text-[52px]'>What is TeQoin</h3>
                <p className='accent-font m-auto w-[270px] text-[14px] tracking-[2px] md:hidden'>
                    <span className='text-[#C2D1E1]'>Next-Gen EVM: Layer-2:</span> Faster. Cheaper. Scalable
                </p>
                <p className='m-auto mt-[8px] w-[90%] text-[12px] leading-[21px] text-[#FDFDFD] md:ml-[0] md:text-justify md:text-[14px] md:leading-[27px]'>
                    TeQoin is a next-generation Bitcoin Layer-2 designed to scale BTC, enable intelligent DeFi, and secure assets against
                    future quantum threats.
                </p>
                <div className='item-center mt-4 flex w-full gap-4 md:mt-8'>
                    <a
                        href=''
                        className='flex h-[38px] w-[190px] items-center justify-center gap-3 rounded-full bg-[#0153FD] text-[12px] font-normal md:h-[52px] md:w-[256px] md:text-[16px]'
                    >
                        Join the Community <SpecialArrow className='w-2 md:w-3' />
                    </a>
                    <div className='hidden items-center gap-4 md:flex'>
                        <a href='' className={iconClasses}>
                            <XLogo />
                        </a>
                        <a href='' className={iconClasses}>
                            <TelegramLogo />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBusiness;
