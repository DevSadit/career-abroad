"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 250, suffix: "+", label: "Consultations" },
  { value: 10,  suffix: "+", label: "Countries" },
  { value: 20,  suffix: "+", label: "Visa Success" },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatItem({ value, suffix, label, animate }) {
  const count = useCountUp(value, 1800, animate);
  return (
    <div className="text-center lg:text-left transform hover:scale-110 transition-all duration-300 hover:-translate-y-1">
      <p className="text-3xl font-bold text-gray-900 transition-colors duration-300 hover:text-[#364bc5]">
        {count}{suffix}
      </p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start pt-5 md:pt-2">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} animate={animate} />
      ))}
    </div>
  );
}
