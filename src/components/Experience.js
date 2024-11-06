import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

    <LiIcon reference={ref} />
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}>
      <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target="_blank" className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
      <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
        {time} | {address}
      </span>
      <p className='font-medium w-full md:text-sm'>
        {work}
      </p>
    </motion.div>
  </li>
}

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className='my-40'>
      <h2 className='font-bold text-6xl mb-32 w-full text-center md:text-5xl xs:text-4xl md:mb-16 font-mono'>Experience</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 font-mono'>
          <Details
            position="App Developer | Flutter | Firebase" company="Elders and Seniors"
            companyLink=""
            time="15th June - 16th July 2024" address=""
            work="I have experience working with Flutter and Firebase, including implementing authentication, adding and retrieving data from the Firebase database, and developing search functionality. This experience was gained through a paid internship, which provided valuable hands-on learning and practical insights."
          />
          <Details
            position="UI Deveoper" company="Geetham Soft"
            companyLink=""
            time="4th July - 19th July 2023" address=""
            work=" I gained skills in HTML, CSS, JavaScript, React.js, and performed CRUD operations using MongoDB. This experience enhanced my proficiency in front-end development and database management."
          />
         
        </ul>
      </div>
    </div>
  )
}

export default Experience