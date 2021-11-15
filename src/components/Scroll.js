import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';
// import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const overscrollOptions = {
  enable: true,
  effect: 'bounce',
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: '#fff',
};

//   const overscrollOptions = {
//     enable: true,
//     effect: 'glow',
//     damping: 0.1,
//     maxOverscroll: 200,
//     glowColor: '#222a2d',
//   };

const options = {
  damping : 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
  
}

const Scroll = ({onScroll, setScrollbar}) => {

  useEffect(() => {

    // Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector('#scroll2'), {plugins: {overscroll: {enable: false}}});

    const scrollbar = Scrollbar.init(document.querySelector('#my-scrollbar'), options);
    scrollbar.addListener(onScroll);
    setScrollbar(scrollbar);

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body)
    }
  }, [onScroll, setScrollbar])



  return null;
}

export default Scroll;