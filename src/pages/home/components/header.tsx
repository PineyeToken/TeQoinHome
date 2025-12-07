import { useEffect } from 'react';

// Assets
import { HeaderGradientCircle, SpecialArrow } from 'assets/icons';

const Header = () => {
    useEffect(() => {
        const video = document.querySelector('video');
        if (video) {
            video.play().catch(err => {
                console.warn('Autoplay failed:', err);
            });
        }
    }, []);

    return (
        <header
            id='home'
            className='relative flex h-[90vh] flex-col items-center overflow-hidden pt-30 text-center font-bold text-white md:h-screen md:justify-center'
        >
            <HeaderGradientCircle className='absolute top-[-100%] right-[-50%] -z-1 md:flex' />
            <span className='absolute bottom-0 left-0 -z-1 h-[200px] w-full bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)]'></span>
            <video
                playsInline
                autoPlay
                loop
                controls={false}
                muted
                className='video absolute top-0 left-0 -z-20 h-screen w-full object-none'
            >
                <source src='/video/headerVideo.mp4' type='video/mp4' />
            </video>

            <span className='absolute -z-1 hidden h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle,rgb(0_0_0_/50%)_0%,rgb(0_0_0_/50%)_19%,rgba(0,0,0,0)_70%)] md:block'></span>
            <h1 className='accent-font mb-2 text-[16px] font-medium tracking-[3px] text-[#0153FD] md:-mt-20 md:text-[40px] md:tracking-[4px]'>
                TeQoin
            </h1>
            <h3 className='accent-font text-[24px] tracking-[3px] md:text-[60px] md:tracking-[6px]'>The Next-Generation</h3>
            <h2 className='accent-font -mt-3 text-[41px] tracking-[5px] md:-mt-0 md:mb-6 md:text-[100px] md:leading-[60px] md:tracking-[10px]'>
                EVM Layer-2
            </h2>
            <h4 className='mt-3 mb-5 w-[280px] text-[12px] font-normal md:w-[unset] md:text-[20px] md:tracking-[1.3px]'>
                Scaling Solution Using Optimistic Rollups on EVM for zero fee.
            </h4>
            <a
                href='https://t.me/TeQoin'
                target='_blank'
                className='flex h-[38px] w-[190px] items-center justify-center gap-3 rounded-full bg-[#0153FD] text-[12px] font-normal md:mt-4 md:h-[52px] md:w-[256px] md:text-[16px]'
            >
                Join the Community <SpecialArrow className='w-2 md:w-3' />
            </a>
        </header>
    );
};

export default Header;
