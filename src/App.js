import React, { Component } from 'react';
import testQuestions from './questions/testQuestions';
import Test from './components/Test';
import Result from './components/Result';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,               //общее количество вопросов
      questionId: 1,            //id вопроса
      question: '',             //текуший вопрос
      answerOptions: [],        //текущие варианты ответа
      answersCount: [],         //все ответы
      result: 0,                //очки
      complete: 0               //закончен ли тест
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  //достаем вопрос и мешаем ответы
  componentDidMount() {
    const shuffledAnswerOptions = testQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: testQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  //рандомный разброс вариантов ответа 
  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  //выбор ответа
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value); //в value лежит point ответа, то есть правильный он или нет

    if (this.state.questionId < testQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  //установка выбранного ответа
  setUserAnswer(answer) {
    var currentCount = this.state.answersCount; 
    this.setState({
      answerCount: currentCount.push(answer)
    });
  }

  //установка следующего вопроса
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: testQuestions[counter].question,
      answerOptions: testQuestions[counter].answers,
    });
  }

  //получаем результаты
  getResults() {
    const currentAnswersCount = this.state.answersCount; 
    var correctAnswerCount = 0;

    for(var i=0; i < currentAnswersCount.length; i++){
      if(currentAnswersCount[i] === '1'){
        correctAnswerCount = correctAnswerCount + 1;
      }
    }
    
    return correctAnswerCount;
  }

  //установка результата
  setResults(count) {
    this.setState({ result: count, complete: 1});
  }

  //отрисовка формы теста
  renderTest() {
    return (
      <Test
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={testQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  //отрисовка формы результата
  renderResult() {
    return <Result testResult={this.state.result} />;
  }

  //начальная отрисовка
  render() {
    return (
      <div className="App">
        {this.state.complete ? this.renderResult() : this.renderTest()}
      </div>
    );
  }
}

export default App;
