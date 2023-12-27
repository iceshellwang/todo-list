import React, { Component } from 'react'
import Item from '../Item'
import './index.css';
export default class List extends Component {
  render() {
    const {todos, changeItemCheck, deleteItem} = this.props;
    return (
      <ul className='list'>
        {todos.map(item => {
            return (
                <Item 
                  key={item.id} 
                  {...item} 
                  changeItemCheck={changeItemCheck} 
                  deleteItem={deleteItem}
                />
            )
        })}

      </ul>
    )
  }
}
