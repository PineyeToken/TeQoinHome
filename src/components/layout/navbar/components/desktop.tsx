/* eslint-disable react-refresh/only-export-components */
interface INavbarLinks {
    title: string;
    link: string;
}

export const navbarLinks: INavbarLinks[] = [
    {
        title: 'Home',
        link: '#home'
    },
    {
        title: 'Use Cases',
        link: '#use-case'
    },
    {
        title: 'RoadMap',
        link: '#roadmap'
    },
    {
        title: 'whitepaper',
        link: '#roadmap'
    }
];

const DesktopNavbar = () => {
    return (
        <nav className='absolute top-8 z-40 hidden w-full items-center justify-center px-3 lg:flex'>
            <div className='flex h-[68px] w-[1000px] items-center justify-between rounded-full bg-white px-3'>
                <img src='/img/logoWithText.webp' className='w-[140px]' alt='' />

                <ol className='flex items-center gap-5 text-[14px]'>
                    {navbarLinks.map((item, index) => (
                        <li key={`navbar-links-${index}`}>
                            <a href={item.link} className='hover:text-[#0153FD]'>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ol>

                <a
                    href='https://t.me/TeQoin'
                    target='_blank'
                    className='flex h-[50px] w-[150px] items-center justify-center rounded-full bg-[#0153FD] text-white'
                >
                    Join Us
                </a>
            </div>
        </nav>
    );
};

export default DesktopNavbar;
