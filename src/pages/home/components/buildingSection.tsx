import { HeaderGradientCircle } from 'assets/icons';

const BuildingSection = () => {
    return (
        <div className='relative flex h-[550px] flex-col items-center justify-center gap-3 text-center text-white'>
            <HeaderGradientCircle className='pointer-events-none absolute top-[-20%] left-[-10%] -z-1 h-auto w-full lg:top-[-200px] lg:left-[-300px] lg:w-[600px]' />
            <HeaderGradientCircle className='pointer-events-none absolute -z-1 hidden h-auto lg:right-[-300px] lg:bottom-[-200px] lg:block lg:w-[600px]' />
            <img src='/img/buildingImg.png' className='absolute -z-10 h-[600px] w-full object-cover opacity-70 lg:opacity-30' alt='' />
            <div className='w-[90%]'>
                <h3 className='accent-font text-[38px] font-bold md:text-[52px]'>Building EVM for the Future</h3>
                <p className='accent-font text-[16px] md:m-auto md:w-[660px] md:text-[20px]'>
                    A secure, scalable, quantum-ready ecosystem designed for the next era of Bitcoin utility.
                </p>
            </div>
        </div>
    );
};

export default BuildingSection;
