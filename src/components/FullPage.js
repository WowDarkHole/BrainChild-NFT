import PropTypes from 'prop-types';
import React from 'react';
import { getObjectValues } from '../utils/helpers';
import Slide from './Slide';
import Scrollbar from './Scrollbar';
import Logo from './Logo';
import isMobileDevice from '../utils/is-mobile';
// import Scroll from './Scroll';
// import {Scrollbar} from 'smooth-scrollbar-react';

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
    this._scrollbar = null;
    this._container = React.createRef();
    this._parent = React.createRef();
    this._goingUp = false;
    this._scrollContainer = React.createRef();
    this._reference = React.createRef();
    this._refs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];
    this._contentRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];

    this.state = {
      activeSlide: props.initialSlide,
      scroll: 0,
      slidesCount: FullPage.getChildrenCount(this.props.children),
      scrollbarWidth: 0,
    };

    this.getVisiblePattern = this.getVisiblePattern.bind(this);
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

    const halfHeight = this.divElement.clientHeight;

    const scrollbarWidth =  window.innerWidth - this._parent.current?.clientWidth;
    this.setState({
      height: window.innerHeight,
      halfHeight: halfHeight,
      scrollbarWidth: scrollbarWidth,
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

  onScroll = (scrollbar, scrollStatus) => {
    const currentScrollY = scrollbar.target.scrollTop;
    this.setState({scroll: currentScrollY});
  }

  onScrollbar = (value) => {
    if(Math.abs(value-this._parent.current.scrollTop) < 1) return;
    this._parent.current.scrollTop = value;
  }

  scrollTo = () => {
    this._parent.current.scrollTop = 0;
    // this._scrollbar.scrollTo(0, 0, 700);
    this.setState({scroll: 0});
  }

  setScrollbar = (scrollbar) => {
    this._scrollbar = scrollbar;
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
    // if (!this._isScrollPending && slide >= 0 && slide < this.state.slidesCount) {
    //   const currentSlide = this.state.activeSlide;
    //   this.props.beforeChange({ from: currentSlide, to: slide });

    //   this.setState({
    //     activeSlide: slide,
    //   });

    //   this._isScrollPending = true;
    //   this._parent.current.style.pointerEvents = 'none';
    //   console.log(this.props.duration);
    //   animatedScrollTo(this._parent.current, this._slides[slide], this.props.duration, () => {
    //     this._isScrollPending = false;
    //     this._isScrolledAlready = true;
    //     this._container.current = this._slides[slide];
    //     this._parent.current.style.pointerEvents = 'auto';
    //     this.props.afterChange({ from: currentSlide, to: slide });
    //   });
    // }
  }

  getVisiblePattern() {
    if(this.state.scroll < this._refs[0].current?.clientHeight-this._contentRefs[0].current?.clientHeight) {
      return 0;
    }
    if(this.state.scroll > this._refs[0].current?.clientHeight+this._refs[1].current?.clientHeight+this._refs[2].current?.clientHeight+this._refs[3].current?.clientHeight/2+this.state.halfHeight*1.5) {
      return 0;
    }

    return 1;
  }

  render() {
    const visiblePattern = this.getVisiblePattern();
    const filledPatternClass = "app-main transition-all duration-700 "+(isMobileDevice() ? "" : "") + (visiblePattern === 0 ? "opacity-100": "opacity-0");
    const outlinedPatterClass = "app-main transition-all duration-700 "+(isMobileDevice() ? "" : "") + (visiblePattern === 1 ? "opacity-100": "opacity-0");
    return (
      <>
        <div className="transition-all duration-100"
          style={{ height: this.state.height, overflowY: 'auto' }}
          onScroll={this.onScroll}
          ref={this._parent}
          id="my-scrollbar"
        >
          <div className="absolute opacity-0" ref={ (divElement) => { this.divElement = divElement } } style={{height: '50vh'}}>a</div>
          <div className="transition-all duration-700" ref={this._scrollContainer} style={{transform: 'translate(0, 0)'}}>
            {React.Children.map(this.props.children, (child, index) => (
              React.cloneElement(child, {
                ref: {containerRef: this._refs[index], contentRef: this._contentRefs[index]}
              })
            ))}
          </div>
          {/* <Scroll onScroll={this.onScroll} setScrollbar={this.setScrollbar}/> */}
        </div>
        <div className={filledPatternClass} style={{backgroundImage:'url(/assets/resource_landing_image1.svg)'}}></div>
        <div className={outlinedPatterClass} style={{backgroundImage:'url(/assets/resource_landing_image4.svg)'}}></div>
        <Scrollbar className="fixed bottom-20 left-16 hidden sm:block"
          halfHeight={this.state.halfHeight}
          scroll={this.state.scroll}
          onScroll={this.onScrollbar}
          ref={{containerRefs: this._refs, contentRefs: this._contentRefs}}
        />
        <Logo className="top-0 left-1/2"
          onClick={this.scrollTo}
          scroll={this.state.scroll}
          halfHeight={this.state.halfHeight}
          scrollbarWidth={this.state.scrollbarWidth}
          ref={{containerRefs: this._refs, contentRefs: this._contentRefs}}
        />
      </>
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
