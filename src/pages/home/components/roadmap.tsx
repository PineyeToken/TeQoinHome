/* eslint-disable @typescript-eslint/no-explicit-any */
import { BoxArrow, HeaderGradientCircle } from 'assets/icons';
import FloatingDots from 'components/floating-dots';
import { ReactNode, useEffect, useState } from 'react';

const roadmapLeft = [
    {
        quarter: 'Q2',
        year: '2026',
        label: 'Mainnet MVP',
        subtitle: 'First operational L@ network',
        description: (
            <>
                <ul className='accent-font text-[10px] xl:p-4 xl:text-[14px] xl:font-extralight'>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Mainnet launch (sequencer centralized)
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Wallet v2 & payments
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Bridge fully operational
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Explorer v2 & analytics
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Staking & liquidity incentives beta
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Developer SDK & templates
                    </li>
                </ul>
            </>
        )
    },
    {
        quarter: 'Q4',
        year: '2026',
        label: 'Public Launch & Decentralization Prep',
        subtitle: 'Public usability & ling-term growth',
        description: (
            <>
                <ul className='accent-font text-[10px] xl:p-4 xl:text-[14px] xl:font-extralight'>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Full public wallet & multi-chain assets
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Fast-withdraw options
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Governance framework for sequencer decentralization
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Advanced analytics dashboards
                    </li>
                </ul>
            </>
        )
    },
    {
        quarter: 'H2',
        year: '2027',
        label: 'Full ZK Rollup & Decentralized Network',
        subtitle: 'Full ZK Rollup deployment & ecosystem scaling',
        description: (
            <>
                <ul className='accent-font text-[10px] xl:p-4 xl:text-[14px] xl:font-extralight'>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Complete ZK Rollup network
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Fully decentralized sequencer & governance
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Expanded staking & liquidity rewards
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Advanced developer tools & SDKs
                    </li>
                </ul>
            </>
        )
    }
];

const roadmapRight = [
    {
        quarter: 'Q1',
        year: '2026',
        label: ' MVP & Public Testnet',
        subtitle: 'Launch MVP for developers & early users',
        description: (
            <>
                <ul className='accent-font text-[10px] xl:p-4 xl:text-[14px] xl:font-extralight'>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Wallet (ETH + ERC20)
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Instant payments demo
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Private → public testnet
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Bridge MVP
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Basic dApp deployment
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>{' '}
                        Explorer v1 & RPC endpoints
                    </li>
                </ul>
            </>
        )
    },
    {
        quarter: 'Q3',
        year: '2026',
        label: 'Ecosystem Expansion',
        subtitle: 'Adoption & incentives',
        description: (
            <>
                <ul className='accent-font text-[10px] xl:p-4 xl:text-[14px] xl:font-extralight'>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>
                        Multi-token bridge support
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>
                        Advanced staking & liquidity rewards
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>
                        SDK & templates for complex dApps
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>
                        Grants & hackathons
                    </li>
                </ul>
            </>
        )
    },
    {
        quarter: 'H1',
        year: '2027',
        label: 'Hybrid ZK Rollup Introduction',
        subtitle: 'Begin transition to ZK Rollup',
        description: (
            <>
                <ul className='accent-font text-[10px] font-light xl:p-4 xl:text-[14px] xl:font-extralight'>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>
                        Hybrid ZK Rollup network
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>
                        Instant transaction finality
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>
                        Backward-compatible dApps
                    </li>
                    <li className='mb-2'>
                        <span className='relative -top-0.5 mr-1 inline-block h-[2px] w-[2px] rounded-full bg-[white] lg:h-[3px] lg:w-[3px]'></span>
                        Multi-token bridge & fast withdrawals
                    </li>
                </ul>
            </>
        )
    }
];

type RoadmapItemProps = {
    id: string;
    quarter: string;
    year: string;
    label: string;
    side: 'left' | 'right';
    offsetTop: string;
    subtitle: string;
    description: ReactNode;
    isDesktop: boolean;
    setOpen: (state: string | null) => void;
    open: string | null;
};

const RoadmapItem: React.FC<RoadmapItemProps> = ({
    id,
    quarter,
    year,
    label,
    side,
    offsetTop,
    subtitle,
    description,
    isDesktop,
    setOpen,
    open
}) => {
    const isLeft = side === 'left';

    const toggle = () => {
        if (isDesktop) return;
        setOpen(open === id ? null : id);
    };

    const isOpen = open === id;

    return (
        <div
            className={`relative h-[250px] w-[150px] px-[10px] ${offsetTop} lg:h-[350px] lg:w-[320px]`}
            onClick={toggle}
            onMouseEnter={isDesktop ? () => setOpen(id) : undefined}
            onMouseLeave={isDesktop ? () => setOpen(null) : undefined}
        >
            <div
                className={`absolute lg:flex lg:items-center ${isLeft ? 'right-2 xl:right-[300px]' : 'left-2 xl:left-[300px]'} t-0 z-10 w-full rounded-[16px] border border-solid border-[#033BCC] bg-[#010101] p-3 transition-all duration-300 xl:w-[300px] ${
                    isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
                }`}
            >
                <BoxArrow className={`${isLeft ? 'right-[-20px] rotate-[180deg]' : 'left-[-20px]'} absolute hidden xl:block`} />
                <b className='accent-font mb-2 block text-[12px] leading-[16px] font-medium lg:hidden'>{subtitle}</b>
                {description}
            </div>

            <img
                src='/img/separatorMobile.webp'
                alt='Line'
                className={`absolute top-[-44px] z-[1] ${isLeft ? 'left-[26px] rotate-180' : 'left-[-26px]'} lg:hidden`}
            />

            <img
                src='/img/separatorDesktop.webp'
                alt='Line'
                className={`absolute top-[-44px] z-[1] hidden ${isLeft ? 'left-[27px]' : 'left-[-27px] rotate-180'} lg:block`}
            />
            <p className='text-center text-[26px] font-light lg:text-[44px]'>
                <b className='font-medium'>{quarter}</b> {year}
            </p>
            <small className='flex w-full items-center justify-center text-center text-[14px] lg:text-[22px] lg:font-light'>{label}</small>
            <b className='accent-font mb-2 hidden text-center text-[12px] leading-[16px] font-light lg:block'>{subtitle}</b>
        </div>
    );
};

const Roadmap: React.FC = () => {
    const [open, setOpen] = useState<string | null>(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const mq = window.matchMedia('(hover: hover)');

        const update = (e: MediaQueryListEvent | MediaQueryList) => {
            setIsDesktop(e.matches);
        };

        update(mq);
        mq.addEventListener('change', update as any);

        return () => {
            mq.removeEventListener('change', update as any);
        };
    }, []);

    return (
        <section className='relative mt-[80px] overflow-hidden pb-60' id='roadmap'>
            <FloatingDots count={200} minSize={0.5} maxSize={1.5} minFade={0.0005} maxFade={0.0015} speed={0.2} />
            <HeaderGradientCircle className='pointer-events-none absolute top-[-100px] left-[-400px] -z-1 h-auto w-[800px]' />
            <HeaderGradientCircle className='pointer-events-none absolute right-[-400px] bottom-[-400px] -z-10 h-auto w-[800px]' />
            <h3 className='accent-font mb-20 text-center text-[38px] font-normal text-white lg:text-[52px]'>TeQoin RoadMap</h3>
            <div className='flex justify-center text-white'>
                <div>
                    {roadmapLeft.map(item => {
                        const id = `left-${item.quarter}-${item.year}`;
                        return (
                            <RoadmapItem
                                key={id}
                                id={id}
                                quarter={item.quarter}
                                year={item.year}
                                label={item.label}
                                description={item.description}
                                subtitle={item.subtitle}
                                side='left'
                                offsetTop='top-[154px] lg:top-[204px]'
                                open={open}
                                isDesktop={isDesktop}
                                setOpen={setOpen}
                            />
                        );
                    })}
                </div>

                <span className='relative top-[-30px] -mb-20 h-[900px] w-0.5 bg-[linear-gradient(180deg,rgba(1,64,184,0)_-2.2%,rgba(1,88,255,0.5)_5.73%,rgba(1,87,252,0.84)_73.45%,rgba(1,53,153,0)_100%)] lg:h-[1300px]'></span>

                <div>
                    {roadmapRight.map(item => {
                        const id = `right-${item.quarter}-${item.year}`;
                        return (
                            <RoadmapItem
                                key={id}
                                id={id}
                                quarter={item.quarter}
                                year={item.year}
                                label={item.label}
                                description={item.description}
                                subtitle={item.subtitle}
                                side='right'
                                offsetTop='top-[30px]'
                                open={open}
                                isDesktop={isDesktop}
                                setOpen={setOpen}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
