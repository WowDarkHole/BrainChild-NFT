import easeInOutCubic from './ease-in-out-cubic';

export default function animatedScrollTo(element, scrollTo, duration, callback) {
  const scrollFrom = element.scrollTop || element.pageYOffset || 0;
  const scrollDiff = scrollTo - scrollFrom;
  
  let currentTime = 0;
  const increment = 20;
  (function animateScroll() {
    currentTime += increment;
    const newScrollPos = easeInOutCubic(currentTime, scrollFrom, scrollDiff, duration);
    
    // element.scroll({top: newScrollPos, left: 0, behavior: 'instant'});
    element.scrollTop = newScrollPos;
    if (currentTime > duration) {
      element.scrollTop = scrollTo;
      callback();
      return;
    }

    setTimeout(animateScroll, increment);
  }());
}
