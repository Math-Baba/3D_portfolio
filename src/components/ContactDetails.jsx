import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { links } from "../constants";
import { ProfileCard } from "./canvas";

const ContactCard = ({ logo, name }) => (
  <div className="flex items-center gap-4 bg-primary rounded-xl shadow-lg px-5 py-4 mt-3">
    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
      <img
        src={logo}
        alt="contact"
        className="sm:w-10 sm:h-10 w-7 h-7 object-contain"
      />
    </div>
    <p className="text-xs sm:text-base">{name}</p>
  </div>
);

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Pour plus d'informations à mon sujet
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        {links.map((link, index) => (
          <ContactCard key={`link-${index}`} index={index} {...link} />
        ))}
        <a href="/Mathieu_Baba_CV.pdf" download>
          <button
            type="button"
            className="mt-8 bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mx-auto block"
          >
            Télécharger mon CV
          </button>
        </a>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] xl:h-auto md:h-[550px] h-[350px] flex justify-center items-center"
      >
        <ProfileCard
          style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
          name="Mathieu Baba"
          title="Etudiant en L3"
          handle="MB"
          status="Online"
          contactText="Me contacter"
          avatarUrl="/Moi.png"
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => console.log("Contact clicked")}
        />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
