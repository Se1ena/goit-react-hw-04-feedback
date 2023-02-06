import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonList} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <ButtonList>
        {options.map(el => <li key={el}>
          <Button onClick={() => onLeaveFeedback(el)} action={el}>{el[0].toUpperCase() + el.slice(1)}</Button>
        </li>)}
      </ButtonList>
    );
  };
  
  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };