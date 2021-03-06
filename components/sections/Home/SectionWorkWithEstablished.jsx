import React from 'react'
import styled from 'styled-components'

const SectionWorkWithEstablished = () => {
  return (
    <Container>
      <div className='section pt-8 pb-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='film-single-testimonial'>
                <div className='item'>
                  <div className='text'>
                    Cybery Limited is an Automotive and Real estate industry focused
                    High-End Media production company that offers Photo Editing,
                    Video Editing, 3D Modelling, Packaging design, UX / UI, and
                    more. We work with established agencies, brands, and
                    organizations, as well as young talents and startups.
                  </div>

                  <div className='info'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SectionWorkWithEstablished

const Container = styled.div`
  .section {
    position: relative;
    width: 100%;
    z-index: 1;
  }
  .film-single-testimonial {
    margin-bottom: 0;
    width: 100%;
    outline: 0;
  }
  .film-single-testimonial .item {
    width: 100%;
    text-align: center;
    outline: 0;
    z-index: 98;
  }
  .film-single-testimonial .item .photo {
    height: auto;
    display: inline-block;
    margin: 0 0 55px 0;
  }
  .film-single-testimonial .item .photo img {
    max-width: 100%;
    height: auto;
  }
  .film-single-testimonial .item .text {
    width: 80%;
    max-width: 950px;
    margin: 0 auto;
    font-family: var(--head);
    font-size: 24px;
    font-style: italic;
    letter-spacing: 0;
    line-height: 2;
    color: var(--tertiary);
  }
  .film-single-testimonial .item .sign {
    margin-top: 55px;
  }
  .film-single-testimonial .item .info {
    margin-top: 30px;
    display: inline-block;
  }
  .film-single-testimonial .item .info .author {
    display: inline-block;
    margin: 0 10px;
    text-align: left;
    font-family: var(--display);
  }
  .film-single-testimonial .item .info .author .name,
  .film-single-testimonial .item .info .author .tagline {
    display: inline-block;
    letter-spacing: 0.05em;
  }
  .film-single-testimonial .item .info .author .name {
    font-size: 14px;
    text-transform: uppercase;
    color: var(--dimGray);
    font-weight: 700;
  }
  .film-single-testimonial .item .info .author .tagline {
    font-size: 14px;
    color: var(--gray80);
  }
  .film-single-testimonial .item .info .author .tagline:before {
    content: '/';
    margin-left: 8px;
    margin-right: 8px;
  }
  .film-single-testimonial.small .item .photo {
    height: auto;
    margin-bottom: 40px;
  }
  .film-single-testimonial.small .item .text {
    font-size: 16px;
    color: var(--dimGray);
  }
`
