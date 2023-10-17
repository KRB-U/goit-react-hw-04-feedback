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
    </DivButtonContainer>
  );
};
export { FeedbackOptions };
