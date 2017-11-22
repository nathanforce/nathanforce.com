import React from 'react';
import random from 'lodash/random';

const gradients = [
    ['#38ef7d', '#11998e'],
    ['#fc5c7d', '#6a82fb'],
    ['#fc4a1a', '#f7b733'],
    ['#00b09b', '#96c93d'],
    ['#ff9966', '#ff5e62'],
    ['#7f00ff', '#e100ff'],
    ['#43c6ac', '#f8ffae'],
    ['#ffafbd', '#ffc3a0']
];

const RandomGradient = ({ render }) => {
    const [left, right] = gradients[random(gradients.length - 1)];

    return render({ left, right });
};

export default RandomGradient;
