/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

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
            style={{
                position: 'fixed',
                top: pos.y,
                left: pos.x,
                width: 20,
                height: 20,
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                zIndex: 9999
            }}
        />
    );
}
