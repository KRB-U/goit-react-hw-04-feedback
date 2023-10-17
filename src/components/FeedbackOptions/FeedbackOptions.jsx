import { DivButtonContainer, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <DivButtonContainer>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </Button>
      ))}

      {/* {[key]: option[key]} */}

      {/* <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button> */}
    </DivButtonContainer>
  );
};
export { FeedbackOptions };
