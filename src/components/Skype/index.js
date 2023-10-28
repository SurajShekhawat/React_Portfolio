import React from 'react'
import styled from 'styled-components'

const SkypeButton = styled.button`
position: absolute;
display: flex;
right: 10px;
bottom: 0;
z-index: 9999;
`

const Skype = () => {
  return (
    <>
    <SkypeButton>
    <a href="skype:live:.cid.5b7c9069e1e84a59?call">
      <img src="https://drive.google.com/uc?export=view&id=1Rhl-O3JI-_eabfTXTgbqFA2B24dZekW9" alt="Skype" width={80}/>
      </a>
      </SkypeButton>
    </>
  )
}

export default Skype