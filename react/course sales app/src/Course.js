import React , { Component } from 'react';

export default class Course extends Component {
  Clicker(){
    var active = !this.state.active;
    this.setState({active: active });
    this.props.SumPrice(active ? this.props.price : -this.props.price);
  }
  constructor(props){
    super(props);

    this.state = {active: false};
    this.Clicker=this.Clicker.bind(this);
  }
  render(){
    return(
      <div>
        <p onClick={this.Clicker} className={this.state.active ? 'active' : ''}>{this.props.name} <b>{this.props.price}</b></p>
      </div>
    );
  }
}
