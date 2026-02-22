import React, { useState } from "react";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion';
import { images } from "../constants";

const Galerie = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="px-4 py-12">
      <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} mt-4`}>Quelques moments forts</p>         
                <h2 className={`${styles.sectionHeadText} mt-4`}>La galerie.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                    J'accorde beaucoup d'importance aux expériences vécues,aux échanges, aux rencontres et au partage. 
                    Cette galerie rassemble des photos de divers concours et activités auxquels j'ai participé. 
                    Plus que de simples souvenirs, ces images témoignent des défis relevés et des efforts fournis pour atteindre un objectif.
                </motion.p>
            </div>
      
      <div className="flex flex-wrap justify-center mt-10 gap-4">
        {images.map((img, index) => (
          <div 
            key={img.id || index} 
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image à sa taille naturelle */}
            <img
              src={img.src}
              alt={img.description}
              className="rounded-xl max-h-[300px] object-contain"
              loading="lazy"
              decoding="async"
            />
            
            {/* Overlay centré */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-xl">
                <div className="text-center p-4 max-w-[90%]">
                  <p className="text-white text-sm mt-1 text-secondary">{img.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Galerie, "galerie");