import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        console.log('Constructor');
        super(props);
        this.state = {
            counter: 0
        }
    }
    // console.log('Here');

    increment = () => {
        console.log('Inc');
        this.setState({ counter: this.state.counter + 1 });
    }

    decrement = () => {
        console.log('Dec');
        this.setState({ counter: this.state.counter - 1 });
    }

    componentDidMount() {
        console.log('Component Mount');
    }

    componentDidUpdate() {
        console.log('Component Update');
    }

    componentWillUnmount() {
        console.log('Component Unmount');
    }

    shouldComponentUpdate() {
        return true;
        console.log('Component Should Update');
    }

    render() {
        console.log('Render');
        return <div>
            {console.log('Return')}
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <h1>Counter: {this.state.counter}</h1>
        </div>
    }
}

export default Counter;