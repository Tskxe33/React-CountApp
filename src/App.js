import React, { Component } from "react";

import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    console.log("Event handler called", counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <Navbar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </>
    );
  }
}

// function App() {
//   return (
//     <>
//       <Navbar />
//       <main className="container">
//         <Counters />
//       </main>
//     </>
//   );
// }

export default App;
