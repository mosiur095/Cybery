import React from 'react'
import Layout from '../components/layouts/Layout.component'
import Cover from '../components/sections/Cover'
import Foot from '../components/sections/Services/Foot'
import List from '../components/sections/Services/List'
import Head from 'next/head'
const Services = () => {
    return (
        <Layout route="Services">
                <Head>
        <title>Cybery Limited | Service</title>
        <meta name="Description" content="We offer services like Backgrounds removal, Color correction, exchange the floor, Shadow Creation, Detailed retouching, area / feature-focused retouching, etc"></meta>
        <link rel="canonical" href="https://www.cybery.ai/services" />
        <link rel="alternate" href="https://www.cybery.ai/services" hreflang="x-default" />
        <meta name="keywords" content="Cybery Limited, Automotive Background, Car Transparent Background, Automotive image enhancement service, 
        Car photo enhancement services, Automotive dealer Image Solution, Automotive dealer image editing, Automotive Photo retouching service, Car image retouching service,
        Car photo fix service, Vehicles background replacement, Vehicles color correction service, Vehicles shadow making, Vehicles enhancement service"></meta>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Cybery Limited | Service"/>
        <meta property="og:url" content="https://www.cybery.ai/services"/>
        <meta property="og:description" content="Cybery Limited provides different types of services. Such as: Automotive Background, Car Transparent Background, Automotive image enhancement service, 
        Car photo enhancement services, Automotive dealer Image Solution, Automotive dealer image editing, Automotive Photo retouching service, Car image retouching service,
        Car photo fix service, Vehicles background replacement, Vehicles color correction service, Vehicles shadow making, Vehicles enhancement service "/>
        <meta property="og:site_name" content="Cybery Limited"/>
        <meta property="og:updated_time" content="2021-07-24T16:09:42+00:00"/>
        <meta property="og:image" content="https://www.cybery.ai/images/car-image-editing.jpg"/>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"></meta>

      </Head>
            <Cover background="/images/banner/service-banner.jpg" big_style={false} title={'Services'} route={'Our Services 02'} />
            <List />
     
        </Layout>
    )
}

export default Services