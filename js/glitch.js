document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector('.signals img');
  if (!logo) return;

  const originalSrc = logo.src;
  const altSrc = 'images/signals-glitch.png'; // replace with your alternate image

  function glitchBurst(times = 3) {
    if (times <= 0) {
      // pause before next burst
      const pause = 1000 + Math.random() * 3000; // 2–5s pause
      setTimeout(() => glitchBurst(3), pause);
      return;
    }

    // small random movement
    const x = (Math.random() - 0.5) * 30;
    const y = (Math.random() - 0.5) * 20;
    const rotate = (Math.random() - 0.5) * 0;

    logo.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
    logo.style.filter = 'hue-rotate(45deg) contrast(200%)';

    // switch image randomly in the middle of the burst
    if (Math.random() < 0.5) {
      logo.src = altSrc;
    }

    setTimeout(() => {
      // reset position and filter
      logo.style.transform = 'translate(0, 0) rotate(0deg)';
      logo.style.filter = 'none';
      logo.src = originalSrc; // switch back to original

      // next micro-glitch in burst
      setTimeout(() => glitchBurst(times - 1), 30 + Math.random() * 100);
    }, 30 + Math.random() * 50);
  }

  setTimeout(() => glitchBurst(3), 100);
});
