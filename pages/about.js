import React from 'react'
import Layout from '../components/layouts/Layout.component'
import WeAreTheBest from '../components/sections/About/WeAreTheBest'
import Cover from '../components/sections/Cover'
import absoluteUrl from 'next-absolute-url'
import Head from 'next/head'
const About = ({resp}) => {
    
    return (
      <Layout route="About">
           <Head>
        <title>Cybery Limited | Global Service Provider | About Us</title>
        <meta name="Description" content="At Cybery Limited we believe in excellence and the best. We have a team of highly skilled and dedicated designers to provide best quality and industry-standard output"></meta>

      
        <link rel="canonical" href="https://www.cybery.ai/about"/>
        <meta name="keywords" content="Cybery Limited, Most popular image editing service"></meta>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Global car image editing service provider"/>
        <meta property="og:url" content="https://www.cybery.ai/about"/>
        <meta property="og:description" content="At Cybery Limited we believe in excellence and the best. We have a team of highly skilled and dedicated designers to provide best quality and industry-standard output"/>
        <meta property="og:site_name" content="Cybery Limited"/>
        <meta property="og:updated_time" content="2021-07-12T16:09:42+00:00"/>
        <meta property="og:image" content="https://www.cybery.ai/images/car-image-editing.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/> 
        <meta name="twitter:title" content="Global car image editing service provider"/>
        <meta name="twitter:description" content="At Cybery Limited we believe in excellence and the best. We have a team of highly skilled and dedicated designers to provide best quality and industry-standard output"/>
        <meta name="twitter:url" content="https://www.cybery.ai/about"/>
        <meta name="twitter:image" content="https://www.cybery.ai/images/car-image-editing.jpg"/>
        <base href="https://www.cybery.ai/"></base>


      </Head>
           <Cover background="/images/banner/about_us.webp" big_style={true} title={'About Us'} route={'About 02'} />
           <WeAreTheBest team={resp}/>
      </Layout>
    )
}

export default About

export async function getServerSideProps({ req, res }){
  const { origin } = absoluteUrl(req, "localhost:5000");
  const resp = await (await fetch(`${origin}/api/team`)).json();
  return {
      props : { resp }
  }
}
