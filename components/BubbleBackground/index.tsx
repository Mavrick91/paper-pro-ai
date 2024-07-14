'use client';

import { useEffect, useRef, useState } from 'react';

interface Bubble {
  element: HTMLDivElement;
  baseX: number;
  baseY: number;
  x: number;
  y: number;
}

const BubbleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const numBubbles = 15;

    // Create bubbles
    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElement('div');
      bubble.className =
        'absolute bg-white opacity-10 rounded-full transition-all duration-300 ease-out';
      const size = Math.random() * 60 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Distribute bubbles across the viewport
      const baseX = Math.random() * window.innerWidth;
      const baseY = Math.random() * window.innerHeight;

      bubble.style.left = `${baseX}px`;
      bubble.style.top = `${baseY}px`;

      container.appendChild(bubble);
      bubblesRef.current.push({
        element: bubble,
        baseX,
        baseY,
        x: baseX,
        y: baseY,
      });
    }
    console.log('😀😀 bubblesRef.current ~ ', bubblesRef.current);

    // Clean up function
    return () => {
      bubblesRef.current.forEach((bubble) => bubble.element.remove());
      bubblesRef.current = [];
    };
  }, []);

  useEffect(() => {
    const animateBubbles = () => {
      const maxMovement = 20;

      bubblesRef.current.forEach((bubble) => {
        const dx = mousePosition.x - bubble.baseX;
        const dy = mousePosition.y - bubble.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const movement = Math.min(maxMovement, maxMovement * (1 / distance) * 100);

        bubble.x = bubble.baseX + (dx / distance) * movement;
        bubble.y = bubble.baseY + (dy / distance) * movement;

        bubble.element.style.transform = `translate(${bubble.x - bubble.baseX}px, ${bubble.y - bubble.baseY}px)`;
      });
      requestAnimationFrame(animateBubbles);
    };

    const animationId = requestAnimationFrame(animateBubbles);

    return () => cancelAnimationFrame(animationId);
  }, [mousePosition]);

  return (
    <div
      ref={containerRef}
      className="bg-gradient pointer-events-none absolute inset-0 z-0 size-full"
    />
  );
};

export default BubbleBackground;
