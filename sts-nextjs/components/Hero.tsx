"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type HeroProps = {
  children: ReactNode;
  leftPhoto?: string;
  rightPhoto?: string;
};

export default function Hero({ children, leftPhoto, rightPhoto }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const seamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;

    type Particle = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      a: number;
      ta: number;
      fi: boolean;
      col: number[];
      life: number;
      ml: number;
    };

    const rnd = (a: number, b: number) => a + Math.random() * (b - a);

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      W = canvas!.width = rect.width || window.innerWidth;
      H = canvas!.height = rect.height || window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    const cfgs = [
      { col: [245, 197, 24], r: 1.1, n: 40, vy: [-0.3, -0.08] },
      { col: [255, 255, 255], r: 0.7, n: 50, vy: [-0.25, -0.05] },
      { col: [191, 10, 48], r: 1.3, n: 18, vy: [-0.22, -0.06] },
    ];

    const pts: Particle[] = [];
    cfgs.forEach((c) => {
      for (let i = 0; i < c.n; i++) {
        pts.push({
          x: rnd(0, 1),
          y: rnd(0, 1),
          r: c.r * rnd(0.7, 1.4),
          vx: rnd(-0.12, 0.12),
          vy: rnd(c.vy[0], c.vy[1]),
          a: rnd(0.2, 0.6),
          ta: rnd(0.2, 0.6),
          fi: true,
          col: c.col,
          life: rnd(0, 400),
          ml: rnd(250, 500),
        });
      }
    });

    let rafId: number;
    function tick() {
      if (canvas!.offsetParent !== null) {
        ctx!.clearRect(0, 0, W, H);
        pts.forEach((p) => {
          p.life++;
          if (p.life > p.ml) {
            p.x = rnd(0, 1);
            p.y = 1.02;
            p.life = 0;
            p.a = 0;
          }
          p.x += (p.vx / W) * 50;
          p.y += (p.vy / H) * 50;
          p.a += (p.fi ? 1 : -1) * 0.005;
          if (p.a >= p.ta) p.fi = false;
          if (p.a <= p.ta * 0.3) p.fi = true;
          const grd = ctx!.createRadialGradient(
            p.x * W,
            p.y * H,
            0,
            p.x * W,
            p.y * H,
            p.r * 3
          );
          grd.addColorStop(
            0,
            `rgba(${p.col[0]},${p.col[1]},${p.col[2]},${Math.max(0, p.a)})`
          );
          grd.addColorStop(1, `rgba(${p.col[0]},${p.col[1]},${p.col[2]},0)`);
          ctx!.fillStyle = grd;
          ctx!.beginPath();
          ctx!.arc(p.x * W, p.y * H, p.r * 3, 0, Math.PI * 2);
          ctx!.fill();
        });
      }
      rafId = requestAnimationFrame(tick);
    }
    tick();

    // Parallax on mouse move (applies to the seam layer)
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;
    function onMouseMove(e: MouseEvent) {
      tx = (e.clientX / window.innerWidth - 0.5) * -20;
      ty = (e.clientY / window.innerHeight - 0.5) * -12;
    }
    document.addEventListener("mousemove", onMouseMove);

    let parallaxRafId: number;
    function raf() {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      if (seamsRef.current) {
        seamsRef.current.style.transform = `translate(${cx * 0.4}px, ${
          cy * 0.4
        }px)`;
      }
      parallaxRafId = requestAnimationFrame(raf);
    }
    raf();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(parallaxRafId);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-flag">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="fmask" cx="50%" cy="50%" r="55%">
              <stop offset="15%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="sm">
              <rect width="1000" height="600" fill="url(#fmask)" />
            </mask>
            <filter id="fb">
              <feGaussianBlur stdDeviation="22" />
            </filter>
          </defs>
          <g mask="url(#sm)" opacity="0.14">
            <rect x="0" y="0" width="333" height="600" fill="#002868" />
            <rect x="333" y="0" width="667" height="300" fill="#E8E8E8" />
            <rect x="333" y="300" width="667" height="300" fill="#BF0A30" />
          </g>
          <g filter="url(#fb)" opacity="0.09">
            <rect x="-80" y="-80" width="450" height="760" fill="#002868" />
            <rect x="300" y="-80" width="780" height="420" fill="#C0C8DC" />
            <rect x="300" y="320" width="780" height="360" fill="#7A1028" />
            <polygon
              points="166,130 185,190 248,190 197,228 216,288 166,250 116,288 135,228 84,190 147,190"
              fill="white"
              opacity="0.5"
            />
          </g>
        </svg>
      </div>

      <div className="hero-turf" />
      <div className="hero-seams" ref={seamsRef} />
      <div className="hero-glow" />

      {leftPhoto && (
        <div
          className="hero-photo hp-left"
          style={{ backgroundImage: `url(${leftPhoto})` }}
        />
      )}
      {rightPhoto && (
        <div
          className="hero-photo hp-right"
          style={{ backgroundImage: `url(${rightPhoto})` }}
        />
      )}

      <div className="hero-overlay" />
      <canvas className="hero-particles-canvas" ref={canvasRef} />

      <div className="hero-content">{children}</div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    </section>
  );
}
