import React, {
  useRef,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  to { opacity: 1 }
`;

const AppearContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.1s ease-in forwards;
`;

const ScrollIntoView = ({ children, fallbackHeight }) => {
  const [isVisible, setIsVisible] = useState(false);

  const element = useRef(null);

  const observerCallback = useCallback((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        obs.disconnect();
      }
    });
  }, []);

  const observer = useMemo(
    () =>
      new IntersectionObserver(observerCallback, {
        root: null,
        threshold: 0.3,
      }),
    [],
  );

  useEffect(() => {
    observer.observe(element.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!isVisible) {
    return <div style={{ height: fallbackHeight }} ref={element} />;
  }

  return <AppearContainer>{children}</AppearContainer>;
};

export default ScrollIntoView;
