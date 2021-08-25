import React from 'react'
import styled from 'styled-components'
import FooterWidgetTitle from "../ui/FooterWidgetTitle"
import FooterColumnLinks from "../ui/FooterColumnLinks"
import CopyrightLayout from "../ui/CopyrightFooter"
const Footer = () => (
   <LayoutFooter>
   <footer className="footer pb-1">
   <div className="container">
       <div className="row">
           <div className="col-md-3">
               <a href="/" id="footer_logo">
                   <img className="footer-logo-image" src="/images/cybery-logo-white.png" alt="Cybery Logo" />
               </a>
               <div className="footer-social">
                   <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook" target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/cybery.global'><i className="fa fa-facebook"></i></a>
                   <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"  target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/company/cybery/'><i className="fa fa-linkedin"></i></a>
                   <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest" target="_blank" rel="noopener noreferrer" href='https://www.pinterest.com/cyberyglobal1/'><i className="fa fa-pinterest"></i></a>
                   <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram" href="https://www.instagram.com/cybery.ai/"><i className="fa fa-instagram"></i></a>
               </div>
           </div>
           {FooterColLinks.map((item, index) => (
               <FooterColumnLinks key={index} {...item} />
           ))}
           <div className="col-md-3 mb-4">
               <div className="widget">
                   <FooterWidgetTitle title={'Connect With Us'} />
                   <div className="textwidget">
                       <p>Mahfuza Tower - 7th floor <br />36/37 Probal Housing, Ring Road <br/> Dhaka -1207 </p>
                       <p>P: (+88) 0255020202</p>
                       <p>E: <a href="mailto:hello@cybery.ai">hello@cybery.ai</a></p>
                   </div>
                   <div className="footer-gmap">
                       {/* <a href="#gmap-popup" className="open-popup-link">Google Map</a> */}
                       <a target="_blank" href="https://www.google.com/maps/place/CYBERY/@23.7688394,90.3552715,16z/data=!4m19!1m13!4m12!1m4!2m2!1d90.3588734!2d23.7661639!4e1!1m6!1m2!1s0x3755c1d2c728227f:0x396eed84365d0069!2scybery.ai!2m2!1d90.3607921!2d23.7732398!3m4!1s0x3755c1d2c728227f:0x396eed84365d0069!8m2!3d23.7732398!4d90.3607921" className="open-popup-link" rel="noopener">Google Map</a>
                   </div>
               </div>
           </div>
       </div>
   </div>
</footer>
<CopyrightLayout />
   
   </LayoutFooter>
)

export default Footer

const FooterColLinks = [
    {
        title: 'Our Services',
        arr: [
            {
                linkName: 'Video Editing',
                url: '/services'
            },
            {
                linkName: 'Image Editing',
                url: '/services'
            },
            {
                linkName: '3D Product Visualization',
                url: '/services'
            },
        ]
    },
    {
        title: 'Quick Links',
        arr: [
        
            {
                linkName: 'Pricing',
                url: '/pricing'
            },
            {
                linkName: 'Contact Us',
                url: '/contact'
            },
            {
                linkName: 'FAQs',
                url: '/trials'
            },
        ]
    }
   
]


const LayoutFooter = styled.footer`
.footer {
    font-family: var(--font3);
	display: block;
    width: 100%;
    padding-top: 80px;
    padding-bottom: 40px;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
	background-color: var(--tertiary2);
    color: var(--gray67);
}
.footer .row > .col-md-4,
.footer .row > .col-md-2 {
	margin-bottom: 30px;
}
.footer a {
    color: var(--gray67);
}
.footer a:hover {
    color: var(--primary);
}
.footer .footer-social {
    margin-top: 30px;
	margin-bottom: 50px;
}
.footer .footer-social a {
	position: relative;
    display: inline-block;
    width: 48px;
    height: 48px;
    line-height: 44px;
    text-align: center;
    border: 2px solid #585858;
    border-radius: 24px;
    margin-right: 9px;
    font-size: 16px;
    color: var(--gray67);
}
.footer .footer-social a:hover {
    background-color: var(--primary);
    border-color: var(--primary);
    color: var(--baseBg);
}
.footer .footer-social .tooltip.top .tooltip-arrow {
    border-top-color: var(--primary);
}
.footer .footer-social .tooltip-inner {
    background-color: var(--primary);
}

.footer .textwidget p {
    padding: 0;
    margin: 0 0 15px 0;
}
.footer .footer-gmap {
    margin-top: 35px;
}
.footer .footer-gmap a {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 400;
}
.footer .footer-gmap a:before {
    content: '\f041';
    font-family: FontAwesome;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 36px;
    text-align: center;
    color: var(--gray67);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    border: 2px solid #595959;
    margin-right: 10px;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
`
