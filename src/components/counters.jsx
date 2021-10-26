import React, { components } from "react";
import { Component } from "react/cjs/react.production.min";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.props.onReset}
        >
          Reset
        </button>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
