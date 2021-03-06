import React from 'react'
import Carousel from 'react-multi-carousel'
import styled, { keyframes } from 'styled-components'
import Subtitle from '../../ui/Subtitle'

const Partners = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  }
  return (
    <Container>
      <div className='section pt-10 pb-12'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='hidden-xs mt-7'></div>
              <div className='mt-5'></div>
              <div className='floating'>
                <img src='images/cybery_large.webp' alt='cybery' />
              </div>
            </div>
            <div className='col-sm-6'>
              <Subtitle className='mb-4' text={'Friends &amp; Partners'} />
              <div className='film-links-cloud'>
                <ul>
                  {PartnersData.map((partner, index) => (
                    <li key={index}>
                      <a href={partner.url} target='_blank' rel="noopener">
                        {partner.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <Subtitle text={' Clients &amp; publications'} className='mb-4' />
              <div className='mw-560'>
                <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  arrows={false}
                  partialVisible={false}
                  ssr={true}
                  responsive={responsive}
                >
                  <div className='logo-item'>
                    <img src='images/logo/blocke.png' alt='cybery limited connect with bloke' />
                  </div>
                  <div className='logo-item'>
                    <img src='images/logo/bytbil.png' alt='cybery connect with bytbil' />
                  </div>
                  <div className='logo-item'>
                    <img src='images/logo/kvdcars-logo.png' alt='kvdcars partner' />
                  </div>
                  <div className='logo-item'>
                    <img src='images/logo/ooyy.png' alt='ooyo partner logo' />
                  </div>
                  <div className='logo-item'>
                    <img src='images/logo/autobytel-logo.png' alt='autobytel logo' />
                  </div>
                  <div className='logo-item'>
                    <img src='images/logo/logo_10.jpg' alt='logo' />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

const PartnersData = [
  {
    name: 'blocket',
    url: 'https://www.blocket.se/',
  },
  {
    name: 'bytbil',
    url: 'https://www.bytbil.com/',
  },
  {
    name: 'kvdcars',
    url: 'https://www.kvdcars.com/',
  },
  {
    name: 'Aaaauto',
    url: 'https://www.aaaauto.cz/en/',
  },
  {
    name: 'Autobytel',
    url: 'https://www.autobytel.com/',
  },
  {
    name: 'Autouncle',
    url: 'https://www.autouncle.com/',
  },
  {
    name: 'aldbil',
    url: 'https://www.aldbil.se/en/',
  },

  

]

const floating = keyframes`
from {-webkit-transform:translate(0, 0px);}
65% {-webkit-transform:translate(0, 15px);}
to {-webkit-transform: translate(0, -0px); 
`

const Container = styled.div`
  .sub-title {
    font-size: 14px;
    letter-spacing: 0.1em;
    font-family: var(--display);
    font-weight: 400;
    line-height: 1.2;
    text-transform: uppercase;
    margin-bottom: 22px;
  }
  .floating {
    animation-name: ${floating};
    -webkit-animation-name: ${floating};
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -moz-animation-name: ${floating};
    -moz-animation-duration: 3s;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -moz-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  .logo-carousel {
    margin-bottom: 30px;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
  }
  .logo-carousel .logo-item img {
    display: block;
    margin: 0 auto;
    opacity: 0.2;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  .logo-item:hover img {
    opacity: 1;
  }
  .logo-item img {
    opacity: 0.2;
  }
  .logo-carousel.no-opacity .logo-item:hover img {
    transform: scale(1.1);
  }

  .film-links-cloud {
    margin-top: 40px;
    margin-bottom: 70px;
    max-width: 530px;
  }
  .film-links-cloud ul {
    padding: 0;
  }
  .film-links-cloud ul li {
    display: inline;
  }
  .film-links-cloud ul li a {
    font-size: 24px;
    line-height: 48px;
    font-weight: 400;
    font-family: Merriweather;
    color: #ababab;
  }
  .film-links-cloud.dark ul li a {
    color: var(--dimGray);
  }
  .film-links-cloud ul li a:hover {
    color: var(--tertiary2);
  }
  .film-links-cloud.dark ul li a:hover {
    color: var(--baseBg);
  }
  .film-links-cloud ul li a:before {
    content: '\f111';
    font-family: FontAwesome;
    font-size: 6px;
    display: inline-block;
    line-height: 1;
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 10px;
    transform: translateY(-50%);
    color: #e2e2e2;
  }
  .film-links-cloud ul li:first-child a:before {
    content: '';
    margin-left: 0px;
    margin-right: 0px;
  }
  .film-links-cloud.dark ul li a:before {
    color: var(--dimGray);
  }
`

export default Partners
