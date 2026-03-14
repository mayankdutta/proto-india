import { useEffect, useState } from "react";

/**
 * SparkBurst — CSS-only welding spark particles.
 * Fires a burst of small glowing dots that scatter outward and fade,
 * like sparks flying from a grinder or welding torch.
 *
 * Triggered once when `active` becomes true.
 */
const SPARK_COUNT = 12;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function SparkBurst({ active = false, className = "" }) {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    if (!active) return;

    const newSparks = Array.from({ length: SPARK_COUNT }, (_, i) => ({
      id: i,
      x: randomBetween(-60, 60),
      y: randomBetween(-80, -10),
      delay: randomBetween(0, 0.3),
      duration: randomBetween(0.5, 1),
      size: randomBetween(2, 4),
    }));
    setSparks(newSparks);
  }, [active]);

  if (!active || sparks.length === 0) return null;

  return (
    <div className={`spark-container ${className}`}>
      {sparks.map((s) => (
        <span
          key={s.id}
          className="spark-particle"
          style={{
            left: "50%",
            bottom: "20%",
            width: `${s.size}px`,
            height: `${s.size}px`,
            "--spark-x": `${s.x}px`,
            "--spark-y": `${s.y}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
