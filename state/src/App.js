import React from 'react';
import './App.css';

class App extends React.Component {

  /*
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  */

  // shorthand version
  state = {
    counter: 0,
    liked: false
  }
  clickHandler = () => {
    // console.log('click');
    // you should not mutate state directly
    // this.state.counter = this.state.counter + 1 
    // use setState() to update the state

    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // if we use the current state to calculate the new state we should 
    // use a function like this - this is the case when you see to the right of the 
    // colon in the state object 'this.state....' 
    this.setState((state) => ({
      counter: state.counter + 1
    }));
  }

  likeHandler = () => {
    this.setState(state => ({
      liked: !state.liked
    }))
  }

  render() {
    console.log(this.state);
    // console.log(this.props.user);
    // this is not allowed - props are read only
    // this.props.user = 'Alice';
    // console.log(this.props.user);
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Counter: {this.state.counter}</h1>
          <button onClick={this.clickHandler}>Click me 👇</button>
          <h1>{this.state.liked ? 'I like it 👍' : 'I do not yet like it'}</h1>
          <button onClick={this.likeHandler}>Like</button>
          {/* <button onClick={() => console.log('click me as well')}>Click me as well 👇</button> */}
        </header>
      </div>
    );
  }
}

export default App;
