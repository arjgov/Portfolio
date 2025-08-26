import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export interface SkillItem {
  name: string;
  category: string;
  icon: string;
  borderColor: string;
  gradient: string;
  iconColor: string;
}

export interface SkillsChromaGridProps {
  skills: SkillItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const SkillsChromaGrid: React.FC<SkillsChromaGridProps> = ({
  skills,
  className = "",
  radius = 200,
  damping = 0.35,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px") as SetterFn;
    setY.current = gsap.quickSetter(el, "--y", "px") as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full flex flex-wrap justify-start gap-3 ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      {skills.map((skill, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          className="group relative flex items-center space-x-3 px-4 py-3 rounded-xl overflow-hidden border border-transparent transition-all duration-300 cursor-pointer min-w-[120px]"
          style={
            {
              "--card-border": skill.borderColor,
              background: skill.gradient,
              "--spotlight-color": "rgba(255,255,255,0.2)",
              borderColor: skill.borderColor + "40",
            } as React.CSSProperties
          }
        >
          {/* Spotlight effect on hover */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 60%)",
            }}
          />
          
          {/* Skill content */}
          <div className="relative z-10 flex items-center space-x-3">
            <i 
              className={`${skill.icon} text-lg transition-all duration-300 group-hover:scale-110`}
              style={{ color: skill.iconColor }}
            />
            <span className="text-sm font-medium text-white group-hover:text-white transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        </article>
      ))}
      
      {/* Main mask overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: "grayscale(0.8) brightness(0.7)",
          WebkitBackdropFilter: "grayscale(0.8) brightness(0.7)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 20%,rgba(0,0,0,0.1) 35%,rgba(0,0,0,0.3) 50%,rgba(0,0,0,0.6) 70%,rgba(0,0,0,0.8) 85%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 20%,rgba(0,0,0,0.1) 35%,rgba(0,0,0,0.3) 50%,rgba(0,0,0,0.6) 70%,rgba(0,0,0,0.8) 85%,white 100%)",
        }}
      />
      
      {/* Fade overlay */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.6)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.6)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 20%,rgba(255,255,255,0.8) 35%,rgba(255,255,255,0.6) 50%,rgba(255,255,255,0.4) 70%,rgba(255,255,255,0.2) 85%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 20%,rgba(255,255,255,0.8) 35%,rgba(255,255,255,0.6) 50%,rgba(255,255,255,0.4) 70%,rgba(255,255,255,0.2) 85%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default SkillsChromaGrid;
