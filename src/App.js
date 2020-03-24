import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }
  handleClick = () => {
    import('./Components/ThankYou')
      .then(module => this.setState({ message: module.default() }))
      .catch(err => console.log(err));
  }

  render() {
    const { message } = this.state;
    console.log(message)

    return (
      <div className="App">
        <button onClick={this.handleClick}>Click Me!</button>
        { message ? message : null }
      </div>
    );
  }
}
