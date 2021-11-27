import { SimpleGrid } from '@chakra-ui/react'
import styles from '../styles/nav.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <SimpleGrid columns={3} > 
                <div className={styles.logo}>
                <img src="./logo.svg" alt="logo" />
                  <strong>
                      HackArmour
                  </strong>
                </div>

                <SimpleGrid columns={3} spacing={10} className={`${styles.links} text-med`}>
                    <a href="https://github.com/hackarmour">GitHub</a>
                    <a>Community</a>
                    <a>About</a>
                </SimpleGrid>

                <a href="https://discord.gg/xBq4QSmjMp" className={`${styles.discord} text-med`}>
                    discord
                </a>
            </SimpleGrid>
        </nav>
    )
}

export default Navbar