import { TagSphere } from "react-tag-sphere";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Orb } from "./canvas";

const logos = technologies.map((tech) => (
  <img key={tech.name} src={tech.icon} alt={tech.name} width={40} height={40} loading="lazy" />
));

const TechSphere = () => {
  return (
    <div className="relative w-full flex justify-center items-center h-[500px] sm:h-[600px] overflow-hidden">
      {/* Orb en fond */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Sphere par-dessus */}
      <div className="z-10">
        <TagSphere tags={logos} radius={200} />
      </div>
    </div>
  );
};

export default SectionWrapper(TechSphere, "");
