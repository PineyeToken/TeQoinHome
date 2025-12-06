import { Reliability, ShooingStar, ZeroFee } from 'assets/icons';

const BenefitsCart = () => {
    return (
        <section
            id='features'
            className='mb-4 flex w-full flex-col items-center justify-center gap-4 px-[20px] lg:m-auto lg:flex-row lg:p-0 lg:px-[20px] xl:w-[1200px]'
        >
            <div className='rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                <div className='rounded-[16px] bg-[#141E35] p-[22px] text-[#FDFDFD]'>
                    <ZeroFee className='mb-4' />
                    <p className='accent-font mb-2 text-[19px] font-bold'>Zero Fees</p>
                    <small className='accent-font text-[14px]'>
                        Send, pay, and trade without any transaction costs, making blockchain accessible to everyone.
                    </small>
                </div>
            </div>
            <div className='rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                <div className='rounded-[16px] bg-[#141E35] p-[22px] text-[#FDFDFD]'>
                    <ShooingStar className='mb-4' />
                    <p className='accent-font mb-2 text-[19px] font-bold'>High Speed & Throughput</p>
                    <small className='accent-font text-[14px]'>
                        Optimized for fast transactions and high TPS, so apps run smoothly and users don’t wait.
                    </small>
                </div>
            </div>
            <div className='rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                <div className='rounded-[16px] bg-[#141E35] p-[22px] text-[#FDFDFD]'>
                    <Reliability className='mb-4' />
                    <p className='accent-font mb-2 text-[19px] font-bold'>Efficiency & Reliability</p>
                    <small className='accent-font text-[14px]'>
                        Low latency and reliable confirmations ensure a stable, secure, and frictionless experience.
                    </small>
                </div>
            </div>
        </section>
    );
};

export default BenefitsCart;
