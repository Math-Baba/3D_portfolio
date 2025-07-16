import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

// Applique une animation et un style commun à toutes les sections
export const SectionWrapper = ( Component, idName) => 
    // HOC (Higher-Order Component)
    function HOC(){
        return (
            <motion.section 
            // Animation en cascade des enfants 
            variants={staggerContainer()} 
            initial="hidden" // Etat initial
            whileInView="show" // Quand l'élément entre dans la vue
            viewport={{ once: true, amount: 0.25 }}  // Animation déclenché
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className='="hash-span' id={idName}>
                    &nbsp;
                </span>
                {/* Composant passé en paramètre */}
                <Component/>
            </motion.section>
        )
    }

export default SectionWrapper