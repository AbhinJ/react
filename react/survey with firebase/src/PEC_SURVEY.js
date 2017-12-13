import React ,{ Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

var config = {
    apiKey: "AIzaSyCyNRPFjzi7GIKAQH77wi0n-_eKrT81Ajg",
    authDomain: "survey-app-935a3.firebaseapp.com",
    databaseURL: "https://survey-app-935a3.firebaseio.com",
    projectId: "survey-app-935a3",
    storageBucket: "",
    messagingSenderId: "380005892682"
  };
  firebase.initializeApp(config);

export default class PECSURVEY extends Component {
  nameSubmit(event){
    var studentName = this.refs.name.value;
    this.setState({studentName: studentName}, function(){
      console.log(this.state);
    });
  }
  answerSelected(event){
    var answers = this.state.answers;
    if(event.target.name === "answer1"){
      answers.answer1 = event.target.value;
    } else if(event.target.name === "answer2"){
        answers.answer2 = event.target.value;
    } else if(event.target.name === "answer3"){
          answers.answer3 = event.target.value;
    } else if(event.target.name === "answer4"){
            answers.answer4 = event.target.value;
    } else if(event.target.name === "answer5"){
        answers.answer5 = event.target.value;
      }
    this.setState({answers: answers} ,function(){
      console.log(this.state);
    });
  }
  questionSubmit(){
    firebase.database().ref('PECSURVEY/'+this.state.uid).set({
      studentName: this.state.studentName,
      answers: this.state.answers,
    });
    this.setState({isSubmitted: true});
  }

  constructor(props){
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: '',
      answers: {
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: ''
      },
      isSubmitted:false
    };
    this.nameSubmit = this.nameSubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
  }
  render(){
    var studentName;
    var questions;
    if( this.state.studentName === '' && this.state.isSubmitted === false ){
      studentName = <div>
      <h1>Hey Student, let me know your name.</h1>
      <form onSubmit={this.nameSubmit}>
        <input className="namy" type="text" placeholder="ENTER YOUR NAME" ref="name" />
      </form>
    </div>;
    questions = '';
  } else if(this.state.studentName !== '' && this.state.isSubmitted === false){
    studentName = <h1>WELCOME TO PEC-SURVEY-APP, {this.state.studentName}</h1>;
    questions = <div>
      <h2>HERE ARE SOME OF THE QUESTION</h2>
      <form onSubmit={this.questionSubmit}>
        <div className='card'>
          <label>ARE YOU LIKING THE PEC CAMPUS?</label><br />
          <input type='radio' name='answer1' value='YES' onChange={this.answerSelected} />YES
          <input type='radio' name='answer1' value='NO' onChange={this.answerSelected} />NO
          <input type='radio' name='answer1' value='MAY BE' onChange={this.answerSelected} />MAY BE
        </div>
        <div className='card'>
          <label>FROM WHERE DO YOU BELONG?</label><br />
          <input type='radio' name='answer2' value='PUNJAB' onChange={this.answerSelected} />PUNJAB
          <input type='radio' name='answer2' value='OUTSIDE-PUNJAB' onChange={this.answerSelected} />OUTSIDE-PUNJAB
          <input type='radio' name='answer2' value='CHANDIGARH' onChange={this.answerSelected} />CHANDIGARH
        </div>
        <div className='card'>
          <label>NOW , WHERE DO YOU LIVE IN CHANDIGARH?</label><br />
          <input type='radio' name='answer3' value='PEC-HOSTEL' onChange={this.answerSelected} />PEC-HOSTEL
          <input type='radio' name='answer3' value='DAY-SKI' onChange={this.answerSelected} />DAY-SKI
        </div>
        <div className='card'>
          <label>WHAT IS YOUR GENDER?</label><br />
          <input type='radio' name='answer4' value='MALE' onChange={this.answerSelected} />MALE
          <input type='radio' name='answer4' value='FEMALE' onChange={this.answerSelected} />FEMALE
          <input type='radio' name='answer4' value='OTHERS' onChange={this.answerSelected} />OTHERS
        </div>
        <div className='card'>
          <label>WHICH IS BETTER FOR YOU?</label><br />
          <input type='radio' name='answer5' value='PEC' onChange={this.answerSelected} />PEC
          <input type='radio' name='answer5' value='HOME' onChange={this.answerSelected} />HOME
          <input type='radio' name='answer5' value='BOTH' onChange={this.answerSelected} />BOTH
        </div>
        <input className="feedback-button" type="submit" value="submit" />
      </form>
    </div>;
  } else if(this.state.isSubmitted===true){
    studentName= <h2>THANKS , {this.state.studentName}</h2>;
  }

    return(
      <div>
      {studentName}
      ---------------------------------------
      {questions}
      </div>
    );
  }
}
