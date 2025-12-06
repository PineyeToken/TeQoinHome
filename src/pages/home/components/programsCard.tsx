import { HeaderGradientCircle } from 'assets/icons';

const ProgramsCard = () => {
    return (
        <section
            id='use-case'
            className='relative flex w-full flex-col items-center justify-center gap-4 px-[20px] lg:m-auto lg:flex-row lg:p-0 lg:px-[20px] xl:w-[1200px]'
        >
            <HeaderGradientCircle className='pointer-events-none absolute -z-1 h-auto w-full lg:w-[600px]' />
            <div className='w-full rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                <div className='rounded-[16px] bg-[#141E35] p-[22px] text-[#FDFDFD] lg:flex lg:h-[250px] lg:flex-col lg:justify-end'>
                    <img src='/img/wallet.webp' className='mb-4 w-[60px] drop-shadow-[0_0px_13px_#0153FD] lg:w-[86px]' />
                    <p className='accent-font mb-2 text-[19px] font-medium lg:text-[22px]'>Wallet & Payments</p>
                    <small className='accent-font text-[14px] font-light'>
                        A fast, non-custodial wallet with instant, zero-fee transfers and seamless QR payments.
                    </small>
                </div>
            </div>
            <div className='w-full rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                <div className='rounded-[16px] bg-[#0153FD] p-[22px] text-[#FDFDFD] lg:flex lg:h-[250px] lg:flex-col lg:justify-end'>
                    <img src='/img/defi.webp' className='mb-4 w-[80px] lg:w-[120px]' />
                    <p className='accent-font mb-2 text-[19px] font-medium lg:text-[22px]'>Bridge & DeFi</p>
                    <small className='accent-font text-[14px] font-light'>
                        Move assets across chains, swap tokens, and earn rewards through TeQoin’s lightweight DeFi layer.
                    </small>
                </div>
            </div>
            <div className='w-full rounded-[20px] bg-gradient-to-b from-[#00246F] to-[#000000] p-[2px]'>
                <div className='rounded-[16px] bg-[#141E35] p-[22px] text-[#FDFDFD] lg:flex lg:h-[250px] lg:flex-col lg:justify-end'>
                    <img src='/img/dapps.webp' className='mb-4 w-[60px] drop-shadow-[0_0px_13px_#0153FD] lg:w-[86px]' />
                    <p className='accent-font mb-2 text-[19px] font-medium lg:text-[22px]'>dApps</p>
                    <small className='accent-font text-[14px] font-light'>
                        An EVM-compatible platform for developers to launch scalable applications on TeQoin.
                    </small>
                </div>
            </div>
        </section>
    );
};

export default ProgramsCard;
