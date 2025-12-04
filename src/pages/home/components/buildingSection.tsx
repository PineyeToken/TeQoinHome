const BuildingSection = () => {
    return (
        <div className='relative flex h-[550px] flex-col items-center justify-center gap-3 text-center text-white'>
            <img src='/img/buildingImg.png' className='absolute -z-10 h-[600px] w-full object-cover opacity-70' alt='' />
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
