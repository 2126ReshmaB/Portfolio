import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from "next/image";
import profile1 from "../../public/images/articles/image1.png";
import profile2 from "../../public/images/articles/image2.png";
import profile3 from "../../public/images/articles/image.png";
import { motion, useInView, useMotionValue, useScroll, useSpring } from "framer-motion";
import article3 from "../../public/images/articles/GFG WC.png";
import article4 from "../../public/images/articles/LC WC.png";
import article5 from "../../public/images/articles/Coding ninja level 4.jpg";
import article6 from "../../public/images/articles/Mentorship.png";
import TransitionEffect from '@/components/TransitionEffect';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { GithubIcon } from '@/components/Icons';
import img1 from "../../public/images/articles/2024-50-lg.png";
import img2 from "../../public/images/articles/2024-100-lg.png";
import img3 from "../../public/images/articles/dcc-2024-3.png";
import img4 from "../../public/images/articles/lg50.png";
import img5 from "../../public/images/articles/lg100.png";
import img6 from "../../public/images/articles/ronin-30759.svg"
import img7 from "../../public/images/articles/samurai-30760.svg"
import LiIcon from '@/components/LiIcon';


const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}>
      <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }} ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden" /></Link>
  )
}

const Article = ({ date, title, link, img ,f}) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
    sm:flex-col">
      <MovingImg title={title} {...f !== '1' ? img={img} : "" } link={link} />
      {f === '1' ?
      <div className="flex">
  <Image src={img1} alt="Image 1" className="w-10 h-10 mr-2" />
  <Image src={img2} alt="Image 2" className="w-10 h-10 mr-2" />
  <Image src={img3} alt="Image 3" className="w-10 h-10 mr-2" />
  <Image src={img4} alt="Image 4" className="w-10 h-10 mr-2" />
  <Image src={img5} alt="Image 5" className="w-10 h-100" />
</div> : ""
}
{f === '2' ? 
<div className="flex">
  <Image src={img6} alt="Image 6" className="w-10 h-10 mr-2"/>
  <Image src={img7} alt="Image 7" className="w-10 h-10"/>
</div> : ""}

    </motion.li>
  )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light' />
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duartion: 0.2 }} priority size="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw" />
      </Link>
      <Link href={link} target="_blank">
        <h2 className='capitalize text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg'>{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
    </li>
  )
}
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])


  return <span ref={ref}></span>
}
const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

    <LiIcon reference={ref} />
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}>
      <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
      <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
        {time} | {place}
      </span>
      <p className='font-medium w-full md:text-sm'>
        {info}
      </p>
    </motion.div>
  </li>
}
const Project = ({ title,img, link}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4">
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[98%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duartion: 0.2 }} />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank" className="font-semibold underline md:text-base hover:text-blue-500">Visit my profile</Link>
        </div>
      </div>
    </article>
  )
}
const Articles = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <>
      <Head>
        <title>Reshma B | Codings Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-13 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className="pt-16">
          <AnimatedText text="Competitive Coding" className="mb-1
          text-6xl sm:mb-1 sm:!text-5xl xs:!text-xl font-mono font-bold" />
          <div className='row-span-7 flex xl:flex-row items-center justify-center xl:row-span-8 md:order-3 my-8'>
            <div className='flex flex-col items-center justify-center mb-4 xl:mb-0 xl:mr-4 mx-8'>
              <span className='inline-block text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-bold mr-2 font-mono'>
                <AnimatedNumbers value={500} />+
              </span>
              <h1 className='text-base md:text-lg sm:text-sm xs:text-xs font-medium capitalize text-dark/75 dark:text-light/75 font-mono'>Leetcode</h1>
            </div>
            <div className='flex flex-col items-center justify-center mb-4 xl:mb-0 xl:mr-4 mx-6'>
              <span className='inline-block text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-bold mr-2 font-mono'>
                <AnimatedNumbers value={600} />+
              </span>
              <h1 className='text-base md:text-lg sm:text-sm xs:text-xs font-medium capitalize text-dark/75 dark:text-light/75 font-mono'>GeeksForGeeks</h1>
            </div>
            <div className='flex flex-col items-center justify-center mb-4 xl:mb-0 ml-4'>
              <span className='inline-block text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-bold mr-2 font-mono'>
                <AnimatedNumbers value={200} />+
              </span>
              <h1 className='text-base md:text-lg sm:text-sm xs:text-xs font-medium capitalize text-dark/75 dark:text-light/75 font-mono'>Coding Ninjas</h1>
            </div>
          </div>
      

          <ul className="grid grid-cols-3 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <Project title="Leetcode"
              link="https://leetcode.com/u/Reshma-B/"
              img={profile1}
            />
            <Project title="GeeksForGeeks"
             
              link="https://www.geeksforgeeks.org/user/resh21hgw4/"
              img={profile2}
            />
             <Project title="CodingNinjas"
              link="https://www.naukri.com/code360/profile/b2ebf1c7-0c99-4de8-9022-21b733507676"
              img={profile3}
            />
          </ul>
       
<h2 className='font-bold text-6xl mt-20 mb-32 w-full text-center md:text-5xl xs:text-4xl md:mb-16 font-mono'>Trainings</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 font-mono'>
          <Details
            type="Communication Course Program" time="july - sept 2022"
            place="FFE"/>
          <Details
            type="DSA Boot-Camp in java" time="jan - july 2023"
            place="FFE - Amazon team"
             />
          <Details
            type="Aptitude Training - FacePrep " time="Feb - Aug 2023"
            place="FFE - Face Prep"
             />
             <Details
            type="One-on-One mentorship Program" time="sept 2023 - Feb 2024"
            place="Mentor: Prasad Rege"

             />

        </ul>
      </div>

          <h2 className="font-bold text-6xl w-full text-center my-16 mt-32 md:text-5xl font-mono">Platform Achievements</h2>
          <ul>
          <div className="flex items-center justify-center">
  <Image src={img1} alt="Image 1" className="w-20 h-20 mr-2" />
  <Image src={img2} alt="Image 2" className="w-20 h-20 mr-2" />
  <Image src={img3} alt="Image 3" className="w-20 h-20 mr-2" />
  <Image src={img4} alt="Image 4" className="w-20 h-20 mr-2" />
  <Image src={img5} alt="Image 5" className="w-20 h-20" />
</div>
<p className='flex justify-center mt-4'>Leetcode Badges</p>
          </ul>
          
        </Layout>
      </main>
    </>
  )
}

export default Articles;