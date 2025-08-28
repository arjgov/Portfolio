"use client";
import { ArrowUpRightIcon, Github, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import { useMouse } from "@/hooks/useMouse";
import { cn } from "@/lib/utils";

export const MainMenusGradientCard = ({
  title,
  description,
  withArrow = false,
  circleSize = 400,
  className,
  children,
  githubLink,
  liveLink,
}: {
  title: string;
  description: string;
  withArrow?: boolean;
  circleSize?: number;
  children?: ReactNode;
  className?: string;
  githubLink?: string;
  liveLink?: string;
}) => {
  const [mouse, parentRef] = useMouse();

  return (
    <div
      className="group relative transform-gpu overflow-hidden rounded-lg bg-white/10 p-2 transition-transform hover:scale-[1.01] active:scale-90 h-[520px] flex flex-col"
      ref={parentRef}
    >
      {withArrow && (
        <ArrowUpRightIcon className="absolute right-2 top-2 z-10 size-5 translate-y-4 text-neutral-700 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 dark:text-neutral-300 " />
      )}
      <div
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          mouse.elementX === null || mouse.elementY === null
            ? "opacity-0"
            : "opacity-100",
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          background:
            "linear-gradient(135deg, #ffffff, #f3f4f6, #e5e7eb, #d1d5db)",
        }}
      />
      <div className="absolute inset-px rounded-lg bg-neutral-100/80 dark:bg-neutral-900/80" />
      {children && (
        <div
          className={cn(
            "relative place-content-center overflow-hidden rounded-md border-white bg-white/70 dark:border-neutral-950 dark:bg-black/50 h-48 flex-shrink-0",
            className,
          )}
        >
          {children}
        </div>
      )}
      <div className="relative px-4 pb-4 pt-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300 mb-2">
          {title}
        </h3>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 flex-1 text-sm leading-relaxed">
          {description}
        </p>
        {(githubLink || liveLink) && (
          <div className="flex gap-3 mt-1">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-100 text-black text-sm rounded-lg transition-colors border border-gray-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
