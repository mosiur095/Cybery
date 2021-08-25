import React from "react"
import styled from "styled-components"
import ListItem from "./ListItem"

const List = () => {
  return (
    <Container>
    <div className="section pt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="mt-8 hidden-sm"></div>
                {ServicesData.map((service, index) => (
                    <ListItem key={index} {...service} />
                ))}
            </div>
        </div>
    </div>
    </div>
    </Container>
  )
}

const ServicesData = [
    {
        alternate: false,
        title: 'Photo Editing & Retouching',

        src: '/images/services/home/photo__editing.webp',

        description:
      'We are specialized in Automobile / Vehicle Image Editing and Real estate image editing. We specifically focus on these industry to make sure the quality. We offer services like, Backgrounds remove, Color correction, enhance / exchange the floor, Shadow Creation, Detailed retouching, area / feature focused retouching, etc.',
    backgroundImage: 'images/icon-boxes/icon_bg_1.png',
    },
    {
        alternate: true,
        title: 'Video Editing & Rendering',

        src:  '/images/services/video_editing.webp',


        

        description: `Need your Automotive video / Real estate video edited?
        We will edit, cut, trim / extend, sync audio, add animation, Color Grading, Sound Design & Mixing, Motion Graphics, add Subtitles, and more to look your video stand out of the crowd.`,
       
    },
    {
        alternate: false,
        title: '3D Product Modelling & Spinning',
        src: '/images/services/3d_model.webp.webp',
        description: `Wish to describe your real estate and automotive product with maximum detail and with a 360 degree view? We have all the solution under the same roof. We are here with a team of 3D modelling experts to ensure best quality 3D modelling for your products.
        `    },

]

const Container = styled.div`
`

export default List