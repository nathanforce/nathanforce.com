import React from 'react';
import Helmet from 'react-helmet';

const pages = [
  <div className="poem">
    <span>Today we celebrate you</span>
    <span>as you welcome age thirty-one.</span>
    <span>A fine, respectable age.</span>
    <span>Find clues for your first gift</span>
    <span>Waiting on the next page</span>
  </div>,
  // bottle of wine, hidden in wine rack
  <div className="poem">
    <span>Often red, sometimes white</span>
    <span>Perfectly bubbly, fresh, and light.</span>
    <span>Pop the cork! Pour a glass.</span>
    <span>Cheers to another year passed</span>
  </div>,
  // plant, hidden in planter
  <div className="poem">
    <span>Indoor life.</span>
    <span>An ode to 2020 and my existence.</span>
    <span>Nurture me. With your love,</span>
    <span>I will share in your growth</span>
    <span>for birthdays to come.</span>
  </div>,
  // gift card, hidden on bike
  <div className="poem">
    <span>Come along with me.</span>
    <span>Adventure waits! </span>
    <span>Just like the road, life </span>
    <span>keeps on going. And I can't wait</span>
    <span>to see what comes next.</span>
  </div>,
  <div className="poem" css={{ textAlign: 'center !important' }}>
    <div>Happy birthday, Kel.</div>
    <div>&nbsp;</div>
    <div>I love you</div>
  </div>,
];

const KellyBirthday2020 = props => {
  const [page, setPage] = React.useState(0);

  return (
    <React.Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div
        id="bday"
        css={{
          backgroundColor: '#FCF1DE',
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div css={{ marginTop: '-4rem' }}>
          {page === 0 && (
            <div css={{ textAlign: 'left', position: 'relative' }}>
              <div
                css={{
                  position: 'absolute',
                  left: 280,
                  top: 30,
                  fontSize: '1.5rem',
                  color: '#D4C9B6',
                  textTransform: 'uppercase',
                  letterSpacing: '.02rem',
                }}
              >
                <time>Aug 7, 2020</time>
              </div>
              <div css={{ position: 'relative' }}>
                <h1 css={{ margin: 0, fontSize: '10rem', color: '#ef6c61' }}>
                  Kelly
                </h1>
                <h1
                  css={{
                    margin: 0,
                    fontSize: '10rem',
                    color: 'rgba(236, 150, 0, .6)',
                    mixBlendMode: 'hard-light',
                    transform: 'translate(5px, -5px)',
                    position: 'absolute',
                    top: 0,
                  }}
                >
                  Kelly
                </h1>
              </div>
              <div
                css={{
                  marginTop: '-2rem',
                  fontSize: '2rem',
                  textTransform: 'uppercase',
                  letterSpacing: '.02rem',
                  fontWeight: 'bold',
                  color: '#869c9b',
                }}
              >
                31
                <sup css={{ fontSize: '12px' }}>st</sup> Birthday
              </div>
            </div>
          )}
          {page === 1 && (
            <div css={{ position: 'relative' }}>
              <img
                css={{
                  mixBlendMode: 'color-burn',
                  width: 500,
                }}
                src="https://static.dribbble.com/users/187497/screenshots/11324985/media/10ef026f165730860a43d9425cbd2dc9.png"
              />
              <svg
                width="500"
                height="375"
                css={{
                  position: 'absolute',
                  transform: 'rotate(5deg) translateX(30px)',
                  left: 0,
                  top: 0,
                  mixBlendMode: 'color-burn',
                }}
              >
                <rect
                  width="500"
                  height="375"
                  css={{
                    strokeWidth: 30,
                    stroke: 'rgb(236, 150, 0)',
                    fill: 'transparent',
                  }}
                />
              </svg>
            </div>
          )}
          {page === 2 && (
            <div css={{ position: 'relative' }}>
              <img
                css={{
                  mixBlendMode: 'darken',
                  width: 500,
                  filter: 'hue-rotate(203deg) saturate(.6)',
                }}
                src="https://static.dribbble.com/users/20442/screenshots/6276814/peace_lily-01.png"
              />
              <svg
                width="500"
                height="375"
                css={{
                  position: 'absolute',
                  transform: 'rotate(-5deg) translateX(30px)',
                  left: 0,
                  top: 0,
                  mixBlendMode: 'color-burn',
                }}
              >
                <rect
                  width="500"
                  height="375"
                  css={{
                    strokeWidth: 30,
                    stroke: 'rgb(255,154,144)',
                    fill: 'transparent',
                  }}
                />
              </svg>
            </div>
          )}
          {page === 3 && (
            <div css={{ position: 'relative' }}>
              <img
                css={{
                  mixBlendMode: 'darken',
                  width: 500,
                  filter: 'sepia(.65)',
                }}
                src="https://static.dribbble.com/users/26059/screenshots/4275642/perfection_3.jpg"
              />
              <svg
                width="500"
                height="375"
                css={{
                  position: 'absolute',
                  transform: 'rotate(3deg) translateX(30px)',
                  left: 0,
                  top: 0,
                  mixBlendMode: 'color-burn',
                }}
              >
                <rect
                  width="500"
                  height="375"
                  css={{
                    strokeWidth: 30,
                    stroke: 'rgb(33, 90, 77)',
                    fill: 'transparent',
                  }}
                />
              </svg>
            </div>
          )}
          {pages[page]}
          <div
            css={{
              marginTop: '4rem',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            {page > 0 &&
              page + 1 < pages.length && (
                <button
                  onClick={() => {
                    setPage(page => page - 1);
                  }}
                  css={{
                    marginRight: '2rem',
                    textTransform: 'uppercase',
                    letterSpacing: 2,
                    fontSize: 14,
                    padding: '.75rem 2rem',
                    border: '2px solid transparent',
                    minWidth: 150,
                    width: 'fit-content',
                    display: 'block',
                    fontWeight: 600,
                    textDecoration: 'none !important',
                    transition: '.2s ease-out',
                    transitionProperty: 'background-color, color',
                    cursor: 'pointer',
                    textAlign: 'center',
                    borderRadius: 4,
                    backgroundColor: '#f9d289',
                    color: '#ef6c61',
                  }}
                >
                  Back
                </button>
              )}
            {page + 1 < pages.length && (
              <button
                onClick={() => {
                  setPage(page => page + 1);
                }}
                css={{
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  fontSize: 14,
                  padding: '.75rem 2rem',
                  border: '2px solid transparent',
                  minWidth: 150,
                  width: 'fit-content',
                  display: 'block',
                  fontWeight: 600,
                  textDecoration: 'none !important',
                  transition: '.2s ease-out',
                  transitionProperty: 'background-color, color',
                  cursor: 'pointer',
                  textAlign: 'center',
                  borderRadius: 4,
                  backgroundColor: '#f9d289',
                  color: '#ef6c61',
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default KellyBirthday2020;
