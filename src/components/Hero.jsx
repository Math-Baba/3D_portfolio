import { styles } from "../styles";
import { AvatarCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`px-4 sm:px-8 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 transform origin-top-left lg:scale-[0.6] lg:ml-16`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} text-white text-4xl sm:text-5xl`}
          >
            Salut, je m'appelle{" "}
            <span className="text-[#915EFF]">Mathieu &nbsp;</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Etudiant autodidacte, &nbsp;
            <br className="block hidden" />
             j'apprends en codant <br className="sm:block hidden" />
            des projets
          </p>
        </div>
      </div>

      <AvatarCanvas />
    </section>
  );
};

export default Hero;
