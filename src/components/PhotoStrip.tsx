import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import churchFamily from "@/assets/church-family.jpg";
import coffeeFellowship from "@/assets/coffee-fellowship.jpg";
import congregationPsalm from "@/assets/congregation-psalm.jpg";

const photos = [
  { src: churchFamily, alt: "Family in front of Heritage Baptist Church" },
  { src: coffeeFellowship, alt: "Welcome area with coffee and fellowship" },
  { src: congregationPsalm, alt: "Congregation worshipping together" },
];

const PhotoStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-0 overflow-hidden" ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.alt}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="aspect-[4/3] overflow-hidden"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoStrip;
