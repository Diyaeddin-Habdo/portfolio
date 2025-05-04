import React, { useState, useEffect } from 'react';

const CustomScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Görünürlüğü kontrol eden scroll event listener
  useEffect(() => {
    const toggleVisibility = () => {
      // 300px'den fazla aşağı kaydırıldığında buton görünür olsun
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Scroll eventi ekleniyor
    window.addEventListener('scroll', toggleVisibility);

    // Component unmount olduğunda event listener'ı temizle
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Sayfanın en üstüne kaydırma fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-tr from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none"
          aria-label="Sayfanın başına dön"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default CustomScrollToTop;