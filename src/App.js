import { useCallback, useEffect } from 'react';
import './App.css';
import Landing from './pages/Landing';

function App() {
  const resetHeight = useCallback(() => {
    document.body.style.height = window.innerHeight + 'px';
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resetHeight);

    return () => {
      window.removeEventListener('resize', resetHeight);
    };
  }, [resetHeight]);

  return (
    <Landing />
  );
}

export default App;
