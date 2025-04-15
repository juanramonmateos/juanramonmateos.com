// fondoGranoPuntos.js
(function () {
    const container = document.getElementById("fondograno");
  
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    container.appendChild(canvas);
  
    const ctx = canvas.getContext("2d");
    let width = canvas.width = container.offsetWidth;
    let height = canvas.height = container.offsetHeight;
  
    let points = [];
    let spacing = 20;
    let mouseX = 0, mouseY = 0;
    let startTime = performance.now();
  
    function generatePoints() {
      points = [];
      for (let y = 0; y < height + spacing; y += spacing) {
        for (let x = 0; x < width + spacing; x += spacing) {
          points.push({
            x: x + (Math.random() - 0.5) * 6,
            y: y + (Math.random() - 0.5) * 6,
            size: 0.7 + Math.random() * 1.2
          });
        }
      }
    }
  
    function drawPattern(offsetX, offsetY, alpha) {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
  
      points.forEach(p => {
        const dx = offsetX * 0.02;
        const dy = offsetY * 0.02;
        ctx.beginPath();
        ctx.arc(p.x + dx, p.y + dy, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
  
      ctx.restore();
    }
  
    function animate() {
        const now = performance.now();
        const t = ((now - startTime) % 5000) / 5000;
        const alpha = 0.25 + 0.10 * Math.sin(t * 2 * Math.PI); // más contraste
      
        drawPattern(mouseX, mouseY, alpha);
        requestAnimationFrame(animate);
      }
  
    container.addEventListener("mousemove", e => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - (rect.left + width / 2);
      mouseY = e.clientY - (rect.top + height / 2);
    });
  
    window.addEventListener("resize", () => {
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
      generatePoints();
    });
  
    generatePoints();
    animate();
  })();