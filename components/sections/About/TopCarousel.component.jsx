import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const TopCarousel = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
       <CarouselContainer>
           <Carousel
            autoPlay={false}
            autoPlaySpeed={3000}
            swipeable={false}
            draggable={false}
            showDots={false}
            arrows={false}
            partialVisible={false}
            keyBoardControl={true}
            ssr={true} 
            responsive={responsive}>
                <CarouselItem />
                <CarouselItem />
           </Carousel>
       </CarouselContainer>
    )
}

export default TopCarousel

const CarouselItem = () => {
    return(
        <Item>
            <h4>
                A Creative Studio
            </h4>
            <p>
                At Cybery we believe in excellence and the best. We have a team of highly skilled and dedicated graphics designers to provide best quality and industry standard output.		
            </p>
           
        </Item>
    )
}

const CarouselContainer = styled.div`
max-width : 70rem;
margin : 8rem auto;
`

const Item = styled.figure`
padding: 0;
margin: 0;
text-align: center;
margin: 0 2rem;
h4{
    text-transform : uppercase;
    letter-spacing : 5px;
    font-family : var(--display);
    font-size : 2.5rem;
}
p{
    font-family : var(--font3);
    font-style : oblique;
    margin-top : 4rem;
}
h5{
    font-family : var(--display);
    text-transform : uppercase;
    letter-spacing : 2px;
    margin-top : 5rem;
    span{
        &:last-child{
            font-weight : 100;            
        }
    }
}
`