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
