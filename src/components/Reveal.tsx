import * as React from "react";
import { useInView } from "@/hooks/use-in-view";

type Direction = "up" | "left" | "right" | "none";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in milliseconds before the reveal animation starts. */
  delay?: number;
  direction?: Direction;
};

const hiddenTransform: Record<Direction, string> = {
  up: "translateY(28px)",
  left: "translateX(-32px)",
  right: "translateX(32px)",
  none: "translateY(0)",
};

/**
 * Fades + slides its children into place the first time they scroll
 * into view. Falls back to fully visible if IntersectionObserver is
 * unavailable (e.g. during SSR), so content is never hidden for
 * crawlers or JS-less clients.
 */
export function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0, 0)" : hiddenTransform[direction],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
