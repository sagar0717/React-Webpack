import React, { Component } from 'react';

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            clickedOnce: false
        };
    }

    handleClick = () => {
        if (!this.state.clickedOnce) {
            console.log('Clicked');
        }
        this.setState({
            clickedOnce: true,
        });
    }

    componentDidUpdate() {
        console.log('Updated!');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}
export default MyComponent;