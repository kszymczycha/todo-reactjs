import React from 'react';
import ReactDOM from 'react-dom';
import Item from './item.js';
import AddItem from './add-item.js';
import styles from './css/index.css';

class ListItems extends React.Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.showInput = this.showInput.bind(this);
        this.state = {
            items: [],
            input: false
        }
    }

    render() {
        const listItems = this.state.items.map((item, index) => 
            <Item item={item} key={index} delete={this.delete}/>
        );

        let textField = this.state.input ? <AddItem add={this.add}/> : 'Click to add task';

        return(
            <div id="list-items">
                <div onClick={this.showInput}>{textField}</div>
                <ul>{listItems}</ul>
            </div>
        );
    }

    delete(item) {
        const items = this.state.items.filter((val, index) => item !== val);
        this.setState({
            items: items
        });
    }

    add(item) {
        const items = this.state.items;
        items.push(item);
        this.setState({
           items: items
        })    
    }

    showInput() {
        this.setState({
            input: true
        });
    }
}

ReactDOM.render(
  <ListItems/>,
  document.getElementById('root')
);