/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
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

    useEffect(() => {
        const move = (e: any) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', move);

        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <img
            src='/img/cursor.png'
            alt=''
            className='pointer-events-none fixed z-[9999] h-[25px] w-[25px]'
            style={{ top: pos.y, left: pos.x, display: isDesktop ? 'block' : 'none' }}
        />
    );
}
