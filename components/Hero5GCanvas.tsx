"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { ArrowRight } from "lucide-react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
};

const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=2000";
const PARTICLE_COUNT_DESKTOP = 80;
const PARTICLE_COUNT_MOBILE = 45;
const INTERACT_DISTANCE = 150;

export default function Hero5GCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number | null>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => setIsReducedMotion(media.matches);

    onMotionChange();
    media.addEventListener("change", onMotionChange);
    return () => media.removeEventListener("change", onMotionChange);
  }, []);

  useEffect(() => {
    if (isReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let particles: Particle[] = [];

    const initParticles = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const numberOfParticles = width < 768 ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from({ length: numberOfParticles }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color: `rgba(255, ${Math.floor(Math.random() * 150 + 100)}, 0, ${Math.random() * 0.4 + 0.2})`,
      }));
    };

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);
      const { x: mouseX, y: mouseY } = mouseRef.current;

      for (const particle of particles) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > width) particle.x = 0;
        if (particle.x < 0) particle.x = width;
        if (particle.y > height) particle.y = 0;
        if (particle.y < 0) particle.y = height;

        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < INTERACT_DISTANCE) {
          particle.x -= dx / 50;
          particle.y -= dy / 50;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.fill();
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    const onResize = () => {
      initParticles();
    };

    initParticles();
    animate();
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("resize", onResize);
    };
  }, [isReducedMotion]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const centeredX = event.clientX - window.innerWidth / 2;
    const centeredY = event.clientY - window.innerHeight / 2;

    mouseRef.current = { x: event.clientX, y: event.clientY };
    setParallax({ x: centeredX, y: centeredY });
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -9999, y: -9999 };
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[92vh] min-h-[680px] w-full overflow-hidden bg-[#050000] font-sans selection:bg-orange-500 selection:text-white"
    >
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          transform: `scale(1.1) translate(${parallax.x * 0.01}px, ${parallax.y * 0.01}px)`,
        }}
      >
        <img src={BACKGROUND_IMAGE} alt="5G Galaxy" className="h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      {!isReducedMotion && <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-10" />}

      <div
        className="pointer-events-none absolute bottom-[28%] right-[12%] z-0 h-48 w-48 rounded-full bg-orange-600/20 blur-[80px] animate-pulse"
        style={{
          transform: `translate(${parallax.x * 0.02}px, ${parallax.y * 0.02}px)`,
        }}
      />

      <div className="relative z-20 flex h-full max-w-5xl flex-col justify-center px-8 md:px-20">
        <div className="mb-6 space-y-2">
          <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-orange-400">
            Next Generation Network
          </span>
          <h1 className="text-5xl font-black leading-tight text-white md:text-8xl">
            KET NOI
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-yellow-200 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
              VO TAN
            </span>
          </h1>
        </div>

        <p className="mb-10 max-w-xl text-lg leading-relaxed text-orange-100/70 md:text-xl">
          Trai nghiem suc manh cua ky nguyen so voi toc do 5G vuot gioi han. Kham pha khong gian du lieu ruc chay va song dong hon bao gio het.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/lien-he"
            className="group flex items-center gap-2 rounded-lg bg-orange-600 px-10 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(234,88,12,0.6)]"
          >
            BAT DAU NGAY
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/san-pham"
            className="rounded-lg border border-white/20 px-10 py-4 font-bold text-white transition-all duration-300 hover:bg-white/10"
          >
            TIM HIEU THEM
          </Link>
        </div>

        <div className="mt-16 flex max-w-md gap-12 border-t border-white/10 pt-8 text-white/50">
          <div>
            <div className="text-2xl font-bold text-orange-400">10 Gbps</div>
            <div className="text-xs uppercase tracking-wider">Toc do toi da</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-400">1 ms</div>
            <div className="text-xs uppercase tracking-wider">Do tre cuc thap</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-400">1M+</div>
            <div className="text-xs uppercase tracking-wider">Ket noi/km2</div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-orange-500/5 to-transparent" />
      <div className="absolute bottom-10 right-10 flex gap-2">
        <div className="h-2 w-2 animate-bounce rounded-full bg-orange-500" />
        <div className="h-2 w-2 animate-bounce rounded-full bg-orange-500/60 [animation-delay:-0.15s]" />
        <div className="h-2 w-2 animate-bounce rounded-full bg-orange-500/30 [animation-delay:-0.3s]" />
      </div>
    </section>
  );
}
