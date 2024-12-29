'use client';

import React, { useEffect, useRef, useState } from 'react';

// 🌟 CONSTANTS FOR OFFSETS
const OFFSETS = {
  GRASS_Y: 0.95,   // Grass starts at 95% of canvas height
  STEM_Y: 0.40,    // Stem starts at 40% of canvas height
  PETALS_Y: 0.40,  // Petals centered at 40% of canvas height
  CENTER_Y: 0.40,  // Center positioned at 40% of canvas height
};

export default function Iris() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 600, height: 600 });

  // Update canvas size based on container's size
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvasDimensions;
    canvas.width = width;
    canvas.height = height;

    // 🛠️ Utility Functions
    function clearCanvas() {
      ctx.fillStyle = 'black';
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

    // 🌿 Stem
    function drawStem() {
      setupGlow(2, 15, '#FF69B4'); // Fuchsia for the stem
      const path = new Path2D();
      path.moveTo(width / 2, height * OFFSETS.STEM_Y);
      path.lineTo(width / 2, height * 1.2);
      drawPath(path);
    }

    // 🍃 Leaves (Scaled)
    function drawLeaf(scale, angle = 0) {
      ctx.save();
      ctx.translate(width / 2, height * OFFSETS.PETALS_Y);
      ctx.rotate(angle);

      setupGlow(1.5, 15, '#FF69B4'); // Fuchsia for leaves
      const path = new Path2D();
      path.moveTo(0, 0);
      path.bezierCurveTo(
        -50 * scale, 80 * scale,
        -70 * scale, 200 * scale,
        -30 * scale, 250 * scale
      );
      path.lineTo(0, 0);
      drawPath(path);

      ctx.restore();
    }

    function drawLeaves() {
      const scale = width / 600; // Dynamic scaling factor
      
      drawLeaf(scale, 80);
      drawLeaf(scale, -90);
      drawLeaf(scale, 180);
      drawLeaf(scale, -80);
      drawLeaf(scale, 90);
      drawLeaf(scale, 0);
      drawLeaf(scale, -60);
      drawLeaf(scale, -30);
    }

    // 🌸 Petals (Fuchsia)
    let petalAngle = 0;
    let petalDirection = 1;

    function drawPetal(scale, angle = 0) {
      ctx.save();
      ctx.translate(width / 2, height * OFFSETS.PETALS_Y);
      ctx.rotate(angle + petalAngle);

      setupGlow(1, 15, '#FF69B4'); // Fuchsia for petals
      const path = new Path2D();
      path.moveTo(0, 0);
      path.bezierCurveTo(
        -50 * scale, -100 * scale,
        50 * scale, -100 * scale,
        0, -150 * scale
      );
      path.lineTo(0, 0);
      drawPath(path);
      ctx.restore();
    }

    function drawPetals() {
      const scale = width / 600; // Scale petals dynamically
      drawPetal(scale, 0);
      drawPetal(scale, Math.PI / 4);
      drawPetal(scale, -Math.PI / 4);
      drawPetal(scale, Math.PI / 2);
      drawPetal(scale, -Math.PI / 2);
    }

    // 🌟 Bud
    function drawCenter() {
      setupGlow(2, 20, '#FF69B4'); // Fuchsia for center
      const path = new Path2D();
      path.arc(width / 2, height * OFFSETS.CENTER_Y, width * 0.02, 0, Math.PI * 2);
      drawPath(path);
    }

    // 🌾 Grass (Purple)
    function drawGrass() {
      const scale = width / 500;
      for (let i = 0; i < 25; i++) {
        ctx.save();
        ctx.translate((width - 900) * 0.08 + i * (width * 0.05), height * OFFSETS.GRASS_Y);
        ctx.rotate(Math.sin(Date.now() * 0.001 + i) * 0.2);

        const path = new Path2D();
        path.moveTo(-30, 200);
        path.lineTo(0, -90 * scale + i / 40);

        setupGlow(1, 10, '#9932CC'); // Purple for grass
        path.bezierCurveTo(20 * scale, 200, 30 * scale, 180, 100, 190);
        drawPath(path);

        ctx.restore();
      }
    }

    function animate() {
      clearCanvas();
      petalAngle += 0.0005 * petalDirection;
      if (petalAngle > 0.1 || petalAngle < -0.1) petalDirection *= -1;

      drawStem();
      drawLeaves();
      drawPetals();
      drawCenter();
      drawGrass();

      requestAnimationFrame(animate);
    }

    animate();
  }, [canvasDimensions]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        maxWidth: '600px', 
        margin: '0 auto', 
        aspectRatio: '1/1', 
        overflow: 'hidden', 
        position: 'relative',
        border: 'none'
      }}
    >
      <canvas 
        ref={canvasRef} 
        style={{ width: '100%', height: '100%', border: 'none' }} 
      />
    </div>
  );
}
