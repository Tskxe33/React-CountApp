import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // count: 0,
  //   // tags: ["tag1", "tag2", "tag3"],
  // };

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getbadgeClasses() {
    let classes = "badge mt-5 fs-6 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // renderTags() {
  //   if (this.state.tags.length === 0)
  //     return <p className="fs-3">There are no tags!</p>;

  //   return (
  //     <ul className="mt-5">
  //       {this.state.tags.map((tag, index) => (
  //         <li key={index} className="fs-5 list-group-item ">
  //           {tag}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      <>
        <div className="d-flex justify-content-center  align-items-center">
          <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
          <button
            className="btn-secondary btn btn-sm mt-5 ms-3 fs-5"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            Increment
          </button>
          <button
            className="btn btn-danger btn-sm mt-5 ms-3 fs-5"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete{" "}
          </button>
          {/* {this.renderTags()} */}
        </div>
      </>
    );
  }
}

export default Counter;
