"use client";
import { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LottieAnimationProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  hoverToPlay?: boolean;
}

export default function LottieAnimation({
  src,
  className = "",
  loop = true,
  autoplay = false,
  hoverToPlay = false,
}: LottieAnimationProps) {
  const [key, setKey] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (hoverToPlay) {
      setIsHovered(true);
      setKey(prev => prev + 1); // Force re-render to trigger animation
    }
  };

  const handleMouseLeave = () => {
    if (hoverToPlay) {
      setIsHovered(false);
      setKey(prev => prev + 1); // Force re-render to stop animation
    }
  };

  const shouldAutoplay = hoverToPlay ? isHovered : autoplay;

  return (
    <div
      className={`${className} overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: '100%', height: '100%' }}
    >
      <DotLottieReact
        key={key}
        src={src}
        loop={loop}
        autoplay={shouldAutoplay}
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain',
          maxWidth: '100%',
          maxHeight: '100%'
        }}
      />
    </div>
  );
}
