import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'
import { Scrollbar } from 'smooth-scrollbar-react';

function SmoothScroll({ children }) {
  const ref = useRef(null);
  const { pathname } = useLocation();


  // useEffect(() => {
  //   const { scrollbar } = ref.current;
  //   scrollbar.setPosition(0, 0);
  // }, [pathname]);

  useEffect(() => {
    const { scrollbar } = ref.current;
    scrollbar.setPosition(0,0);
  });

  return (
    <Scrollbar ref={ref} damping="0.09">
      { children }
    </Scrollbar>
  )
}

export default SmoothScroll
