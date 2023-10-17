import React from 'react';
import { PStatisticsDetail } from './Statistics.styled';
// divContainerStatistic
const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  percentPositiveFeedback,
}) => {
  return (
    <div>
      <PStatisticsDetail>Good: {good}</PStatisticsDetail>
      <PStatisticsDetail>Neutral: {neutral}</PStatisticsDetail>
      <PStatisticsDetail>Bad: {bad}</PStatisticsDetail>
      <PStatisticsDetail>Total: {totalFeedback}</PStatisticsDetail>
      <PStatisticsDetail>
        Positive feedback: {percentPositiveFeedback}%
      </PStatisticsDetail>
    </div>
  );
};

export { Statistics };
