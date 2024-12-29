'use client';

import React, { useEffect, useRef } from 'react';

export default function Iris() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;

    // 🛠️ Utility Functions
    function clearCanvas() {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function setupGlow(lineWidth = 1, shadowBlur = 15) {
      ctx.strokeStyle = '#FF69B4'; // Light pink (fuchsia)
      ctx.shadowBlur = shadowBlur;
      ctx.shadowColor = '#FF69B4';
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
      path.moveTo(300, 150);
      path.lineTo(300, 500);
      drawPath(path);
    }

    // 🍃 Leaves
    function drawLeaf(x, y, cp1x, cp1y, cp2x, cp2y, endX, endY, angle = 0) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);

      setupGlow(1.5);
      const path = new Path2D();
      path.moveTo(0, 0);
      path.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
      path.lineTo(0, 0);
      drawPath(path);

      ctx.restore();
    }

    function drawLeaves() {
      drawLeaf(300, 250, -50, 80, -70, 200, -30, 250, 0.4);
      drawLeaf(300, 250, 50, 80, 70, 200, 30, 250, -0.4);
      drawLeaf(300, 250, -30, 60, -40, 100, -20, 130, 0.6);
      drawLeaf(300, 250, 30, 60, 40, 100, 20, 130, -0.6);
    }

    // 🌸 Petals with Animation
    let petalAngle = 0;
    let petalDirection = 1;

    function drawPetal(x, y, angle = 0) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle + petalAngle); // Apply animated rotation

      setupGlow(1);
      const path = new Path2D();
      path.moveTo(0, 0);
      path.bezierCurveTo(-50, -100, 50, -100, 0, -150);
      path.lineTo(0, 0);
      drawPath(path);
      ctx.restore();
    }

    function drawPetals() {
      const petalOriginY = 250;
      drawPetal(300, petalOriginY, 0);
      drawPetal(300, petalOriginY, Math.PI / 4);
      drawPetal(300, petalOriginY, -Math.PI / 4);
      drawPetal(300, petalOriginY, Math.PI / 2);
      drawPetal(300, petalOriginY, -Math.PI / 2);
    }

    // 🌟 Bud
    function drawCenter() {
      setupGlow(2, 20);
      const path = new Path2D();
      path.arc(300, 250, 10, 0, Math.PI * 2);
      drawPath(path);
    }

    // 🌾 Grass
    function drawGrass() {
      setupGlow(1, 10);
      for (let i = 0; i < 15; i++) {
        ctx.save();
        ctx.translate(100 + i * 30, 500);
        ctx.rotate(Math.sin(Date.now() * 0.001 + i) * 0.2); // Sway effect

        const path = new Path2D();
        path.moveTo(0, 0);
        path.lineTo(0, -50);
        path.bezierCurveTo(10, -70, -10, -90, 0, -110);
        drawPath(path);

        ctx.restore();
      }
    }

    // 🛤️ Ground Plane
    function drawGround() {
      setupGlow(1);
      const path = new Path2D();
      path.moveTo(0, 500);
      path.lineTo(600, 500);
      drawPath(path);
    }

    // ✨ Glowing Text with Breathing Animation
    let textGlow = 0;
    let textDirection = 1;

    function drawText() {
      textGlow += 0.02 * textDirection;
      if (textGlow > 1 || textGlow < 0) textDirection *= -1;

      ctx.save();
      ctx.font = '20px "Fira Code", "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillStyle = `rgba(255, 105, 180, ${0.5 + 0.5 * Math.sin(textGlow)})`;
      ctx.shadowBlur = 15 + 10 * Math.sin(textGlow);
      ctx.shadowColor = '#FF69B4';
      ctx.fillText('Iris Jennison', 300, 50);
      ctx.restore();
    }

    // 🎞️ Animation State
    let glowPulse = 0;

    // 🎞️ Animation Loop
    function animate() {
      clearCanvas();

      // Update animation states
      glowPulse = (glowPulse + 0.05) % 2;

      petalAngle += 0.002 * petalDirection; // Slow oscillating rotation
      if (petalAngle > 0.1 || petalAngle < -0.1) petalDirection *= -1; // Change direction at limits

      drawGround();
      drawGrass();
      drawStem();
      drawLeaves();
      drawPetals();
      drawCenter();
      drawText();

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <canvas
        ref={canvasRef}
        style={{
          border: '1px solid #FF69B4',
          boxShadow: '0 0 25px #FF69B4',
          background: 'black',
          marginTop: '20px',
        }}
      ></canvas>
    </div>
  );
}
