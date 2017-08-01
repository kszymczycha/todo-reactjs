import React from 'react';
import ReactDom from 'react-dom';
import styles from './css/add-item.css';

class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    render() {
        return (
            <div id="add-item">
                <input type="text" onKeyPress={this.handleKeyPress} />
            </div>
        );
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.add(e.target.value);
            e.target.value = '';
        }        
    };

}

module.exports = AddItem;
