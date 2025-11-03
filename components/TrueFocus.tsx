"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "./TrueFocus.css";

type Props = {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  maxCycles?: number;
  className?: string;
};

export default function TrueFocus({
  sentence = "Andreassen Technology",
  manualMode = false,
  blurAmount = 5,
  borderColor = "#cfa2a0",
  glowColor = "rgba(207,162,160,0.6)",
  animationDuration = 0.6,
  pauseBetweenAnimations = 0.8,
  maxCycles,
  className = ""
}: Props) {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [cycleCount, setCycleCount] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (!manualMode && !animationComplete) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => {
          const nextIndex = (prev + 1) % words.length;
          // If we've completed a full cycle, increment cycleCount
          if (nextIndex === 0 && prev === words.length - 1) {
            setCycleCount(c => c + 1);
          }
          return nextIndex;
        });
      }, (animationDuration + pauseBetweenAnimations) * 1000);
      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length, animationComplete]);

  useEffect(() => {
    if (maxCycles && cycleCount >= maxCycles) {
      setAnimationComplete(true);
    }
  }, [cycleCount, maxCycles]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;
    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();
    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };
  const handleMouseLeave = () => {
    if (manualMode) setCurrentIndex(lastActiveIndex ?? 0);
  };

  return (
    <div className={`focus-container ${className}`} ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={el => { wordRefs.current[index] = el; }}
            className={`focus-word ${manualMode ? "manual" : ""} ${isActive && !manualMode ? "active" : ""}`}
            style={{
              filter: animationComplete || isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              ["--border-color" as any]: borderColor,
              ["--glow-color" as any]: glowColor,
              transition: `filter ${animationDuration}s ease`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}
      <motion.div
        className="focus-frame"
        animate={{ x: focusRect.x, y: focusRect.y, width: focusRect.width, height: focusRect.height, opacity: animationComplete ? 0 : 1 }}
        transition={{ duration: animationDuration }}
        style={{ ["--border-color" as any]: borderColor, ["--glow-color" as any]: glowColor }}
      >
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
      </motion.div>
    </div>
  );
}

