import React from 'react'
import styled from 'styled-components'

const Map = () => {
    return (
        <GoogleMap>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.795903231878!2d90.35527152503798!3d23.76883938832093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1d2c728227f%3A0x396eed84365d0069!2sCYBERY!5e0!3m2!1sen!2sbd!4v1622704389478!5m2!1sen!2sbd" 
            width={600} height={450} 
            frameBorder={0} 
            style={{border: '0'}} 
            allowFullScreen aria-hidden="false" tabIndex={0} />
        </GoogleMap>
    )
}


export default Map

const GoogleMap = styled.div`
max-width : 120rem;
margin: 0 auto;
margin-bottom : 10rem;
iframe{
    padding : 0 3rem;
}
`