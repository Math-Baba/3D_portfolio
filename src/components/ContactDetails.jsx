import { motion } from "framer-motion";
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from "../utils/motion";
import { links } from "../constants";

const ContactCard = ({ logo, name }) => (
  <div className="flex items-center gap-4 bg-primary rounded-xl shadow-lg px-5 py-4 mt-3">
    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
      <img src={logo} alt="contact" className="sm:w-10 sm:h-10 w-7 h-7 object-contain" />
    </div>
    <p className="text-xs sm:text-base">{name}</p>
  </div>
);

const Contact = () => {

    return(
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                {links.map((link, index) => (
                    <ContactCard key={`link-${index}`} index={index} {...link}/>
                ))}
            </motion.div>

            <motion.div  variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                <EarthCanvas/>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact");