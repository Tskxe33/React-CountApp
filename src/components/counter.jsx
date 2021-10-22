import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getbadgeClasses() {
    let classes = "badge mt-5 fs-6 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  renderTags() {
    if (this.state.tags.length === 0)
      return <p className="fs-3">There are no tags!</p>;

    return (
      <ul className="mt-5">
        {this.state.tags.map((tag, index) => (
          <li key={index} className="fs-5 list-group-item ">
            {tag}
          </li>
        ))}
      </ul>
    );
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
          <button
            className="btn-secondary btn btn-sm mt-3 fs-5"
            onClick={() => this.handleIncrement(product)}
          >
            Increment
          </button>
          {this.renderTags()}
        </div>
      </>
    );
  }
}

export default Counter;
