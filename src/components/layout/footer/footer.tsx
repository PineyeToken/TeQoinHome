import { TelegramLogo, XLogo } from 'assets/icons';

const iconClasses = 'flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#E1EAF7] md:h-[56px] md:w-[56px] ';

const Footer = () => {
    return (
        <footer className='relative mt-100 w-full px-5'>
            <div className='flex h-[100px] w-[calc(100%-20px)] flex-col items-center justify-center gap-2 rounded-t-[20px] bg-[linear-gradient(120deg,#0158FF_39%,#013599_111.62%)] text-center text-[14px] text-white md:w-[calc(100%-250px)] md:flex-row md:gap-4 md:text-[20px]'>
                <p>Join Us, to redefine EVM for futures</p>
                <div className='flex items-center justify-center gap-4'>
                    <a href='' className={iconClasses}>
                        <XLogo />
                    </a>
                    <a href='' className={iconClasses}>
                        <TelegramLogo />
                    </a>
                </div>
            </div>
            <div className='absolute right-[20px] bottom-0 -z-10 flex h-[160px] w-[200px] items-center justify-center rounded-t-[20px] bg-[#E1EAF7] md:h-[122px] md:w-[350px]'>
                <img
                    src='/img/logoWithText.webp'
                    className='relative top-[-46px] w-[125px] md:top-[unset] md:right-[-40px] md:w-[200px]'
                    alt=''
                />
            </div>
        </footer>
    );
};

export default Footer;
