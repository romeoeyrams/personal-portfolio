import React,{useRef} from 'react'
import { MdAnalytics, MdCode, MdDraw } from 'react-icons/md';
import SectionTitle from '../SectionTitle/SectionTitle'
import ServicesItems from '../ServicesItems/ServicesItems'
import { motion } from "framer-motion"
import { useScroll } from 'framer-motion';

import './Services.css'

function Services() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: '',
        offset: ["0 1", "0.6 1"]
    });
   
    return (
        <motion.div className="services-style">
            <div className="container">
                <motion.div className="services_header"
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 1 }}
                transition={{ duration: 2 }}
                >
                <SectionTitle heading='Services' subheading='' />
                </motion.div>
            </div>

            <motion.div ref={ref} className="container"
             style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
            }}
            >
                <div className="services-allItems">
                    <ServicesItems
                        icon={<MdCode />}
                        title="Web Development"
                        desc="I develop websites. I create high performance website with blazing fast speed."
                    />
                    <ServicesItems
                        icon={<MdAnalytics />}
                        title="Data Analysis"
                        desc="I help turn your raw data into meaningful information which you then use for your business decisions"
                    />
                    <ServicesItems
                        icon={<MdAnalytics />}
                        title="Data Analysis"
                        desc="I help turn your raw data into meaningful information which you then use for your business decisions"
                    />
                    {/* <ServicesItems
                        icon={<MdDraw />}
                        title="Digital Art"
                        desc="I turn your images/pictures into beautiful arts."
                    /> */}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Services
