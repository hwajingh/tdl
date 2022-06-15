// import logo from "./logo.svg";
// import "./App.css";
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
  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    const list = [...this.state.list];

    list.push(newItem);

    // update state with new list and reset new item input
    this.setState({
      list,
      newItem: "",
    });
  }
  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
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

// function App() {
//   constructor(props){
//     super(props);

//     this.state={
//       newItem:"",
//       list:[]
//     }
//   }
//   // render(){
//       return (
//       <div className="App">

//       </div>
//     );
//   // }
// }

// export default App;
