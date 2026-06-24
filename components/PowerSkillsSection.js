'use client'
import React, { useEffect, useRef, useState } from 'react';

const tools = [
  { icon: '☁️',  name: 'Azure VMs',  angle: 180 },
  { icon: '🛡️',  name: 'Entra ID',   angle: 198 },
  { icon: '🌐',  name: 'VNet',        angle: 216 },
  { icon: '🗄️',  name: 'SQL DB',      angle: 234 },
  { icon: '⚡',  name: 'Functions',   angle: 252 },
  { icon: '🔀',  name: 'GitHub',      angle: 270 },
  { icon: '🔧',  name: 'Pipelines',   angle: 288 },
  { icon: '📦',  name: 'Terraform',   angle: 306 },
  { icon: '🐳',  name: 'Docker',      angle: 324 },
  { icon: '🖥️',  name: 'AKS',         angle: 342 },
  { icon: '📊',  name: 'Monitor',     angle: 360 },
];

function deg2rad(d) { return (d * Math.PI) / 180; }

const stats = [
  { value: '11', label: 'Core tools' },
  { value: '40+', label: 'Hands-on labs' },
  { value: '6 wks', label: 'Program length' },
];

export default function PowerSkillsSection() {
  const containerRef = useRef(null);
  const [dims, setDims] = useState({ w: 480, h: 420, cx: 240, cy: 300, r: 210 });

  useEffect(() => {
    function recalc() {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const r = Math.max(110, Math.min(200, w * 0.42));
      const cx = w / 2;
      const topPad = 56;
      const cy = topPad + r;
      const h = cy + 80;
      setDims({ w, h, cx, cy, r });
    }
    recalc();
    const ro = new ResizeObserver(recalc);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const { w, h, cx, cy, r } = dims;

  return (
    <section style={{
      width: '100%',
      background: '#fff',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '72px 32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 48,
        alignItems: 'center',
      }}>

        {/* ── LEFT COLUMN ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

          {/* Eyebrow */}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
            color: '#534AB7',
            width: 'fit-content',
          }}>
            <span style={{
              width: 20, height: 2, background: '#7F77DD', borderRadius: 2, display: 'inline-block',
            }} />
            Azure &amp; DevOps Curriculum
          </span>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h1 style={{
              fontSize: 'clamp(30px, 5vw, 48px)',
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#0f0e1a',
              margin: 0,
            }}>
              Master the tools that
             
                power modern DevOps
            </h1>
          </div>

          {/* Body */}
          <p className='text-gray-800' style={{
            fontSize: 16,
            lineHeight: 1.75,
            margin: 0,
            maxWidth: 420,
          }}>
            Go from zero to production-ready with 11 essential Azure and DevOps technologies.
            Build real infrastructure, automate pipelines, and deploy containerised apps — in just 6 weeks.
          </p>

       

          {/* Divider */}
          <div style={{ height: 1, background: '#ebebf5', width: '100%', maxWidth: 420 }} />

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              style={{
                padding: '13px 28px',
                borderRadius: 2,
                border: 'none',
                background: 'linear-gradient(135deg, #111 0%, #111 100%)',
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                letterSpacing: '0.1px',
                boxShadow: '0 4px 16px rgba(83,74,183,0.25)',
                transition: 'transform 0.18s, box-shadow 0.18s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(83,74,183,0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(83,74,183,0.25)';
              }}
            >
              Start learning →
            </button>
          </div>


        </div>

        {/* ── RIGHT COLUMN — Arch Diagram ── */}
        <div ref={containerRef} style={{ position: 'relative', width: '100%', minHeight: 320 }}>

          <style>{`
            @keyframes flow-dash {
              0%  { stroke-dashoffset: 40; }
              100%{ stroke-dashoffset: 0;  }
            }
            @keyframes pulse-ring {
              0%,100%{ opacity:.45; }
              50%    { opacity:.9;  }
            }
            .ps-icon-wrap {
              position: absolute;
              transform: translate(-50%, -50%);
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 5px;
              cursor: pointer;
            }
            .ps-icon-box {
              width: 44px; height: 44px;
              border-radius: 10px;
              background: #fff;
              border: 0.5px solid #d0cff0;
              display: flex; align-items: center; justify-content: center;
              font-size: 20px;
              box-shadow: 0 1px 6px rgba(83,74,183,0.08);
              transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
            }
            .ps-icon-box:hover {
              transform: translateY(-4px) scale(1.1);
              border-color: #7F77DD;
              box-shadow: 0 6px 18px rgba(83,74,183,0.18);
            }
            .ps-icon-label {
              font-size: 10px;
              font-weight: 600;
              letter-spacing: 0.3px;
              color: #8886a0;
              background: #fff;
              border: 0.5px solid #ebebf5;
              padding: 2px 7px;
              border-radius: 20px;
              white-space: nowrap;
            }
            @media (max-width: 560px) {
              .ps-icon-box { width: 34px; height: 34px; font-size: 15px; }
              .ps-icon-label { font-size: 8px; }
            }
          `}</style>

          {/* SVG rays + arc */}
          <svg
            viewBox={`0 0 ${w} ${h}`}
            width="100%"
            style={{ display: 'block', height: h }}
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="rayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EEEDFE" stopOpacity="0" />
                <stop offset="100%" stopColor="#7F77DD" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Dashed orbit arc */}
            <path
              d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
              fill="none"
              stroke="#d0cff0"
              strokeWidth="0.75"
              strokeDasharray="4 7"
            />

            {/* Rays */}
            {tools.map((tool, i) => {
              const rad = deg2rad(tool.angle);
              const ix = cx + Math.cos(rad) * r;
              const iy = cy + Math.sin(rad) * r;
              const gap = 50;
              const dx = cx - ix, dy = cy - iy;
              const len = Math.sqrt(dx * dx + dy * dy);
              const ex = ix + (dx / len) * (len - gap);
              const ey = iy + (dy / len) * (len - gap);
              return (
                <line
                  key={tool.name}
                  x1={ix} y1={iy} x2={ex} y2={ey}
                  stroke="#7F77DD"
                  strokeWidth="1"
                  strokeDasharray="5 9"
                  opacity="0.4"
                  style={{
                    animation: `flow-dash ${1.3 + i * 0.12}s linear infinite`,
                    strokeDashoffset: 40,
                  }}
                />
              );
            })}

            {/* Center glow rings */}

            <img src='/git.png' className='h-18 w-18' />
        
          </svg>

          {/* Icon overlays */}
          {tools.map(tool => {
            const rad = deg2rad(tool.angle);
            const ix = cx + Math.cos(rad) * r;
            const iy = cy + Math.sin(rad) * r;
            return (
              <div
                key={tool.name}
                className="ps-icon-wrap"
                style={{ left: ix, top: iy }}
              >
                <div className="ps-icon-box">{tool.icon}</div>
                <span className="ps-icon-label">{tool.name}</span>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}