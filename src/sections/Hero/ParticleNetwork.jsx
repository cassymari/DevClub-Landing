import { useEffect, useRef } from "react";

export function ParticleNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let animationFrame;
    let particles = [];

    const mouse = {
      x: null,
      y: null,
      radius: 150,
    };

    function resizeCanvas() {
      const rect = canvas.parentElement.getBoundingClientRect();

      canvas.width = rect.width;
      canvas.height = rect.height;

      createParticles();
    }

    function createParticles() {
      const particleCount = Math.min(
        90,
        Math.floor((canvas.width * canvas.height) / 14000)
      );

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.8,
        velocityX: (Math.random() - 0.5) * 0.35,
        velocityY: (Math.random() - 0.5) * 0.35,
      }));
    }

    function handleMouseMove(event) {
      const rect = canvas.getBoundingClientRect();

      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    function updateParticles() {
      particles.forEach((particle) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.velocityX *= -1;
        }

        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.velocityY *= -1;
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius && distance > 0) {
            const force = (mouse.radius - distance) / mouse.radius;

            particle.x -= (dx / distance) * force * 0.7;
            particle.y -= (dy / distance) * force * 0.7;
          }
        }
      });
    }

    function drawParticles() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        context.fillStyle = "rgba(196, 181, 253, 0.8)";
        context.shadowBlur = 10;
        context.shadowColor = "rgba(139, 92, 246, 0.75)";
        context.fill();
      });
    }

    function connectParticles() {
      const maxDistance = 125;

      for (let first = 0; first < particles.length; first += 1) {
        for (
          let second = first + 1;
          second < particles.length;
          second += 1
        ) {
          const dx = particles[first].x - particles[second].x;
          const dy = particles[first].y - particles[second].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;

            context.beginPath();
            context.moveTo(
              particles[first].x,
              particles[first].y
            );
            context.lineTo(
              particles[second].x,
              particles[second].y
            );

            context.strokeStyle = `rgba(
              139,
              92,
              246,
              ${opacity * 0.26}
            )`;

            context.lineWidth = 0.8;
            context.stroke();
          }
        }
      }
    }

    function connectMouse() {
      if (mouse.x === null || mouse.y === null) {
        return;
      }

      particles.forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const opacity = 1 - distance / mouse.radius;

          context.beginPath();
          context.moveTo(mouse.x, mouse.y);
          context.lineTo(particle.x, particle.y);

          context.strokeStyle = `rgba(
            56,
            189,
            248,
            ${opacity * 0.45}
          )`;

          context.lineWidth = 1;
          context.stroke();
        }
      });
    }

    function animate() {
      updateParticles();
      drawParticles();
      connectParticles();
      connectMouse();

      animationFrame = requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
      }}
    />
  );
}