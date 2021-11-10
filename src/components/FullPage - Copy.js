import PropTypes from 'prop-types';
import React from 'react';
import animatedScrollTo from '../utils/animated-scroll-to';
import { getObjectValues } from '../utils/helpers';
import Slide from './Slide';
import Scrollbar from './Scrollbar';
import Logo from './Logo';

const scrollMode = {
  FULL_PAGE: 'full-page',
  NORMAL: 'normal',
};

export default class FullPage extends React.Component {
  static getChildrenCount = (children) => {
    const childrenArr = React.Children.toArray(children);
    const slides = childrenArr.filter(({ type }) => type === Slide);
    return slides.length;
  }

  constructor(props) {
    super(props);

    this._isScrollPending = false;
    this._isScrolledAlready = false;
    this._slides = [];
    this._touchSensitivity = 5;
    this._touchStart = 0;
    this._isMobile = null;
    this._container = React.createRef();
    this._parent = React.createRef();
    this._goingUp = false;
    this._refs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];
    this._contentRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];

    console.log(this.props.duration);

    this.state = {
      activeSlide: props.initialSlide,
      slidesCount: FullPage.getChildrenCount(this.props.children),
    };
  }

  componentDidMount() {
    // this._isMobile = isMobileDevice();
    // if (this._isMobile) {
    //   document.addEventListener('touchmove', this.onTouchMove, { passive: false });
    //   document.addEventListener('touchstart', this.onTouchStart);
    // } else {
    //   document.addEventListener('wheel', this.onScroll, { passive: false });
    //   // document.getElementsByTagName('html')[0].addEventListener('wheel', this.onScroll, { passive: false });
    // }
    window.addEventListener('resize', this.onResize);

    this.onResize();
    this.scrollToSlide(this.props.initialSlide);
  }

  componentDidUpdate() {
    const newSlidesCount = FullPage.getChildrenCount(this.props.children);
    if (newSlidesCount !== this.state.slidesCount) {
      // use getDerivedStateFromProps after react <16 support is dropped
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        slidesCount: newSlidesCount,
      }, this.updateSlides);

      const slidesDiff = this.state.slidesCount - newSlidesCount;

      // activeSlide should always be less than slides count
      if (slidesDiff > 0 && this.state.activeSlide >= this.state.slidesCount - slidesDiff) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          activeSlide: newSlidesCount - 1,
        }, this.updateSlides);
      }
    }
  }

  componentWillUnmount() {
    if (this._isMobile) {
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchstart', this.onTouchStart);
    } else {
      document.removeEventListener('wheel', this.onScroll);
    }
    window.removeEventListener('resize', this.onResize);
  }

  updateSlides = () => {
    this._slides = [];

    for (let i = 0; i < this.state.slidesCount; i++) {
      this._slides.push(window.innerHeight * i);
    }
  }

  onResize = () => {
    this.updateSlides();
    this.setState({
      height: window.innerHeight,
    });
  }

  onTouchStart = (evt) => {
    this._touchStart = evt.touches[0].clientY;
    this._isScrolledAlready = false;
  }

  onTouchMove = (evt) => {
    if (this.props.scrollMode !== scrollMode.FULL_PAGE) {
      return;
    }

    evt.preventDefault();
    const touchEnd = evt.changedTouches[0].clientY;

    if (!this._isScrollPending && !this._isScrolledAlready) {
      if (this._touchStart > touchEnd + this._touchSensitivity) {
        this.scrollToSlide(this.state.activeSlide + 1);
      } else if (this._touchStart < touchEnd - this._touchSensitivity) {
        this.scrollToSlide(this.state.activeSlide - 1);
      }
    }
  }

  onScroll = (evt) => {
    evt.preventDefault();
    if (this.props.scrollMode !== scrollMode.FULL_PAGE) {
      return;
    }
    if (this._isScrollPending) {
      return;
    }
    // const scrollDown = (evt.wheelDelta || -evt.deltaY || -evt.detail) < 0;
    let { activeSlide } = this.state;

    const currentScrollY = evt.target.scrollTop;

    if(Math.abs(this._container.current - currentScrollY) < 200) return;

    if (this._container.current < currentScrollY && this._goingUp) {
      this._goingUp = false;
    }
    if (this._container.current > currentScrollY && !this._goingUp) {
      this._goingUp = true;
    }
    this._container.current = currentScrollY;

    if(this._goingUp) {
      activeSlide --;
    } else {
      activeSlide ++;
    }

    activeSlide = Math.max(0, activeSlide);

    this.scrollToSlide(activeSlide);
  }

  getSlidesCount = () => this.state.slidesCount

  getCurrentSlideIndex = () => this.state.activeSlide

  scrollNext = () => {
    this.scrollToSlide(this.state.activeSlide + 1);
  }

  scrollPrev = () => {
    this.scrollToSlide(this.state.activeSlide - 1);
  }

  scrollToSlide = (slide) => {
    if (!this._isScrollPending && slide >= 0 && slide < this.state.slidesCount) {
      const currentSlide = this.state.activeSlide;
      this.props.beforeChange({ from: currentSlide, to: slide });

      this.setState({
        activeSlide: slide,
      });

      this._isScrollPending = true;
      this._parent.current.style.pointerEvents = 'none';
      console.log(this.props.duration);
      animatedScrollTo(this._parent.current, this._slides[slide], this.props.duration, () => {
        this._isScrollPending = false;
        this._isScrolledAlready = true;
        this._container.current = this._slides[slide];
        this._parent.current.style.pointerEvents = 'auto';
        this.props.afterChange({ from: currentSlide, to: slide });
      });
    }
  }

  render() {
    return (
      <div style={{ height: this.state.height, overflowY: 'auto' }} onScroll={this.onScroll} ref={this._parent}>
        {React.Children.map(this.props.children, (child, index) => (
          React.cloneElement(child, {
            ref: {containerRef: this._refs[index], contentRef: this._contentRefs[index]}
          })
        ))}
        <Scrollbar className="fixed bottom-20 left-16 hidden sm:block" slide={this.state.activeSlide}/>
        <Logo className="top-0 left-1/2" slide={this.state.activeSlide} ref={{containerRef: this._refs[this.state.activeSlide], contentRef: this._contentRefs[this.state.activeSlide]}}/>
      </div>
    );
  }
}

FullPage.propTypes = {
  afterChange: PropTypes.func,
  beforeChange: PropTypes.func,
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  initialSlide: PropTypes.number,
  scrollMode: PropTypes.oneOf(getObjectValues(scrollMode)),
};

FullPage.defaultProps = {
  afterChange: () => {},
  beforeChange: () => {},
  duration: 1300,
  initialSlide: 0,
  scrollMode: scrollMode.FULL_PAGE,
};
