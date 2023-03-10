import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Div } from './Div';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const totalFeedback = (good + neutral + bad);
  const positivePercentage = Math.round(good / totalFeedback * 100);

  //const updateFeedback = e => {
    //const { name } = e.target;
    //if (name === 'good') {
      //setGood(prevState => prevState + 1);
    //}
    //if (name === 'neutral') {
      //setNeutral(prevState => prevState + 1);
    //}
    //if (name === 'bad') {
      //setBad(prevState => prevState + 1);
    //}
  //};

  const updateFeedback = (button) => {
    switch (button) {
      case 'good':
        setGood(prState => prState + 1);
        break;
      case 'neutral':
        setNeutral(prState => prState + 1);
        break;
      case 'bad':
        setBad(prState => prState + 1);
        break;
      default:
        console.log(`Error in type ${button}`);
    }
  };

  return (
    <Div
      bg="#ead39c"
      width="300px"
      height="250px"
      mx="auto"
      p="16px"
      mt="30px"
      borderRadius="10px"
    >
      <Section title="Please leave your feedback">
        <FeedbackOptions options={options} onLeaveFeedback={updateFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Div>
  );
};

export { App };

//export class App extends Component {

//state = {
//good: 0,
//neutral: 0,
//bad: 0,
//};

//updateFeedback = (button) => {
//this.setState((prevState) => ({
//[button]: prevState[button] + 1,
//}));
//};

//countTotalFeedback = (state) => {
//const feedbackValues = Object.values(state);
//return feedbackValues.reduce((acc, el) => acc + el, 0);
//};

//countPositiveFeedbackPercentage = (state) => {
//const feedbackValues = Object.values(state);
//const totalFeedback = feedbackValues.reduce((acc, el) => acc + el, 0);
//const feedbackGoodValue = state.good;
//return Math.round(feedbackGoodValue / totalFeedback * 100);
//};

//render() {
//const options = Object.keys(this.state);
//const { good, neutral, bad } = this.state;
//const totalFeedback = this.countTotalFeedback(this.state);
//const positivePercentage = this.countPositiveFeedbackPercentage(this.state) ?
//this.countPositiveFeedbackPercentage(this.state) : '';

//return (<Div bg='#ead39c'
//width='300px'
//height='250px'
//mx='auto'
//p='16px'
//mt='30px'
//borderRadius='10px'>
//<Section title='Please leave your feedback'>
//<FeedbackOptions options={options}
//onLeaveFeedback={this.updateFeedback} />
//</Section>
//<Section title='Statistics'>
//{totalFeedback > 0 ?
//<Statistics
//good={good}
//neutral={neutral}
//bad={bad}
//total={totalFeedback}
//positivePercentage={positivePercentage} /> :
//<Notification message='There is no feedback' />}
//</Section>
//</Div>
//)
//;
//}
//}
