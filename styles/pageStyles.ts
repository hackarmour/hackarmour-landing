import styled from '@emotion/styled'

export const Hero = styled.main`
  width: 100%;
  padding: 2.5%;
  background-color: rgba(0, 0, 0, .3);
  @media all and (max-width: 62rem) {
    background-color: transparent;
  }
`

export const Break = styled.br`
  @media all and (max-width: 62rem) {
    display: none;
  }
`

export const Container = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 5vh;
  @media all and (max-width: 62rem) {
    text-align: center;
    width: 100%;
  }
`

export const Heading = styled.h1`
  font-size: 4.5rem;
  @media all and (max-width: 62rem) {
    font-size: 3rem;
  }
`

export const Description = styled.p`
  font-size: 1.9rem;
  color: #e71235;
  @media all and (max-width: 62rem) {
    font-size: 1.3rem;
  }
`