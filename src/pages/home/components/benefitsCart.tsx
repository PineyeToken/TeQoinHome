import { ShooingStar } from 'assets/icons';

// TODO: handle
const BenefitsCart = () => {
    return (
        <section className='mb-20 flex w-full flex-col items-center justify-center gap-4 px-[20px] md:m-auto md:w-[1200px] md:flex-row md:p-0'>
            <div className='rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                <div className='rounded-[16px] bg-[#141E35] p-[22px] text-[#FDFDFD]'>
                    <ShooingStar className='mb-4' />
                    <p className='accent-font mb-2 text-[19px] font-bold'>Zero Fees</p>
                    <small className='accent-font text-[14px]'>
                        Send, pay, and trade without any transaction costs, making blockchain accessible to everyone.
                    </small>
                </div>
            </div>
            <div className='rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                <div className='rounded-[16px] bg-[#141E35] p-[22px] text-[#FDFDFD]'>
                    <ShooingStar className='mb-4' />
                    <p className='accent-font mb-2 text-[19px] font-bold'>Zero Fees</p>
                    <small className='accent-font text-[14px]'>
                        Send, pay, and trade without any transaction costs, making blockchain accessible to everyone.
                    </small>
                </div>
            </div>
            <div className='rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                <div className='rounded-[16px] bg-[#141E35] p-[22px] text-[#FDFDFD]'>
                    <ShooingStar className='mb-4' />
                    <p className='accent-font mb-2 text-[19px] font-bold'>Zero Fees</p>
                    <small className='accent-font text-[14px]'>
                        Send, pay, and trade without any transaction costs, making blockchain accessible to everyone.
                    </small>
                </div>
            </div>
        </section>
    );
};

export default BenefitsCart;
