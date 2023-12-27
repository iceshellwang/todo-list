import React, { Component } from 'react'

export default class Footer extends Component {
  
  render() {
    const {selectAll, todos, removeDoneItem} = this.props;
    const alreadyDoneItem = (todos || []).filter(item=>item.done).length;
    
    const totalItem = todos.length;
    return (
      <div>
        <input 
          type='checkbox' 
          onChange={(e)=>selectAll(e.target.checked)}
          checked={alreadyDoneItem === totalItem && totalItem !==0 }
          />
        <span>已完成</span>
        <span>{alreadyDoneItem}</span>
        <span>/共有</span>
        <span>{totalItem}</span>

        <button onClick={removeDoneItem}>清除已完成任务</button>
      </div>
    )
  }
}
