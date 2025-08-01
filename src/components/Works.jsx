import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt options={{max: 45, scale: 1, speed: 450,}} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
                <div className='relative w-full h-[230px]'>
                    <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
                </div>

                <div className='absolute inset-0 flex justify-end m-3 card img_hover'>
                    <div onClick={() => 
                        window.open(source_code_link, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                            <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
                    </div>
                </div>

                <div className='mt-5'>
                        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className="relative w-80 h-20 rounded-lg shadow-lg overflow-hidden">
                    <div className="absolute mt-6 flex items-center gap-2">
                        {tags.map((tag, index) => (
                            <div key={index} className='rounded-lg px-2 py-2'>
                                <img src={tag.path} alt={tag.name} className="w-8 h-8 object-contain"/>
                            </div>
                        ))}
                    </div>
                </div>

            </Tilt>
        </motion.div>
    )
}

const Works = () => {
    return(
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} mt-4`}>Ce que j'ai pu accomplir</p>         
                <h2 className={`${styles.sectionHeadText} mt-4`}>Mes projets.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                    Créer des projets, c’est ma manière préférée d’apprendre. Que ce soit un site web, un robot programmé ou des expérimentations autour de l’intelligence artificielle, chaque réalisation représente une idée concrétisée et une étape dans mon évolution. Voici quelques-unes de mes créations personnelles et collaboratives.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project}/>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Works, "project")