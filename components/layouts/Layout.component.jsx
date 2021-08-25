import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const Layout = ({route,children}) => (
    <>
        <Head>
           
            <link rel="icon" href="/images/favicon.png" />
   

        </Head>
        <Main>
            {children}
        </Main>
    </>
)

export default Layout


const Main = styled.main`
position: relative;
`