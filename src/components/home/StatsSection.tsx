import { useEffect, useRef, useState } from "react";

function useCounter(target: number, inView: boolean, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, inView, duration]);
  return val;
}

const stats = [
  { value: 5, suffix: "+", label: "Filières de formation" },
  { value: 14, suffix: "", label: "Spécialités disponibles" },
  { value: 2, suffix: "", label: "Campus à Douala" },
  { value: 90, suffix: "%", label: "Taux de réussite" },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-brand-blue py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((s) => (
          <Stat key={s.label} {...s} inView={inView} />
        ))}
      </div>
    </section>
  );
}

function Stat({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) {
  const v = useCounter(value, inView);
  return (
    <div>
      <div className="text-5xl md:text-6xl font-bold text-white font-display">
        {v}
        <span className="text-brand-orange">{suffix}</span>
      </div>
      <div className="mt-2 text-sm md:text-base text-white/80 uppercase tracking-wide">{label}</div>
    </div>
  );
}
