const DesktopNavbar = () => {
    return (
        <nav className='absolute top-8  flex items-center justify-center w-full'>
            <div className='bg-white flex items-center justify-between h-[68px] w-[1000px] rounded-full px-3'>
                <img src='/img/logoWithText.webp' className='w-[160px]' alt='' />
                <ol className='flex items-center gap-5 text-[14px] '>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About Us</a>
                    </li>
                    <li>
                        <a href='#'>Features</a>
                    </li>
                    <li>
                        <a href='#'>Vision & Mission</a>
                    </li>
                    <li>
                        <a href='#'>Use Cases</a>
                    </li>
                    <li>
                        <a href='#'>RoadMap</a>
                    </li>
                </ol>
                <a href='' className='bg-[#0153FD] w-[150px] h-[50px] rounded-full flex items-center justify-center text-white'>
                    Join Us
                </a>
            </div>
        </nav>
    );
};

export default DesktopNavbar;
