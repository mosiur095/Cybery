import absoluteUrl from 'next-absolute-url'
import React from 'react'
import Layout from '../components/layouts/Layout.component'
import Cover from '../components/sections/Cover'
import List from '../components/sections/Pricing/List'
import Foot from '../components/sections/Services/Foot'
import Head from 'next/head'

const Pricing = ({resp}) => {
    return (
        <Layout route="Pricing">
        <Head><link rel="apple-touch-icon-precomposed" href="images/apple-icon.png"/>
        <title>Automotive Photo Editing Pricing</title>
        <meta name="Description" content="we are able to offer you a very precise price which fits your project perfectly"></meta>
        <link rel="canonical" href="https://www.cybery.ai/pricing"/>
        <meta name="keywords" content="car photo retouching prices, real estate photo editing pricing"></meta>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Automotive Photo Editing Pricing"/>
        <meta property="og:url" content="https://www.cybery.ai/pricing"/>
        <meta property="og:description" content="For image editing services our price starts from $0.30 per image but it depends on the kind of services you are expecting. The price will vary depending on different services like Background removal, Clipping path, Retouching, Color correction, image manipulation, etc."/>
        <meta property="og:site_name" content="Cybery Limited"/>
        <meta property="og:updated_time" content="2021-07-10T16:09:42+00:00"/>
        <meta property="og:image" content="https://www.cybery.ai/images/car-image-editing.jpg"/>
        <meta name="twitter:card" content="summary_large_image"/> 
        <meta name="twitter:title" content="Automotive Photo Editing Pricing"/>
        <meta name="twitter:description" content="For image editing services our price starts from $0.30 per image but it depends on the kind of services you are expecting. The price will vary depending on different services like Background removal, Clipping path, Retouching, Color correction, image manipulation, etc."/>
        <meta name="twitter:url" content="https://www.cybery.ai/pricing"/>
        <meta name="twitter:image" content="https://www.cybery.ai/images/car-image-editing.jpg"/>
        <base href="https://www.cybery.ai/"></base>

      </Head>
            <Cover background="/images/banner/pricing.webp" big_style={false} title={'Pricing'} route={'Pricing'} />
            <List PricingData={resp}/>
            <Foot />
        </Layout>
    )
}

export default Pricing

export async function getServerSideProps({ req, res }){
    const { origin } = absoluteUrl(req, "localhost:3000");
    const resp = await (await fetch(`${origin}/api/pricing`)).json();
    return {
        props : { resp }
    }
  }