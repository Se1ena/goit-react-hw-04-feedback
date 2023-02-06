import React from 'react';
import PropTypes from 'prop-types';
import { Text, Wrapper } from './Notification.styled';

export const Notification = ({message}) => {
    return (
        <Wrapper>
            <Text>{message}</Text>
        </Wrapper>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};