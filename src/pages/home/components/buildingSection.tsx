import { HeaderGradientCircle } from 'assets/icons';
import { motion } from 'framer-motion';

const BuildingSection = () => {
    return (
        <section
            id='vision-mission'
            className='relative flex h-[400px] flex-col items-center justify-center gap-3 text-center text-white lg:mb-20'
        >
            <HeaderGradientCircle className='pointer-events-none absolute top-[-200px] left-[-200px] -z-1 h-auto w-[500px] lg:top-[-200px] lg:left-[-300px] lg:w-[600px]' />
            <HeaderGradientCircle className='pointer-events-none absolute -z-1 hidden h-auto lg:right-[-300px] lg:bottom-[-200px] lg:block lg:w-[600px]' />
            <motion.img
                src='/img/buildingImg.webp'
                className='absolute -z-10 h-[600px] w-full object-cover opacity-70 lg:opacity-30'
                alt=''
                initial={{ rotate: 0, scale: 1 }}
                animate={{ rotate: [0, -10, 0], scale: [1, 1.2, 1] }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
            <div className='w-[90%]'>
                <h3 className='accent-font text-[38px] font-normal md:text-[52px]'>Building EVM for the Future</h3>
            </div>
        </section>
    );
};

export default BuildingSection;
