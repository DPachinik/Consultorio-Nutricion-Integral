import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });

    const timeout = setTimeout(() => {
      AOS.refreshHard();
    }, 800);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};
