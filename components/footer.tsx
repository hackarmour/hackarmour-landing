import styled from '@emotion/styled'

const FooterStyle = styled.div`
    align-items: center;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
`

const Icon = styled.img`
    margin: .5rem;
    width: 40px;
    height: 40px;
`

const Footer = () => {
    return (
        <div id="contact" style={{ textAlign: 'center', width: '100%', padding: 2.5 + 'rem' }}>
            <FooterStyle className="text">
                <br />
                <a href="https://twitter.com/thehackarmour"><Icon src="./twitter.svg" alt="twitter" /></a>
                <a href="https://github.com/hackarmour"><Icon src="./github.svg" alt="github" /></a>
                <a href="https://www.linkedin.com/company/hackarmour"><Icon src="./linkedin.svg" alt="linkedin" /></a>
            </FooterStyle>
            <br />
            <a className="bold-fira" href="mailto:staff@hackarmour.com">staff@hackarmour.com</a>
        </div>
    )
}

export default Footer