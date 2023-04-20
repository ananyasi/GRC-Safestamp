import React, { PropsWithChildren, useEffect, useRef } from 'react';
import styles from './UShaped.module.css';

export function UShaped({ children }: PropsWithChildren<{}>) {
  const uarcRef = useRef<HTMLDivElement | null>(null);

  const setUShapePosition = () => {
    const parent = uarcRef.current;
    if (!parent) return;

    const items = parent.children;
    const totalItems = items.length;

    const width = Math.max(50, Math.min(parent.clientWidth / 2) - 60);
    const height = Math.max(50, Math.min(parent.clientHeight) - 60);
    const angleSpan = 120;
    const angleStep = angleSpan / (totalItems - 1);

    for (let i = 0; i < totalItems; i++) {
      const angle = angleStep * i + 180 + (90 - angleSpan / 2);
      const x = width * (Math.cos(angle * Math.PI / 180));
      const y = height * (-Math.sin(angle * Math.PI / 180));

      (items[i] as HTMLElement).style.transform = `translate(calc(${x}px - 50%), ${y}px)`;
    }
  };

  useEffect(() => {
    setUShapePosition();
    window.addEventListener('resize', setUShapePosition);

    return () => {
      window.removeEventListener('resize', setUShapePosition);
    };
  }, []);

  return (
    <div ref={uarcRef} className={styles.uarc}>
      {React.Children.map(children, child => (
        <div className={styles.arcItem}>{child}</div>
      ))}
    </div>
  );
};