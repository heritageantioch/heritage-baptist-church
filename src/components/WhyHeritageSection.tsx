import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import churchFamily from "@/assets/church-family.jpg";

const WhyHeritageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-heritage" className="py-24 md:py-32 bg-heritage-cream">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={churchFamily}
                alt="Family in front of Heritage Baptist Church &amp; Academy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-heritage-gold rounded-sm -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.25em] uppercase text-heritage-gold mb-4">
              Our Identity
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-8">
              Why "Heritage"?
            </h2>

            <div className="space-y-5 font-body text-base leading-relaxed text-muted-foreground">
              <p>
                A heritage is an inheritance. Here at Heritage Baptist Church we believe that the 
                best inheritance a person could ever possess is a relationship with God 
                <span className="italic"> (Psalm 16:5–6)</span>.
              </p>
              <p>
                Deep down we all realize that we need something more than what the physical world 
                around us offers – money doesn't satisfy; our personal plans and pursuits don't fill 
                the void within; and even the relationships that we hold on to so dearly are 
                susceptible to the separation of death.
              </p>
              <p>
                God tells us that He created us in His image <span className="italic">(Genesis 1:27)</span>. 
                We were made to display how great He is and to share in the greatest blessing possible – 
                a joyful, satisfying, & fruitful relationship with Him.
              </p>
              <p className="font-medium text-foreground">
                This inheritance of eternal life is real. It comes only by faith in Christ as He is 
                revealed to us in Scripture. This is the greatest inheritance and this is what we are 
                all about at Heritage!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyHeritageSection;
