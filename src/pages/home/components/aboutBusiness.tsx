import { SpecialArrow, TelegramLogo, XLogo } from 'assets/icons';
import { motion } from 'framer-motion';

const iconClasses = 'flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#E1EAF7]';

const AboutBusiness = () => {
    return (
        <div className='mb-10 w-full py-20 lg:m-auto lg:flex lg:flex-row-reverse lg:items-center lg:p-[20px] xl:w-[1200px]'>
            <div className='relative flex items-center justify-center'>
                <motion.img
                    src='/img/evmImg1.webp'
                    alt=''
                    className='absolute z-1 w-[50%] max-w-[240px] opacity-[0.9] lg:w-[300px] lg:max-w-[unset]'
                    initial={{ y: -80 }}
                    animate={{ y: [-80, -30, -80] }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
                <img src='/img/evmImg2.webp' alt='' className='w-[80%] max-w-[400px] lg:w-[550px] lg:max-w-[unset]' />
            </div>
            <div className='relative z-5 text-center text-white'>
                <h3 className='accent-font text-[32px] font-bold lg:text-left lg:text-[52px]'>What is TeQoin</h3>
                <p className='m-auto mt-[8px] w-[90%] text-[12px] leading-[21px] text-[#FDFDFD] lg:ml-[0] lg:text-justify lg:text-[14px] lg:leading-[27px]'>
                    TeQoin is an Ethereum Layer-2 scaling solution using Optimistic Rollups to deliver zero-fee, high-speed transactions and
                    scalable dApps, while remaining fully community-governed and compatible with Ethereum
                </p>
                <div className='item-center mt-4 flex w-full justify-center gap-4 lg:mt-8 lg:justify-start'>
                    <a
                        href=''
                        className='flex h-[38px] w-[190px] items-center justify-center gap-3 rounded-full bg-[#0153FD] text-[12px] font-normal lg:h-[52px] lg:w-[256px] lg:text-[16px]'
                    >
                        Join the Community <SpecialArrow className='w-2 lg:w-3' />
                    </a>
                    <div className='hidden items-center gap-4 lg:flex'>
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
