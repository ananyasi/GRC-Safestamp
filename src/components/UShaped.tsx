import React, { PropsWithChildren, useEffect, useRef } from 'react';
import styles from './UShaped.module.css';

export function UShaped({ children }: PropsWithChildren<{}>) {
  const uarcRef = useRef<HTMLDivElement | null>(null);

  const setUShapePosition = () => {
    const parent = uarcRef.current;
    if (!parent) return;

    const items = parent.children;
    const totalItems = items.length;

    const radius = parent.clientWidth / 2;
    const angleStep = 180 / (totalItems - 1);

    for (let i = 0; i < totalItems; i++) {
      const angle = angleStep * i - 90;
      const x = radius * (1 + Math.cos(angle * Math.PI / 180));
      const y = radius * (1 - Math.sin(angle * Math.PI / 180));

      (items[i] as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
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