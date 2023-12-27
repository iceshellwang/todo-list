import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state={
    isHover: false,
  }
  handleDeleteItem = (id) => {
    const {deleteItem} = this.props;
    if (window.confirm('confirm to delete todo item?')) {
      deleteItem(id);
    }
  }
  render() {
    const {id, name, done, changeItemCheck} = this.props;
    const {isHover} = this.state;
    return (
      <div className='item' 
        onMouseEnter={()=> this.setState({isHover: true})}
        onMouseLeave={()=> this.setState({isHover: false})}
        style={{backgroundColor: isHover? '#ddd': 'white'}}
      >
        <input 
          type='checkbox'
          checked={done} 
          onChange={()=>{changeItemCheck(id, !done)}}
        />
        <span>{name}</span>
        {isHover && <button className='btn' onClick={()=>this.handleDeleteItem(id)}>delete</button>}
      </div>
    )
  }
}
