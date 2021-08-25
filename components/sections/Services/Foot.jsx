import React from "react"
import styled from "styled-components"
import Button from "../../ui/Button"

const Foot = () => {
  return (
    <Container>
      <div className='section pt-2 pb-13'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='text-center'>
                <h2 className='section-title fz-24 mb-2'>
                 It is not always possible or easy to offer a price without knowing your project.<br/> Which is why we have just put some assumpted numbers above. However, we<br/> request you  to reach out to us directly. That way we will be able to offer<br/> you a very precise price which fits your project perfectly.
                </h2>
                <div className='mt-4'></div>


               <a href="/contact"> <Button color={'#ffffff'} backgroundColor={'#da0e2b'} padding={'0 20px'} title={'Contact Us'} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
.section-title {
    font-size: 34px;
    color: var(--tertiary2);
    line-height: 1.4em;
    font-family: var(--head);
    font-weight: 400;
    font-style: normal;
    text-transform: none;
}
`

export default Foot
