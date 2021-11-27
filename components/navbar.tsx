import { SimpleGrid } from '@chakra-ui/react'
import styles from '../styles/nav.module.css'

const Navbar = () => {
    return (
        <nav>
            <SimpleGrid columns={3} > 
                <div className={styles.logo}>
                  <strong>Hackarmour</strong>
                </div>

                <SimpleGrid columns={3} className={styles.links}>
                    <div>GitHub</div>
                    <div>Community</div>
                    <div>About</div>
                </SimpleGrid>

                <div className={styles.discord}>discord</div>
            </SimpleGrid>
        </nav>
    )
}

export default Navbar