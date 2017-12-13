import React, { Component } from 'react';

export default class Timer extends Component {
  componentDidMount()
  {
    setInterval(this.ticker,1000);
  }
  ticker(){
  this.setState({clock: new Date - this.props.start})
  }
  constructor(props){
    super(props);

    this.state = {clock : 0};
    this.ticker=this.ticker.bind(this);
  }
  render(){
    var clock = Math.round(this.state.clock / 1000);
    return(
      <div>
        <br />
        <span>{clock}</span>
        <p>SECONDS.</p>
      </div>
    );
  }
}
