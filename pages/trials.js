import styled, { css } from "styled-components"
import Layout from "../components/layouts/Layout.component"
import Section from "../components/sections/Trials/Section.component"
import { Gifts, Upload,Relax,Download, clippingPath, backgroundRemove, colorCorrection, imageOptimization, doubleLayerQa, competitivePricing } from "../components/utils/Icons"
import { FaChevronDown } from 'react-icons/fa'
import { useEffect, useRef, useState } from "react"
import Head from 'next/head'
const Trials = () => {
    return (
       <Layout route="Trials">
             <Head>
        <title>Cybery Limited | Free Trial</title>
        <meta name="Description" content="For a free trial, please sign up through the free trial page. You will get back the files in 24hours in your dashboard"></meta>
        <meta name="keywords" content="Free Trail car image editing, Free Trail real estate photo retouching"></meta>
       
        <link rel="canonical" href="https://www.cybery.ai/trials" />
        <link rel="alternate" href="https://www.cybery.ai/trials" hreflang="x-default" />
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Cybery Limited | Free Trial | Automotive Photo Editing"/>
        <meta property="og:url" content="https://www.cybery.ai/trials"/>
        <meta property="og:description" content="For a free trial, please sign up through the free trial page. You will get back the files in 24hours in your dashboard"/>
        <meta property="og:site_name" content="Cybery Limited"/>
        <meta property="og:updated_time" content="2021-07-13T16:09:42+00:00"/>
        <meta property="og:image" content="https://www.cybery.ai/images/car-image-editing.jpg"/>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
        <meta name="twitter:card" content="summary_large_image"/> 
        <meta name="twitter:title" content="Cybery Limited | Free Trial | Automotive Photo Editing"/>
        <meta name="twitter:description" content="For a free trial, please sign up through the free trial page. You will get back the files in 24hours in your dashboard"/>
        <meta name="twitter:url" content="https://www.cybery.ai/trials"/>
        <meta name="twitter:image" content="https://www.cybery.ai/images/car-image-editing.jpg"/>
        <link rel="apple-touch-icon-precomposed" href="images/apple-icon.png"/>
        <base href="https://www.cybery.ai/"></base>

      </Head>
            <Section 
                Icon={Gifts}
                bgColor="#f5f5f5"
                heading="Try Us for Free"
                description="Sign up today — no credit card required."
                btnTxt="Contact Us"
             />
             <Section 
             heading="How it works"
             description="Create your account, upload your images, define your image-editing needs and relax."
             >
                 {/* <FeatureWrapper> */}
                    {
                        Data.map(sec => {
                            return <Feature 
                            sec={2}
                            key={sec.type} 
                            {...sec} />
                        })
                    }
                 {/* </FeatureWrapper> */}
             </Section>
             <Section 
             bgColor="#f5f5f5"
             heading="Benefits of outsourced post production"
             description="Scaleable, Cost-efficient outsourcing, 24/7 support, perfect results for thousands of images / Video edits per day, and get your project done by highly trained professionals even when sleeping.
             "
             >
                 <FeatureWrapper>
                    {
                        OutSurgedImg.map(sec => {
                            return <Feature 
                            sec={3}
                            key={sec.type} 
                            {...sec} />
                        })
                    }
                 </FeatureWrapper>
             </Section>
             <Section 
             heading="Pricing FAQs"
             >
                 <FeatureWrapper>
                  {
                      AccordionData.map(acc => {
                          return <AccordionItem key={acc.name} {...acc} />
                      })
                  }
                 </FeatureWrapper>
             </Section>
             <Section 
             heading="Find the support you need"
             description="Do you need help getting started? Our team is happy to answer all your questions."
             margin="12rem 0"
        
          >
          <a href="/contact"><button class="Buttoncomponent__Btn-x3hq29-0 eXGhYp Sectioncomponent__TrBtn-y8jsf0-1 eFqkib">Contact Us</button></a>
          </Section>
         
       </Layout>
    )
}

export default Trials

const FeatureWrapper = styled.div`
max-width : 120rem;
margin : 0 auto;
margin-top: 5rem;
padding : 0rem 3rem;
`

const AccordionData = [
    {
        name : 'How much does it costs ?',
        desc : `The price depends on the kind of service you are looking for but usually image editing starts at $0.30 for basic editing, 3d starts from $25 & video starts from $80. Additional charges may increase the  price depending on your requirements. So if you need assistance please feel free to contact us.`
    },
    {
        name : 'Do you have a free trial?',
        desc : `Yes, we have. For a free trial, please sign up through the free trial page. You will get back the files in 24hours in your dashboard.         `  },
    {
        name : 'What file Formats Does Cybery Accept ?',
        desc : `Currently cybery accepts multiple files format related to the services like .raw images, 3D object model & videos.`
    },
    {
        name : 'How long does it take to get back the output/results ?',
        desc : `We usually get back with the done files within 24 hours. But depending on your requirement we can minimize the turnaround time.`
    },
    {
        name : 'How can I pay ?',
        desc : `We prefer to invoice at the end of every month to make sure the accounts don't get messy. We accept payment from most major Banks.
        `
    }
]

const OutSurgedImg = [
  
    {
        Icon : clippingPath,
        type : 'Clipping Path',
        desc : 'Clipping path is a kind of process which allows a designer to separate parts of the photo and work on specific parts of the photo. There are other options like quick selection and magic wand, and lasso tool but to get an edge to edge perfection clipping path is the best option.'
    },
    {
        Icon : backgroundRemove,
        type : 'Background Remove',
        desc : 'Background removal is an option where one can remove the background. This option allows the low budget automotive photographers to skip the cost of hiring a professional car photography studio. It also allows the professional car photographer to fix any imperfections on the background.'
    },
    {
        Icon : colorCorrection,
        type : 'Color Correction',
        desc : 'Color correction / Color matching is a very crucial option when it comes to photographing shiny cars or matching the light for real estate photography. It also comes handy when you have to shoot multiple colors at once but don’t have options to fix the light for each color.'
    },
    {
        Icon : imageOptimization,
        type : 'Image Optimization',
        desc : 'Photo optimization meaning faster loading of websites. When trying to sell a car or house on a website, product photography is the main thing a customer wishes to see. Image optimization allows you to load the photos faster without compromising the quality of photography.       '
    },

    {
        Icon : doubleLayerQa,
        type : 'Double layer QA',
        desc : 'We make sure all the files we work on goes through double quality assurance. We always try to make sure the best quality end result for our clients. Encase if you are not satisfied with the end result, we do a one time free revision. Customer satisfaction is our main priority.        '
    },

    {
        Icon : competitivePricing,
        type : 'Competitive pricing',
        desc : 'In the era of a competitive market, if the service price is not competitive there is no win-win situation. We always try to make sure to save you some cost and time. We try to provide a scalable graphics design service to you with also a very competitive price. Besides, we also believe in long term relationships.        '
    },
 
 
]

const Data = [
    {
        Icon : Upload,
        type : 'Upload',
        desc: 'Create an account, upload your images / videos with instructions. You are good to go.'
    },
    {
        Icon : Relax,
        type : 'Relax',
        desc: 'Let us worry about your post-production, deadline and quality of the project.'
    },
    {
        Icon : Download,
        type : 'Download',
        desc: 'You will be notified once the editing is done. And with a single click just download them'
    }
]

const Feature = ({ Icon,type,desc,...otherProps }) => {
    return(
        <FeatureFig {...otherProps}>
            <Icon />
            <h2 className="feature-head">
                {type}
            </h2>
            <p>
                {desc}
            </p>
        </FeatureFig>
    )
}

const AccordionItem = ({ name,desc }) => 
{
    const [isOpen,setOpen] = useState(false);
    const [height,setHeight] = useState(0);

    const contentRef = useRef(null);

    useEffect(() => {
        if(isOpen){
            setHeight(contentRef.current.scrollHeight);
        }
    },[isOpen])
    const dropDownToggler = _ => {
        setOpen(!isOpen);
    }
    
    return(<Accordion
    maxHeight={height} 
    active={isOpen}>
    <button onClick={dropDownToggler}>
        <h2>
            {name}
        </h2>
        <FaChevronDown />
    </button>
    <div className="content" ref={contentRef}>
        <p>
            {desc}
        </p>
    </div>
</Accordion>)}

const FeatureFig = styled.div`
text-align : center;
width: 33.3%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
float: left;
margin-top: 4rem;
padding : 4rem;
h2{
    font-size : 2rem;
    margin-top: 1.5rem;
    width: max-content;
}
svg{
    width: 12rem;
    height: max-content;
}
p{
    text-align: center;
    margin: 0;
    max-width: 35rem;
}

@media only screen and (max-width : 775px){
    padding : 2rem;
    p{
    text-align: center;
    margin: 0;
    max-width: 100%;
}
}

${props => props.sec === 3 && css`
    @media only screen and (max-width : 1000px){
        width : 50%;
    }
    @media only screen and (max-width : 775px){
        width : 100%;
        p{
            max-width : 100%;
        }
    }
`}

${props => props.sec === 2 && css`
    @media only screen and (max-width : 1000px){
        width : 100%;
        p{
            max-width : 100%;
        }
    }
    
`}
`

const Accordion = styled.div`
max-width: 80rem;
border-bottom : 1px solid #D0D0D0;
margin: 0 auto;
button{
    display: flex;;
    justify-content:space-between;
    align-items: center;
    width: 100%;
    border: none;
    outline: none;
    padding: 2.5rem 2rem;
    background-color: var(--baseBg);
    h2{
        font-size : 2rem;
        margin: 0;
    }
    svg{
        transition : 0.3s all;
        transform : ${props => props.active ? 'rotate(180deg)' : 'rotate(0deg)'};
        margin-left : 1rem;
    }
    @media only screen and (max-width : 680px){
        width : 100%;
        h2{
            font-size : 1.5rem;
            text-align: left;
        }
    }
}
.content{
    text-align : left;
    overflow : hidden;
    max-height: ${props => props.active ? `${props.maxHeight}px` : '0px'};
    transition : 0.3s all;
    p{
        margin: 0rem 2rem 3rem 2rem;
    }
}
&:first-child{
    border-top : 1px solid #D0D0D0;
}
`
