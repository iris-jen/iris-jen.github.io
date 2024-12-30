'use client';

import React, { useEffect, useRef, useState } from 'react';

// 🌟 CONSTANTS FOR OFFSETS
const OFFSETS = {
  GRASS_Y: 0.95,   // Grass starts at 95% of canvas height
  STEM_Y: 0.50,    // Stem starts at 40% of canvas height
  PETALS_Y: 0.50,  // Petals centered at 40% of canvas height
  CENTER_Y: 0.50,  // Center positioned at 40% of canvas height
};

export default function Iris() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null); // Store animation frame ID
  const observerRef = useRef(null); // Store IntersectionObserver
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 600, height: 600 });

  // ✅ Resize Canvas Based on Container Size
  useEffect(() => {
    const resizeCanvas = () => {
      if (containerRef.current) {
        const containerSize = Math.min(
          containerRef.current.clientWidth,
          containerRef.current.clientHeight
        );
        setCanvasDimensions({
          width: containerSize,
          height: containerSize,
        });
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  // ✅ Handle Visibility with IntersectionObserver
  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // ✅ Animation Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvasDimensions;
    canvas.width = width;
    canvas.height = height;

    let petalAngle = 0;
    let petalDirection = 1;
    let grassTime = 0; // Add a time variable for continuous animation

    // 🛠️ Utility Functions
    function clearCanvas() {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function setupGlow(lineWidth = 1, shadowBlur = 15, color = '#FF69B4') {
      ctx.strokeStyle = color;
      ctx.shadowBlur = shadowBlur;
      ctx.shadowColor = color;
      ctx.lineWidth = lineWidth;
    }

    function drawPath(path) {
      ctx.beginPath();
      ctx.stroke(path);
    }

    // 🌿 Drawing Functions
    function drawStem() {
      setupGlow(2, 15, '#69FFB4');
      const path = new Path2D();
      path.moveTo(width / 2, height * OFFSETS.STEM_Y);
      path.lineTo(width / 2, height * 1.2);
      drawPath(path);
    }

    function drawLeaves() {
      const scale = width / 600;
      for (let angle of [-30,40,  -90,50, 400, 449]) {
        ctx.save();
        ctx.translate(width / 2, height * OFFSETS.PETALS_Y);
        ctx.rotate(angle);
        setupGlow(1.5, 15, '#FF69FF');
        const path = new Path2D();
        path.moveTo(0, 0);
        path.bezierCurveTo(-50 * scale, 80 * scale, -70 * scale, 200 * scale, -30 * scale, 250 * scale);
        path.lineTo(0, 0);
        drawPath(path);
        ctx.restore();
      }
    }

    function drawPetals() {
      const scale = width / 600;
      for (let angle of [0, Math.PI / 4, -Math.PI / 4, Math.PI / 2, -Math.PI / 2, -Math.PI / 3, Math.PI / 3]) {
        ctx.save();
        ctx.translate(width / 2, height * OFFSETS.PETALS_Y);
        ctx.rotate(angle + petalAngle);
        setupGlow(1, 15, '#FF69B4');
        const path = new Path2D();
        path.moveTo(0, 0);
        path.bezierCurveTo(-50 * scale, -100 * scale, 50 * scale, -100 * scale, 0, -150 * scale);
        path.lineTo(0, 0);
        drawPath(path);
        ctx.restore();
      }
    }

    function drawCenter() {
      setupGlow(2, 20, '#FF6969');
      const path = new Path2D();
      path.arc(width / 2, height * OFFSETS.CENTER_Y, width * 0.02, 0, Math.PI * 2);
      drawPath(path);
    }

    function drawGrass() {
      const scale = width / 500;
      grassTime += 0.05; // Increment the animation time
      for (let i = 0; i < 25; i++) {
        ctx.save();
        ctx.translate((width - 900) * 0.08 + i * (width * 0.05), height * OFFSETS.GRASS_Y);
        ctx.rotate(Math.sin(grassTime + i * 0.3) * 0.2); // Add time-based movement

        const path = new Path2D();
        path.moveTo(-30, 200);
        path.lineTo(0, -90 * scale + i / 40);

        setupGlow(1, 10, '#69FFB4');
        path.bezierCurveTo(20 * scale, 200, 30 * scale, 180, 100, 190);
        drawPath(path);

        ctx.restore();
      }
    }

    function animate() {
      if (!isVisible) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      clearCanvas();
      petalAngle += 0.0005 * petalDirection;
      if (petalAngle > 0.1 || petalAngle < -0.1) petalDirection *= -1;

      drawStem();
      drawLeaves();
      drawPetals();
      drawCenter();
      drawGrass();

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [canvasDimensions, isVisible]);

  return (
    <div 
      ref={containerRef} 
      style={{ width: '100%', height: '100%', maxWidth: '600px', margin: '0 auto', aspectRatio: '1/1', overflow: 'hidden' }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
