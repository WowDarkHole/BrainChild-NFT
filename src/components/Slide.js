import PropTypes from 'prop-types';
import React from 'react';

const Slide = React.forwardRef((props, ref) => (
  <div {...props} style={{ ...props.style, height: '100%' }}>
    {React.Children.map(props.children, (child) => (
      React.cloneElement(child, {
        ref: ref
      })
    ))}
  </div>
));

Slide.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

Slide.defaultProps = {
  children: null,
  style: {},
};

Slide.isSlideOfFullpage = true;

export default Slide;
