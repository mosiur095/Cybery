import Layout from '../components/layouts/Layout.component'
import Awards from '../components/sections/Home/Awards'
import Newsletter from '../components/sections/Blog/Newsletter'
import Partners from '../components/sections/Home/Partners'
import SectionFeatures from '../components/sections/Home/SectionFeatures'
import SectionWorkWithEstablished from '../components/sections/Home/SectionWorkWithEstablished'
import OurFilms from "../components/sections/Home/OurFilms"
import MeetOurTeam from '../components/sections/Home/MeetOurTeam'
import absoluteUrl from 'next-absolute-url'
import CarouselHead from '../components/sections/Home/CarouselHead'
import { useState } from 'react';
import Head from 'next/head'

export default function Home({ resp }) {
  return (
    <Layout route="Home">
   <Head>
   
        <title>Cybery Limited | Car Image Editing | Background Removal</title>

        <meta name="Description" content="Cybery Limited is an Automotive and Real estate industry focused High-End Media production company that offers Car Image Editing, Video Editing, 3D Modelling and more. "></meta>
        <meta name="msvalidate.01" content="9CF7081F25AE684A1AB2E98B0FF4E094" />

        <meta name="keywords" content="Cybery Limited, car image editing, professional automotive photo editing, real estate photo retouching, best car photo editing company"></meta>
        <link rel="canonical" href="https://www.cybery.ai/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Cybery Limited | Car Image Editing | Background Removal"/>
        <meta property="og:url" content="https://www.cybery.ai/"/>
        <meta property="og:description" content="Cybery Limited is an Automotive and Real estate industry focused High-End Media production company that offers Photo Editing, Video Editing, 3D Modelling, Packaging design, UX / UI, and more. We work with established agencies, brands, and organizations, as well as young talents and startups."/>
        <meta property="og:site_name" content="Cybery Limited"/>
        <meta property="og:updated_time" content="2021-07-01T16:09:42+00:00"/>
        <meta property="og:image" content="https://www.cybery.ai/images/car-image-editing.jpg"/>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>
        <meta name="twitter:card" content="summary_large_image"/> 
        <meta name="twitter:title" content="Cybery Limited | Car Image Editing | Background Removal"/>
        <meta name="twitter:description" content="Cybery Limited is an Automotive and Real estate industry focused High-End Media production company that offers Photo Editing, Video Editing, 3D Modelling, Packaging design, UX / UI, and more. We work with established agencies, brands, and organizations, as well as young talents and startups."/>
        <meta name="twitter:url" content="https://www.cybery.ai/"/>
        <meta name="twitter:image" content="https://www.cybery.ai/images/car-image-editing.jpg"/>
        <link rel="apple-touch-icon-precomposed" href="images/apple-icon.png"/>
        <base href="https://www.cybery.ai/"></base>

      



      </Head>
      

      <CarouselHead />
      <SectionWorkWithEstablished />  
      <SectionFeatures />
      <Awards />
      <OurFilms />
      <MeetOurTeam team={resp}/>
      <Partners />
      <Newsletter />
    </Layout>
  )
}

export async function getServerSideProps({ req, res }){
  const { origin } = absoluteUrl(req, "localhost:5000");
  const resp = await (await fetch(`${origin}/api/team`)).json();
  return {
      props : { resp }
  }
}
