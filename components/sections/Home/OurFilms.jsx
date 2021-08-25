import React from 'react'
import styled from 'styled-components'
import Film from '../../ui/Film'
import Subtitle from '../../ui/Subtitle'

const OurFilms = () => {
  return (
    <Container>
      <div className='section section-bg-5 section-cover pt-11 pb-11'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='text-center mb-7'>
                {/* <Subtitle text={'Our Best Services'} /> */}
                <h2 className='section-title mb-2'>What we Do ?</h2>
                <p className='ourfilm-description'>
                A team of creative minds are making graphics design easy for the <br></br> automotive industry and real estate industry. Check out our service at a glance. 

                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            {OurFilmsData.map((film, index) => (
              <Film key={index} {...film} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
export default OurFilms

const OurFilmsData = [
  {
    alternate: false,

    img: '/images/services/photo__editing.webp',
    title: 'Photo Editing & Retouching',
    url: 'film-detail',
    description: `We have a specialized and experienced team for photo editing & retouching who are dedicated to only Automotive photography editing and Real estate photography editing. Which makes it easy for our customer to brief their requirements. Our experts know where to remove background, retouch, color correct, or even do some image manipulation.
	`
  },
  {
    alternate: true,


    img: '/images/services/home/video_editing.webp',
    title: 'Video Editing & Rendering',
    url: 'film-detail',
    description: `We don’t do every type of video editing & rendering. If you want to edit a Youtube video, we are not the right place. But if it comes to automotive video editing / Real estate video editing, we are the best in the industry. We know where to edit, cut, trim / extend, sync audio, add animation, Color Grading, Sound Design & Mixing, Motion Graphics, add Subtitles, and more.

    `,
 
  },
  {
    alternate: false,


    img: '/images/services/home/3d_model.webp',


    title: '3D Product Modelling & Spinning',
    url: 'film-detail',
    description: `We are not the jack of the trade in this segment. At least not yet. We can’t help you build a car design or a full architectural design. However, if you are trying to turn your car or real estate photography into 3D we have a team to support that 100%. We can also support you with Car parts 3D Modelling.
	`,

  },
]

const Container = styled.div`
  background-image: url('images/background/film_bg.webp');
  .ourfilm-description {
    font-family: var(--font3);
  }
  .section-title {
    font-size: 34px;
    color: var(--tertiary2);
    line-height: 1.4em;
    font-family: var(--head);
    font-weight: 400;
    font-style: normal;
    text-transform: none;
  }
`
