import React, { Component } from 'react'
import {nanoid} from 'nanoid'
export default class Header extends Component {
    handleKeyUp = (e) => {
        if (e.keyCode !==13 || !e.target.value) return;
        const {handleListAdd} = this.props;
        handleListAdd({
            id: nanoid(),
            name: e.target.value,
            done: false
        })
        e.target.value='';
    }
    render() {
        // const handleInputChange = (e) => {
        //     console.log('hello', e.target.keyCode)
            
        // }
        
        
        return (
        <div>
            <input 
                placeholder='please enter your item'
                // onChange={handleInputChange}
                onKeyUp={this.handleKeyUp}
                ></input>
        </div>
        )
    }
}
