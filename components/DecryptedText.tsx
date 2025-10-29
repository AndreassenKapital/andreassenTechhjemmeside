"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

type Props = {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "hover" | "view" | "both";
} & React.HTMLAttributes<HTMLSpanElement>;

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "opacity-40",
  animateOn = "hover",
  ...props
}: Props) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let interval: number | undefined;
    let currentIteration = 0;

    const getNextIndex = (revealedSet: Set<number>) => {
      const n = text.length;
      switch (revealDirection) {
        case "start": return revealedSet.size;
        case "end": return n - 1 - revealedSet.size;
        case "center": {
          const m = Math.floor(n / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const idx = revealedSet.size % 2 === 0 ? m + offset : m - offset - 1;
          if (idx >= 0 && idx < n && !revealedSet.has(idx)) return idx;
          for (let i = 0; i < n; i++) if (!revealedSet.has(i)) return i;
          return 0;
        }
        default: return revealedSet.size;
      }
    };

    const available = useOriginalCharsOnly
      ? Array.from(new Set(text.split(""))).filter(c => c !== " ")
      : characters.split("");

    const shuffleText = (src: string, revealed: Set<number>) =>
      useOriginalCharsOnly
        ? (() => {
            const pos = src.split("").map((ch, i) => ({ ch, i, space: ch === " ", rev: revealed.has(i) }));
            const pool = pos.filter(p => !p.space && !p.rev).map(p => p.ch);
            for (let i = pool.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            let k = 0;
            return pos.map(p => (p.space ? " " : p.rev ? src[p.i] : pool[k++])).join("");
          })()
        : src.split("").map((ch, i) => (ch === " " || revealed.has(i) ? src[i] : available[Math.floor(Math.random()*available.length)])).join("");

    if (isHovering) {
      setIsScrambling(true);
      // @ts-ignore
      interval = window.setInterval(() => {
        setRevealedIndices(prev => {
          if (sequential) {
            if (prev.size < text.length) {
              const next = getNextIndex(prev);
              const nset = new Set(prev); nset.add(next);
              setDisplayText(shuffleText(text, nset));
              return nset;
            } else {
              window.clearInterval(interval);
              setIsScrambling(false);
              return prev;
            }
          } else {
            setDisplayText(shuffleText(text, prev));
            currentIteration++;
            if (currentIteration >= maxIterations) {
              window.clearInterval(interval);
              setIsScrambling(false);
              setDisplayText(text);
            }
            return prev;
          }
        });
      }, speed);
    } else {
      setDisplayText(text);
      setRevealedIndices(new Set());
      setIsScrambling(false);
    }
    return () => interval && window.clearInterval(interval);
  }, [isHovering, text, speed, maxIterations, sequential, revealDirection, characters, useOriginalCharsOnly]);

  useEffect(() => {
    if (animateOn !== "view" && animateOn !== "both") return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !hasAnimated) {
          setIsHovering(true);
          setHasAnimated(true);
        }
      });
    }, { threshold: 0.1 });
    if (containerRef.current) obs.observe(containerRef.current);
    return () => { if (containerRef.current) obs.unobserve(containerRef.current); };
  }, [animateOn, hasAnimated]);

  const hoverProps = (animateOn === "hover" || animateOn === "both")
    ? { onMouseEnter: () => setIsHovering(true), onMouseLeave: () => setIsHovering(false) }
    : {};

  return (
    <motion.span ref={containerRef} className={parentClassName} {...hoverProps} {...props}>
      <span className="sr-only">{displayText}</span>
      <span aria-hidden="true">
        {displayText.split("").map((ch, i) => {
          const revealed = revealedIndices.has(i) || !isScrambling || !isHovering;
          return <span key={i} className={revealed ? className : encryptedClassName}>{ch}</span>;
        })}
      </span>
    </motion.span>
  );
}

