import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const about = () => {
  return (
    <>
      <Head>
        <title>Reshma B | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className="pt-16">
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-5 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/7 dark:text-light/75 font-mono'>Biography</h2>
              
              <p className='font-mono font-medium mt-12'>
              Hi, I&apos;m Reshma B, a Final-year Computer Science student at RMK Engineering College. I started with a biology background in high school but transitioned to computer science due to my strong interest in the field.

              Receiving a scholarship from the Foundation For Excellence (FFE) has been life-changing. It has not only provided financial support but also opened doors to valuable mentorship and specialized classes beyond my college curriculum. These opportunities have significantly enhanced my technical and professional growth.

Since my first year, I&apos;ve been involved in practical projects, especially in Data Structures and Algorithms, building a solid foundation in these areas.

I believe that true passion for our work goes beyond aesthetics; it&apos;s about genuine interest and continuous learning.
              </p>
            </div>
            <div className='flex justify-end col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4  md:order-1 md:col-span-8'>
              <div className='flex justify-end absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profilePic} alt="Codebucks" className='w-full h-auto rounded-2xl' priority size="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw" />
            </div>
          </div>
          <Education />
          <Experience />
        </Layout>
      </main>
    </>
  )
}

export default about;
