import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from  '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className='xs:w-[250px] w-full' tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={450}>
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                    <img src={icon} alt={title} className='w-16 h-16 object-contain '/>
                    <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return(
        <>
            <motion.div variants={textVariant()} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                <p className={`${styles.sectionSubText} mt-4`}>Introduction</p>         
                <h2 className={`${styles.sectionHeadText} mt-8`}>Overview</h2>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-8'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis magnam ducimus voluptatem similique quia ipsa harum nesciunt vitae sunt atque, maiores doloremque, dolor iure obcaecati assumenda, ipsum cumque veritatis impedit?
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'> 
                {services.map((service, index) => 
                    <ServiceCard key={service.title} index = {index} {...service}/>
                )}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about")