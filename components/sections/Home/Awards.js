import React from "react"
import styled from "styled-components"
import AwardsIconBox from "../../ui/AwardsIconBox"
import Subtitle from "../../ui/Subtitle"
import Image from 'next/image';

const Awards = () => {
  return (
    <Container>
      <div className='section section-bg-7 section-cover pt-5 pb-5'>
        <div className='container-fluid'>
          <Image 
          className="image"
          quality={100}
          src="/images/background/bg_7.png" 
          layout="fill" 
          alt="Black Background" />
          <div className='row mr-10 ml-10'>
            <div  className='col-md-offset-1 col-md-3 col-sm-12 mt-15'>
              <Subtitle text={''} />
              <h2 className='section-title small fz-40 white mb-2'>
                Cybery Limited Make sure a smooth journey for file transfer
              </h2>
              <p className='gray'>
                Take advantage of our file transfer system to maintain and track 
                the files you send to us and receive after editing.
              </p>
            </div>
            <div className='col-md-offset-1 col-md-6 col-sm-12 pull-left'>
            
            
                <div className='logo-item pull-right'>
                  <img src='/images/cybery_file_manager.webp' alt='Cybery File Manager' />
                </div>
               

             
            </div>
          </div>
        </div>
      </div>
    </Container>
  ) 
}

const AwardsData = [
  {
    title: "06 Awards in 2014/2015.",
    description: "These awards are both national and international in 2014/2015"
  },
  {
    title: "04 Awards in 2016",
    description: "These awards are both national and international in 2016"
  },
]

const Container = styled.div`
position: relative;
.gray {
  font-family: var(--font3);
}
.section-title.small {
	font-size: 24px;
  line-height: 40px;
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
.sub-title {
  font-size: 14px;
  letter-spacing: .1em;
  font-family: var(--display);
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: 22px;
}
.section {
  position: relative;
  width: 100%;
  z-index: 1;
}
.section-cover {
	background-repeat: no-repeat;
	background-size: cover;
}

.logo-carousel {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  & > * {
    margin-right: 20px;
  }
}
.logo-carousel .logo-item img {
	display: block;
    margin: 0 auto;
    opacity: .2;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
.logo-carousel .logo-item:hover img {
    opacity: 1;
}
.logo-carousel.no-opacity .logo-item img {
	opacity: 1;
}
.logo-carousel.no-opacity .logo-item:hover img {
    transform: scale(1.1);
}

`

export default Awards
