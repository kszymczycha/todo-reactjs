import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/item.css';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
    }

    render() {
        return (<li><span>{this.props.item}</span> <span className="remove-btn" onClick={this.removeItem}>x</span></li>);
    }

    removeItem() {
        this.props.delete(this.props.item);
    }

}

module.exports = Item;