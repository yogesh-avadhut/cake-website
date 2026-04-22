"use client";

import classNames from "classnames";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(styles.reveal, isVisible && styles.visible, className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      {...rest}
    >
      {children}
    </div>
  );
}
