import React, { Component } from 'react';
import './App.css';
import List from './List';
import ListForm from './ListForm';
import Grocery from './Grocery'


class App extends Component {
  state = {
    list: [
      { id: 1, name: "Bananas", price: 3, complete: false },
      { id: 2, name: "Oranges", price: 2, complete: false },
      { id: 3, name: "Apples", price: 2, complete: false },
    ]
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 10000).toString(16).substring(1);
  }

  getRandPrice = () => {
    return Math.floor((Math.random()) * 10);
  }

  addItem = (name) => {
    const { list } = this.state;
    const item = { name, id: this.getUniqId(), price: this.getRandPrice() ,complete: false}
    this.setState({ list: [...list, item]});
  }

  handleClick = (id) => {
    const { list } = this.state;
    this.setState({
      list: list.map ( item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item
      })
    })
  }

  render() {
    const { list } = this.state;

    return (
      <div className="app">
        <Grocery name="No Store Yet" />
        <List name="Grocery List" items = {list} itemClick={this.handleClick} />
        <ListForm addItem={this.addItem} />
      </div>
      
    );
    
  }
}

export default App;
