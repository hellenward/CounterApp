import React, { Component } from 'react';

class Counter extends Component {

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }

  render() {
    console.log('Counter - Rendered');
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm">Increment
        </button>
        <button
          onClick={() => {this.props.onDelete(this.props.counter.id)}}
          className="button btn btn-danger btn-sm m-2"
          >
            Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const {value} = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

}

export default Counter;
