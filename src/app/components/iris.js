'use client';

import React, { useEffect, useRef } from 'react';

export default function Iris() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 800;

    function clearCanvas() {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // 🛠️ Drawing Utility Functions
    function drawPath(path, lineWidth = 2) {
      ctx.beginPath();
      ctx.strokeStyle = '#00ff00';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#00ff00';
      ctx.lineWidth = lineWidth;
      ctx.stroke(path);
    }

    function drawStem() {
      const path = new Path2D();
      path.moveTo(300, 750);
      path.lineTo(300, 550);
      drawPath(path, 4);
    }

    function drawLeaf(x, y, cp1x, cp1y, cp2x, cp2y, endX, endY, angle = 0) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      const path = new Path2D();
      path.moveTo(0, 0);
      path.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
      path.lineTo(0, 0);
      drawPath(path, 2);
      ctx.restore();
    }

    function drawPetal(x, y, cp1x, cp1y, cp2x, cp2y, endX, endY, angle = 0) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      const path = new Path2D();
      path.moveTo(0, 0);
      path.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
      path.lineTo(0, 0);
      drawPath(path, 2);
      ctx.restore();
    }

    function drawCenter() {
      const path = new Path2D();
      path.arc(300, 500, 15, 0, Math.PI * 2);
      drawPath(path, 3);
    }

    function drawLeaves(leafRotation) {
      drawLeaf(300, 600, -50, 80, -70, 200, -30, 250, Math.sin(leafRotation) * 0.1);
      drawLeaf(300, 600, 50, 80, 70, 200, 30, 250, -Math.sin(leafRotation) * 0.1);
      drawLeaf(300, 650, -30, 60, -40, 100, -20, 130, Math.sin(leafRotation) * 0.15);
      drawLeaf(300, 650, 30, 60, 40, 100, 20, 130, -Math.sin(leafRotation) * 0.15);
    }

    function drawPetals(petalRotation) {
      drawPetal(300, 500, -40, -80, 40, -80, 0, -140, Math.sin(petalRotation) * 0.1);
      drawPetal(300, 500, -70, -50, -90, -100, -60, -130, Math.sin(petalRotation) * 0.08);
      drawPetal(300, 500, 70, -50, 90, -100, 60, -130, -Math.sin(petalRotation) * 0.08);
      drawPetal(300, 520, -40, 40, -60, 80, -30, 100, Math.sin(petalRotation) * 0.05);
      drawPetal(300, 520, 40, 40, 60, 80, 30, 100, -Math.sin(petalRotation) * 0.05);
    }

    function drawBud() {
      const path = new Path2D();
      path.moveTo(300, 450);
      path.bezierCurveTo(290, 430, 310, 430, 300, 400);
      drawPath(path, 2);
    }

    let leafRotation = 0;
    let petalRotation = 0;
    let leafDirection = 1;
    let petalDirection = 1;

    function animate() {
      clearCanvas();

      leafRotation += 0.02 * leafDirection;
      petalRotation += 0.015 * petalDirection;

      if (leafRotation > 2 || leafRotation < -2) leafDirection *= -1;
      if (petalRotation > 1 || petalRotation < -1) petalDirection *= -1;

      drawStem();
      drawLeaves(leafRotation);
      drawPetals(petalRotation);
      drawCenter();
      drawBud();

      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <div style={{ textAlign: 'center'}}>
   
      <canvas ref={canvasRef} style={{ border: '1px solid #00ff00', boxShadow: '0 0 20px #00ff00'}}></canvas>
    </div>
  );
}