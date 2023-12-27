
import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer'

import './App.css';

export default class App extends Component {
  state={
    todos: [
      {id:1,name:'drink cola',done: true},
      {id:2,name:'coding',done: true},
      {id:3,name:'workout',done: false},
      {id:4,name:'hangout',done: false}

    ]
  }
  handleListAdd = (addedItem) => {
    const {todos} = this.state;
    this.setState({
      todos:[
        addedItem,  ...todos,
      ]
    })
  }
   changeItemCheck = (id, status) => {
    const {todos} = this.state;
    const newTodos = todos.map(item=> {
      if (item.id === id) {
        return {
          ...item,
          done: status
        }
      };
      // @todo 不能直接加else此处 
      return item
      
    });
    this.setState({
      todos: newTodos
    })
  }
  deleteItem = (id) => {
    const {todos} = this.state;
    const newArr = todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      todos: newArr
    })
  }
  selectAllChange = (val) => {
    const {todos} = this.state;
    const newArr = todos.map((item)=> {
      return {
        ...item,
        done: val,
      }
    })
    this.setState({
      todos: newArr,
    })
  }
  removeDoneItem = () => {
    const {todos} = this.state;
    const newArr = todos.filter((item)=> {
      return !item.done 
    })
    this.setState({
      todos: newArr,
    })
  }
  render() {
    const {todos} = this.state;
    return (
      <div className="App">
        <Header handleListAdd={this.handleListAdd} />
        <List 
          todos={todos} 
          changeItemCheck={this.changeItemCheck}
          deleteItem={this.deleteItem}
          />
          <Footer todos={todos} selectAll={this.selectAllChange} removeDoneItem={this.removeDoneItem}/>
    </div>
    )
  }
}


