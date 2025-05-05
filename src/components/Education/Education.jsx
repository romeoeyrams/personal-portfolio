import React, { useRef } from "react";
import './Education.css'
import SectionTitle from "../SectionTitle/SectionTitle";
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';

function Education() {
  const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: '',
        offset: ["0 1", "0.6 1"]
    });
  return (
    <div className="education">
      <motion.div className="container"
       initial={{ opacity: 0, translateX: "-100%" }}
       whileInView={{ opacity: 1, translateX: 1 }}
       transition={{ duration: 2 }}
      >
        
          <SectionTitle heading="Education" subheading="" />
    </motion.div>

      <motion.div ref={ref} className="container"
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
    }}
      >
        <div class="timeline-items">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-data">2013 -2017</div>
            <div class="timeline-content">
              <h3>Ghana Technology University College</h3>
              <p>
                
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-data">2009 - 2013</div>
            <div class="timeline-content">
              <h3>St. Mary's Seminary Senior High School</h3>
              <p>
                
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-data">2006 - 2009</div>
            <div class="timeline-content">
              <h3>Sonrise Christian Int School(JHS)</h3>
              <p>
                
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-data">2001 - 2006</div>
            <div class="timeline-content">
              <h3>Sonrise Christian Int School(Primary)</h3>
              <p>
               
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Education;
