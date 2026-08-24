import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Floating delicate petals / soft orbs
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      angle: number;
      angularSpeed: number;
      color: string;
      alpha: number;
      shape: 'petal' | 'circle';
    }

    const colors = [
      'rgba(217, 123, 145, ', // Soft Pink
      'rgba(168, 198, 159, ', // Pastel Green
      'rgba(255, 177, 193, ', // Primary light
      'rgba(201, 232, 191, ', // Secondary pale
    ];

    const particles: Particle[] = Array.from({ length: 26 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 4 + Math.random() * 8,
      speedX: -0.3 + Math.random() * 0.6,
      speedY: 0.2 + Math.random() * 0.5,
      angle: Math.random() * Math.PI * 2,
      angularSpeed: -0.02 + Math.random() * 0.04,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.15 + Math.random() * 0.25,
      shape: Math.random() > 0.4 ? 'petal' : 'circle',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.angle += p.angularSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = `${p.color}${p.alpha})`;

        if (p.shape === 'petal') {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 1.5, p.size * 0.8, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-80"
        style={{ width: '100vw', height: '100vh' }}
      />
      {/* Delicate decorative branch corner motifs */}
      <div className="fixed top-20 left-4 md:left-64 ml-8 opacity-15 pointer-events-none z-0">
        <svg fill="none" height="64" viewBox="0 0 100 100" width="64">
          <path d="M10 90 Q 30 50 90 10" fill="none" stroke="#954459" strokeWidth="2" />
          <path d="M30 70 Q 50 40 80 20" fill="none" stroke="#954459" strokeWidth="1.5" />
          <path d="M15 50 Q 25 35 40 30" fill="none" stroke="#954459" strokeWidth="1" />
        </svg>
      </div>
      <div className="fixed bottom-12 right-10 opacity-15 pointer-events-none z-0 transform rotate-180">
        <svg fill="none" height="64" viewBox="0 0 100 100" width="64">
          <path d="M10 90 Q 30 50 90 10" fill="none" stroke="#954459" strokeWidth="2" />
          <path d="M30 70 Q 50 40 80 20" fill="none" stroke="#954459" strokeWidth="1.5" />
          <path d="M15 50 Q 25 35 40 30" fill="none" stroke="#954459" strokeWidth="1" />
        </svg>
      </div>
    </>
  );
};
