import React from 'react';
import styled from 'styled-components';
import RandomGradient from './RandomGradient';

const Container = styled.div`
    background: -webkit-linear-gradient(
        to right,
        ${({ left }) => left},
        ${({ right }) => right}
    );
    background: linear-gradient(
        to right,
        ${({ left }) => left},
        ${({ right }) => right}
    );
`;

const GradientBackground = props => {
    return (
        <RandomGradient
            render={({ left, right }) => (
                <Container left={left} right={right} {...props} />
            )}
        />
    );
};

export default GradientBackground;
