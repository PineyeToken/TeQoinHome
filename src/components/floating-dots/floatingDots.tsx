import { useRef, useEffect } from 'react';

interface FloatingDotsProps {
    count?: number;
    minSize?: number;
    maxSize?: number;
    minFade?: number;
    maxFade?: number;
    speed?: number;
}

interface Dot {
    x: number;
    y: number;
    size: number;
    dx: number;
    dy: number;
    opacity: number;
    fade: number;
}

export default function FloatingDots({
    count = 40,
    minSize = 1,
    maxSize = 3,
    minFade = 0.001,
    maxFade = 0.003,
    speed = 0.4
}: FloatingDotsProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }

        let width = 0;
        let height = 0;
        let dots: Dot[] = [];

        const setupCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;

            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);

            dots = Array.from({ length: count }).map(() => ({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * (maxSize - minSize) + minSize,
                dx: (Math.random() - 0.5) * speed,
                dy: (Math.random() - 0.5) * speed,
                opacity: Math.random(),
                fade: Math.random() * (maxFade - minFade) + minFade
            }));
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            dots.forEach(dot => {
                dot.opacity += dot.fade;
                if (dot.opacity >= 1) {
                    dot.opacity = 1;
                    dot.fade *= -1;
                } else if (dot.opacity <= 0) {
                    dot.opacity = 0;
                    dot.fade *= -1;
                }

                dot.x += dot.dx;
                dot.y += dot.dy;

                if (dot.x < 0 || dot.x > width) {
                    dot.dx *= -1;
                }
                if (dot.y < 0 || dot.y > height) {
                    dot.dy *= -1;
                }

                ctx.globalAlpha = dot.opacity;
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fillStyle = '#3768a1';
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            animationRef.current = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            setupCanvas();
        };

        setupCanvas();
        animationRef.current = requestAnimationFrame(animate);
        window.addEventListener('resize', handleResize);

        return () => {
            if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [count, minSize, maxSize, minFade, maxFade, speed]);

    return (
        <canvas
            ref={canvasRef}
            className='dots-canvas'
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none'
            }}
        />
    );
}
