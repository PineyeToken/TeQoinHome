import { Reliability, ShooingStar, ZeroFee } from 'assets/icons';

const BenefitsCart = () => {
    return (
        <>
            <h3 className='accent-font mb-4 text-center text-[38px] font-medium text-white lg:mb-10 lg:text-[52px]'>
                Why <span className='font-semibold text-[#0153FD]'>TeQoin?</span>
            </h3>
            <section
                id='features'
                className='mb-4 flex w-full flex-col items-center justify-center gap-4 px-[20px] lg:m-auto lg:mb-20 lg:flex-row lg:p-0 lg:px-[20px] xl:w-[1200px]'
            >
                <div className='w-full rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                    <div className='rounded-[16px] bg-[#141E35] p-[22px] text-[#FDFDFD] lg:py-[30px]'>
                        <ZeroFee className='mb-4' />
                        <p className='accent-font mb-2 text-[19px] font-normal'>Zero Fees</p>
                        <small className='accent-font text-[14px] lg:font-extralight'>
                            Send, pay, and trade without any transaction costs, making blockchain accessible to everyone.
                        </small>
                    </div>
                </div>
                <div className='w-full rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                    <div className='rounded-[16px] bg-[#141E35] p-[22px] text-[#FDFDFD] lg:py-[30px]'>
                        <ShooingStar className='mb-4' />
                        <p className='accent-font mb-2 text-[19px] font-normal'>High Speed & Throughput</p>
                        <small className='accent-font text-[14px] lg:font-extralight'>
                            Optimized for fast transactions and high TPS, so apps run smoothly and users don’t wait.
                        </small>
                    </div>
                </div>
                <div className='w-full rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                    <div className='rounded-[16px] bg-[#141E35] p-[22px] text-[#FDFDFD] lg:py-[30px]'>
                        <Reliability className='mb-4' />
                        <p className='accent-font mb-2 text-[19px] font-normal'>Efficiency & Reliability</p>
                        <small className='accent-font text-[14px] lg:font-extralight'>
                            Low latency and reliable confirmations ensure a stable, secure, and frictionless experience.
                        </small>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BenefitsCart;
