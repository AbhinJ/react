import React, { Component } from 'react';
import Course from './Course';

 class CourseSales extends Component {
  SumPrice(price){
    this.setState({Total: this.state.Total + price});
  }
  constructor(props){
    super(props);

    this.state = {
      Total: 0,
    };
    this.SumPrice = this.SumPrice.bind(this);
  }
  render(){
    var courses = this.props.items.map((item,i) => {
      return <Course name={item.name} price={item.price}
      SumPrice={this.SumPrice} active={item.active} key={i} />
    });
    return(
      <div>
        <h1>YOU CAN BUY COURSES HERE :</h1>
        <div id="courses">
          {courses}
          <p id="total">TOTAL <b>{this.state.Total}</b></p>
        </div>
      </div>
    );
  }
}

export default CourseSales;
