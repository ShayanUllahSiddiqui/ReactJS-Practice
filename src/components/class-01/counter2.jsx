import React from 'react'

class Counter2 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement(){
        this.setState({
            count: this.state.count - 1
        })
    }
    
    render() {
        let { count } = this.state
        return (
            <div>
                <h1> {count} </h1>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default  Counter2