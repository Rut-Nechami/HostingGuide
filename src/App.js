import React, { Component } from 'react';
import NewHost from './components/new-host/new_host'
import URL from "./components/url"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { apiResponse: "" }
  }

  // callAPI() {
  //   fetch("http://localhost:3001/signIn")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }), console.log("hello , I came back")
  //     );


  // }
  // componentDidMount() {
  //   this.callAPI();
  // }
  render() {
    return (
      <div>
        <p>{this.state.apiResponse}</p>
        <URL></URL>
      </div>
    )
  }
}

export default App;
