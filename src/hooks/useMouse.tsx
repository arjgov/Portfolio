"use client";

import { useEffect, useRef, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
  elementX: number | null;
  elementY: number | null;
  elementPositionX: number | null;
  elementPositionY: number | null;
}

export function useMouse(): [MousePosition, React.RefObject<HTMLElement>] {
  const [mouse, setMouse] = useState<MousePosition>({
    x: 0,
    y: 0,
    elementX: null,
    elementY: null,
    elementPositionX: null,
    elementPositionY: null,
  });

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let elementX: number | null = null;
      let elementY: number | null = null;
      let elementPositionX: number | null = null;
      let elementPositionY: number | null = null;

      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        elementX = e.clientX - rect.left;
        elementY = e.clientY - rect.top;
        elementPositionX = rect.left;
        elementPositionY = rect.top;
      }

      setMouse({
        x: e.clientX,
        y: e.clientY,
        elementX,
        elementY,
        elementPositionX,
        elementPositionY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return [mouse, ref];
}
