import { HeaderGradientCircle } from 'assets/icons';

const ProgramsCard = () => {
    return (
        <section className='relative flex w-full flex-col items-center justify-center gap-4 px-[20px] lg:m-auto lg:flex-row lg:p-0 lg:px-[20px] xl:w-[1200px]'>
            <HeaderGradientCircle className='pointer-events-none absolute -z-1 h-auto w-full lg:w-[600px]' />
            <div className='rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                <div className='rounded-[16px] bg-[#141E35] p-[22px] text-[#FDFDFD]'>
                    <img src='/img/wallet.png' className='mb-4 w-[60px] drop-shadow-[0_0px_13px_#0153FD] lg:w-[86px]' />
                    <p className='accent-font mb-2 text-[19px] font-bold'>Wallet & Payments</p>
                    <small className='accent-font text-[14px]'>
                        A fast, non-custodial wallet with instant, zero-fee transfers and seamless QR payments.
                    </small>
                </div>
            </div>
            <div className='rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                <div className='rounded-[16px] bg-[#0153FD] p-[22px] text-[#FDFDFD]'>
                    <img src='/img/wallet.png' className='mb-4 w-[60px] lg:w-[86px]' />
                    <p className='accent-font mb-2 text-[19px] font-bold'>Wallet & Payments</p>
                    <small className='accent-font text-[14px]'>
                        A fast, non-custodial wallet with instant, zero-fee transfers and seamless QR payments.
                    </small>
                </div>
            </div>
            <div className='rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                <div className='rounded-[16px] bg-[#141E35] p-[22px] text-[#FDFDFD]'>
                    <img src='/img/wallet.png' className='mb-4 w-[60px] drop-shadow-[0_0px_13px_#0153FD] lg:w-[86px]' />
                    <p className='accent-font mb-2 text-[19px] font-bold'>Wallet & Payments</p>
                    <small className='accent-font text-[14px]'>
                        A fast, non-custodial wallet with instant, zero-fee transfers and seamless QR payments.
                    </small>
                </div>
            </div>
        </section>
    );
};

export default ProgramsCard;
