import React from "react"
import styled from "styled-components"
import Button from "../../ui/Button"
import SectionTitle from "../../ui/SectionTitle"
import BottomCarousel from "./BottomCarousel"
import MeetOurTeam from "./MeetOurTeam"
import ServiceList from "./ServiceList"
import TopCarousel from "./TopCarousel.component"

const WeAreTheBest = ({team}) => {
  return (
    <Container>
      <TopCarousel />
      <div className='section pb-18'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <div className='text-center'>
              <img src='images/film_10.webp' alt='img' />
              </div>
            </div>
            <div className='col-md-4 col-sm-12'>
              <div className='text-center-xs'>
                <div className='mt-5'></div>
                <SectionTitle text={'We Are The Best'} className="fz40" />
                <p className="p">
                  We have different teams for different tasks. We divided the teams skillswise to 
                  make sure everyone is best at what they do. To be more assured we have a double
                   layer quality checking process which ensures the quality of our work every time.
                </p>
                <div className='mt-4'></div>
                <Button title={"HIRE US NOW"} />
                <div className='mb-10'></div>
              </div>
            </div>
            <div className='col-sm-2'></div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='mt-3'></div>
              <div className='film-our-services-list mw-560-r'>
                <div className='big-title'>
                  <a href='/services'>Our Services</a>
                </div>
                <div className='items'>
                  {ServicesData.map((service, index) => (
                    <ServiceList key={index} {...service} />
                  ))}
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='image-shadow'>
                <img src='images/services/our_services.webp' alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MeetOurTeam team={team}/>
      <BottomCarousel />
    </Container>
  )
}

const ServicesData = [
  {
    number: "01",
    title: "Image editing",
    content:
      "Our team is very capable to provide industry standard photo editing services for Automotive and Real-estate industries. If it’s a background removal, creating clipping path, product selection separation, color correction or even high-end retouching our team has all covered.",
  },
  {
    number: "02",
    title: "Video Editing",
    content:
      "If you want your Automotive video / Real estate video to stand out of the crowd, our tea is here to help. We will edit, cut, trim / extend, sync audio, add animation, Color Grading, Sound Design & Mixing, Motion Graphics, add Subtitles, and more to make your video meet industry standards.",
  },
  {
    number: "03",
    title: "3D Product Visualization",
    content:
      "Our 3D team is best at telling a story in detail. They don’t miss any details when working on your Automotive advertising or Real-estate advertising. Our 3D modelling and rendering team knows how to describe a product very well.",
  },
]

const Container = styled.div`
  background-image: url("../images/background/bg_13.png");
  background-position: center;
  background-repeat: no-repeat;

  .p {
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

  .film-our-services-list .big-title {
    font-family: var(--head);
    font-size: 40px;
    font-weight: 400;
    color: var(--tertiary2);
  }
  .film-our-services-list .big-title a {
    font-family: var(--head);
    font-size: 40px;
    font-weight: 400;
    color: var(--tertiary2);
    position: relative;
  }
  .film-our-services-list .big-title a:hover {
    color: var(--primary);
  }
  .film-our-services-list .big-title a:after {
    position: absolute;
    right: -130px;
    top: 50%;
    content: "\f30f";
    font-family: var(--icon);
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 36px;
    font-size: 18px;
    font-weight: 400;
    color: var(--primary);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    display: inline-block;
    border: 2px solid var(--gray94);
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    transform: translateY(-50%);
  }
  .film-our-services-list .big-title a:hover:after {
    border-color: var(--primary);
    background-color: var(--primary);
    color: var(--baseBg);
  }

  .image-shadow {
    display: inline-block;
    background-color: var(--gray94);
  }

  .image-shadow,
  .image-shadow img {
    max-width: 100%;
    vertical-align: top;
  }

  .image-shadow img {
    box-shadow: 0 10px 20px rgba(0,0,0,.1);
    transform: translate(40px,60px);
}
`

export default WeAreTheBest
