import React from 'react';
import ReactPageScroller from './PageScroller';

export default class FullPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 0, nextPage: 0 };
    this.nextPage = 0;
    this._refs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];
    this._contentRefs = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];
  }

  handlePageChange = number => {
    // console.log(number);
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = number => {
    // console.log(number, this.state.currentPage);
    // this.setState({ nextPage: number })
  };

  render() {
    return (
      <React.Fragment>
        {/* <ReactPageScroller
          pageOnChange={this.handlePageChange}
          onBeforePageScroll={this.handleBeforePageChange}
          customPageNumber={this.state.currentPage}
          containerRefs={this._refs}
          contentRefs={this._contentRefs}
        > */}
          {React.Children.map(this.props.children, (child, index) => (
            React.cloneElement(child, {
              ref: {containerRef: this._refs[index], contentRef: this._contentRefs[index]}
            })
          ))}
        {/* </ReactPageScroller> */}
      </React.Fragment>
    );
  }
}
