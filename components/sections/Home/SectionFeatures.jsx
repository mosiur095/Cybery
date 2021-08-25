import React from 'react'
import styled from 'styled-components'
import IconBoxesLayout from '../../ui/IconBoxes'

const SectionFeatures = () => {
  return (
    <FeaturesContainer>
      <div className='section pb-8'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <hr className='mb-4'></hr>
            </div>
          </div>
          <div className='row'>
            {IconsData.map((data, index) => (
              <IconBoxesLayout key={index} {...data} />
            ))}
          </div>
        </div>
      </div>
    </FeaturesContainer>
  )
}

const IconsData = [
  {
    iconClassName: '/images/icon/image_editing.png',
    title: 'Image Editing',
    description:
      'We offer saleable photo editing services for Automotive dealers, and High-end retouch for agencies and Brands.',
    backgroundImage: 'images/icon-boxes/icon_bg_1.png',
  },
  {
    iconClassName: '/images/icon/video_editing.png',
    title: 'Video Editing',
    description: `Give your Automotive / Real estate the glamour it deserve with our video editing service. Help your customer to focus only the selling objects.`,
    backgroundImage: 'images/icon-boxes/icon_bg_2.png',
  },
  {
    iconClassName: '/images/icon/3d.png',
    title: '3D Product Modelling',
    description: `Describe your Automotive / Real estate with the maximum details with our 3D modeling service. Offer your customer a 360 view of the product when browsing online.
    `,
    backgroundImage: 'images/icon-boxes/icon_bg_1.png',
  },
]

const FeaturesContainer = styled.div``

export default SectionFeatures
