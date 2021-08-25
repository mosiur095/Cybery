import { AnimatePresence } from 'framer-motion'
import React, { useContext } from 'react'
import Layout from '../components/layouts/Layout.component'
import Form from '../components/sections/Contact/Form'
import Map from '../components/sections/Contact/Map'
import Cover from '../components/sections/Cover'
import Toast from '../components/ui/Toast.component'
import { ToastContext } from '../components/utils/ToastState'
import Head from 'next/head'

const Contact = () => {
    const { showToast,message } = useContext(ToastContext);

    const ToastVariants = {
        from : {
          opacity : 0
        },
        to : {
            opacity : 1,
            transition : {
                duration : 0.0
            } 
        },
        exit : {
            opacity : 0,
            transition : {
                duration : 0.3
            } 
        }
      }

    return (
        <Layout route="Contact Us">
                <Head>
        <title>Cybery Limited | Contact</title>
        <meta name="Description" content="Feel free to contact with us at any time"></meta>
        <link rel="canonical" href="https://www.cybery.ai/contact" />
        <link rel="alternate" href="https://www.cybery.ai/contact" hreflang="x-default" />
        <meta name="twitter:creator" content="@CyberyLimited"></meta>
        <meta name="keywords" content="Contact With Us"></meta>

      </Head>
        <Cover background="/images/banner/contact_us.webp" big_style={false} title={'Contact Us'} route={'Contact'} />
        <Form />
        <Map />
        <AnimatePresence>
            {
                showToast &&  message && <Toast 
                variants={ToastVariants}
                initial={"from"}
                animate={"to"}
                exit="exit"
                text={message}/>
            }
        </AnimatePresence>
        </Layout>
    )
}

export default Contact

