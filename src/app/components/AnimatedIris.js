'use client';

import React, { useEffect, useRef, useState } from 'react';

// 🌟 CONSTANTS FOR OFFSETS
const OFFSETS = {
  GRASS_Y: 0.95,   // Grass starts at 90% of canvas height
  STEM_Y: 0.40,   // Stem starts at 25% of canvas height
  PETALS_Y: 0.40,  // Petals centered at 50% of canvas height
  CENTER_Y: 0.40,  // Center positioned at 50% of canvas height
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
      setupGlow(2);
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

      setupGlow(1.5);
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
        drawLeaf(scale, -0);
        drawLeaf(scale, -600);
        drawLeaf(scale, -300);
        drawLeaf(scale, -100);
        drawLeaf(scale, -100);
        drawLeaf(scale, -30);
     // drawLeaf(scale, -180);
    }

    // 🌸 Petals (Scaled and Positioned Dynamically)
    let petalAngle = 0;
    let petalDirection = 1;

    function drawPetal(scale, angle = 0) {
      ctx.save();
      ctx.translate(width / 2, height * OFFSETS.PETALS_Y);
      ctx.rotate(angle + petalAngle);

      setupGlow(1);
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
      setupGlow(2, 20);
      const path = new Path2D();
      path.arc(width / 2, height * OFFSETS.CENTER_Y, width * 0.02, 0, Math.PI * 2);
      drawPath(path);
    }

    // 🌾 Grass (Multiple Shapes & Colors)
    const grassColors = ['#FF69B4', '#C850C0', '#6A0DAD', '#9932CC'];
    const grassShapes = [
      (scale, path) => path.bezierCurveTo(20 * scale, 200, 30 * scale, 180, 100, 190),
      (scale, path) => path.bezierCurveTo(20 * scale, 200, 30 * scale, 180, 100, 190),
      (scale, path) => path.bezierCurveTo(20 * scale, 200, 30 * scale, 180, 100, 190),
    ];

    function drawGrass() {
      const scale = width / 500;
      for (let i = 0; i < 40; i++) {
        ctx.save();
        ctx.translate((width -900) * 0.08 + i * (width * 0.05), height * OFFSETS.GRASS_Y);
        ctx.rotate(Math.sin(Date.now() * 0.001 + i) * 0.2);

        const path = new Path2D();
        path.moveTo(-30, 200);
        path.lineTo(0, -90 * scale + i / 40);

        const randomShape = grassShapes[Math.floor(Math.random() * grassShapes.length)];
        const randomColor = grassColors[Math.floor(Math.random() * grassColors.length)];
        setupGlow(1, 10, randomColor);

        randomShape(scale, path);
        drawPath(path);

        ctx.restore();
      }
    }

    // ✨ Glowing Text with Animation
    let textGlow = 0;
    let textDirection = 1;

    function drawText() {
      textGlow += 0.02 * textDirection;
      if (textGlow > 1 || textGlow < 0) textDirection *= -1;

      ctx.save();
      ctx.font = `${Math.max(16, width * 0.05)}px "Fira Code", "JetBrains Mono", monospace`; // Cute and techy font vibes
      ctx.textAlign = 'center'; // Keep it perfectly centered. Balance is key, bestie. 🧘‍♀️✨
      
      // 💜 Update the Fill Style to Purple
      ctx.fillStyle = `rgba(138, 43, 226, ${0.5 + 0.5 * Math.sin(textGlow)})`; // Royal Purple, dynamic opacity 🌟
      
      // 💜 Update the Shadow for Extra Purple Drama
      ctx.shadowBlur = 15 + 10 * Math.sin(textGlow); // A lil' flicker for ✨magic✨
      ctx.shadowColor = '#8A2BE2'; // The glow is like, totally *purplecore* vibes
      
      // 💜 Update the Text Itself
      ctx.fillText('Iris Jennison', width / 2, height * 0.1); // The star of the show 🟣✨
      
      // Back to reality, babe. 🖤
      ctx.restore();
      
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
      drawText();

      requestAnimationFrame(animate);
    }

    animate();
  }, [canvasDimensions]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', maxWidth: '600px', margin: '0 auto', aspectRatio: '1/1', overflow: 'hidden', position: 'relative' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
