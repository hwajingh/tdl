import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }
  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  makeId() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random()}`;
  }
  addItem() {
    // FIX: previously `1 + Math.random()` could collide, breaking React
    // keys and deleting the wrong row. Also previously blank strings
    // were accepted, and setState read this.state directly.
    if (this.state.newItem.trim() === "") {
      return;
    }
    const newItem = {
      id: this.makeId(),
      value: this.state.newItem.slice(),
    };
    this.setState((prevState) => ({
      list: [...prevState.list, newItem],
      newItem: "",
    }));
  }
  deleteItem(id) {
    this.setState((prevState) => ({
      list: prevState.list.filter((item) => item.id !== id),
    }));
  }
  render() {
    return (
      <div className="App">
        <div>
          To Do list
          <br></br>
          <input
            type="text"
            placeholder="things to do"
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>add</button>
          <br></br>
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    delete it
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;

