export const countUp = (target, update) => {
  const start = performance.now();
  let frame;
  const tick = (now) => {
    const progress = Math.min((now - start) / 700, 1);
    update(Math.round(target * progress));
    if (progress < 1) frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(frame);
};
