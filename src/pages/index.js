import React from 'react';
import Link from 'gatsby-link';
import S, { keyframes } from 'styled-components';
import random from 'lodash/random';
import Transition from 'react-transition-group/Transition';
import RandomGradient from '../components/RandomGradient';
import { Centered } from '../components/Positioning';
import WordBank from '../components/WordBank';
import Social from '../components/Social';

const duration = 250;

const defaultStyle = {
    transition: `all ${duration}ms ease-out`
};

const transitionStyles = {
    entering: { transform: 'scale(1.3)', margin: '0 .75rem' },
    entered: { transform: 'scale(1.0)' },
    exiting: { transform: 'scale(1.3)', margin: '0 .75rem' }
};

const Scale = ({ in: inProp, children, style: passedStyle }) => (
    <Transition in={inProp} timeout={duration} appear={true}>
        {state => (
            <span
                style={{
                    display: 'inline-block',
                    ...passedStyle,
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}
            >
                {children}
            </span>
        )}
    </Transition>
);

const GradientText = S.h3`
  display: block;
  font-size: 220px;
  line-height: .8;
  padding: 0;
  color: rgba(255,255,255,0.1);

  background: -webkit-linear-gradient(to right, ${({ left }) => left}, ${({
    right
}) => right});
  background: linear-gradient(to right, ${({ left }) => left}, ${({ right }) =>
    right});

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: center left, top left;
  background-clip: text;
`;

class PopInText extends React.Component {
    state = {
        newWord: false
    };
    componentWillReceiveProps({ word }) {
        if (word !== this.props.word) {
            this.setState({ newWord: true }, () => {
                this.setState({ newWord: false });
            });
        }
    }

    render() {
        const colors = {
            blue: '#0074D9',
            // aqua: '#7FDBFF',
            teal: '#39CCCC',
            olive: '#3D9970',
            green: '#2ECC40',
            // yellow: '#FFDC00',
            orange: '#FF851B',
            red: '#FF4136',
            maroon: '#85144b',
            // fuchsia: '#F012BE',
            purple: '#B10DC9'
        };
        const names = Object.keys(colors);
        const key = names[random(names.length - 1)];
        const color = colors[key];
        return (
            <Scale
                in={this.state.newWord}
                style={{
                    // minWidth: '150px',
                    // color: '#ccc',
                    // borderBottom: '1px dashed #ccc'
                    // textDecorationStyle: 'dotted',
                    // textDecorationLine: 'underline'
                }}
                {...this.props}
            >
                {this.props.word}
            </Scale>
        );
    }
}

class CycleText extends React.Component {
    state = {
        index: 0
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(({ index }) => {
                if (index < this.props.words.length - 1) {
                    return { index: index + 1 };
                }

                return { index: 0 };
            });
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const word = this.props.words[this.state.index];
        return <PopInText word={word} />;
    }
}

const IndexPage = () => (
    <RandomGradient
        render={({ left, right }) => (
            <div className="p2 center">
                <div
                    style={{
                        background: `linear-gradient(to right, ${left}, ${right})`,
                        padding: '2px'
                    }}
                    className="max-width-4 inline-block"
                >
                    <div
                        style={{
                            background: 'white',
                            padding: '1rem',
                            textAlign: 'left'
                        }}
                    >
                        <GradientText
                            left={left}
                            right={right}
                            style={{
                                userSelect: 'none',
                                fontSize: '118px',
                                fontWeight: '300',
                                letterSpacing: 'inherit'
                            }}
                            className="m0"
                        >
                            NF
                        </GradientText>
                    </div>
                </div>
                <p className="max-width-3 mx-auto mt3">
                    Hello! I am a Javascript developer in Brooklyn, NY working
                    to write clean code and create simple, usable web
                    experiences. Give me a shout at{' '}
                    <a
                        style={{ color: '#1da1f2', textDecoration: 'none' }}
                        title="Nathan Force's Twitter"
                        href="https://twitter.com/ForceTheIssue"
                    >
                        @ForceTheIssue
                    </a>{' '}
                    and let's build{' '}
                    <div
                        style={{
                            color: '#ccc',
                            display: 'inline-block',
                            minWidth: '175px',
                            borderBottom: '2px dashed #ccc'
                        }}
                    >
                        <CycleText
                            words={['cool', 'beautiful', 'accessible', 'weird']}
                        />
                    </div>{' '}
                    stuff!
                </p>
                <WordBank
                    style={{ color: '#aaa', fontSize: '.75rem' }}
                    words={['Javascript', 'UI', 'React', 'a11y']}
                />
                <Social />
            </div>
        )}
    />
);

export default IndexPage;
