import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const CustomScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="focus-ring fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-[#b8f24a]/30 bg-[#111713]/90 text-[#b8f24a] shadow-2xl backdrop-blur transition hover:-translate-y-1 sm:bottom-8 sm:right-8"
      aria-label="Back to top"
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  );
};

export default CustomScrollToTop;
