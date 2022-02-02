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
  /*color: #ff143b;*/
	color: #576a99;
  @media all and (max-width: 62rem) {
    font-size: 1.3rem;
  }
`

//  Content styles [left aligned headings and paras]

export const Contents = styled.main`
  width: 80%;
  padding: 2%;
  margin: auto;
  @media all and (max-width: 62rem) {
    width: 100%;
    padding: 3%;
    margin-top: 2.5rem;
  }
`

export const Content = styled.div`
  margin-top: 2rem;
`

export const Content_Heading = styled.h1`
  font-size: 3rem;
  @media all and (max-width: 62rem) {
    font-size: 2.3rem;
  }
`

export const Content_Description = styled.p`
  font-size: 1.1rem;
`

export const DisplayMobile = styled.div`
  display: none;
  @media all and (max-width: 800px) {
    display: inline-block;
  }
`

export const DisplayDesktop = styled.div`
  display: inline-block;
  @media all and (max-width: 800px) {
    display: none;
  }
`
