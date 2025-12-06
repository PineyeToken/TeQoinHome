import { HeaderGradientCircle } from 'assets/icons';
import { motion } from 'framer-motion';

const Mission = () => {
    return (
        <section className='relative mb-20 flex-row-reverse items-center justify-center gap-10 p-5 lg:m-auto lg:mb-50 lg:flex lg:w-[1200px] lg:justify-between lg:gap-10'>
            <HeaderGradientCircle className='pointer-events-none absolute top-[-100px] right-[-294px] -z-1 h-auto w-[600px] lg:top-[-200px] lg:right-[unset] lg:left-[-200px] lg:w-[800px]' />
            <div className='lg:w-full'>
                <h3 className='accent-font text-center text-[50px] font-normal text-white lg:w-full lg:text-left lg:text-[40px]'>Vision</h3>
                <p className='accent-font m-auto w-[350px] text-center text-[18px] font-light text-white lg:m-0 lg:w-[500px] lg:text-left lg:text-[20px]'>
                    The world’s zero-fee blockchain, governed by its people.
                </p>
                <h3 className='accent-font mt-10 text-center text-[50px] font-normal text-white lg:w-full lg:text-left lg:text-[40px]'>
                    Mission
                </h3>
                <p className='accent-font m-auto w-[350px] text-center text-[18px] font-light text-white lg:m-0 lg:w-[500px] lg:text-left lg:text-[20px]'>
                    Full Community Governance: Let token holders control network decisions.
                </p>
            </div>
            <div className='relative'>
                <motion.img
                    src='/img/ball.webp'
                    className='m-auto mt-30 w-[300px] lg:m-[unset] lg:w-[400px] lg:min-w-[500px]'
                    alt=''
                    initial={{ y: -40 }}
                    animate={{ y: [-40, -0, -40] }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
                <motion.div
                    initial={{ width: 300 }}
                    animate={{ width: [300, 100, 300] }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                    className='relative top-[50px] m-auto hidden h-[10px] rounded-[220%] bg-[radial-gradient(circle,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.20)20%,rgba(0,0,0,0)70%)] lg:block'
                ></motion.div>
            </div>
        </section>
    );
};

export default Mission;
