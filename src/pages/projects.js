import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/project1.png";
import project2 from "../../public/images/projects/project2.png";
import project3 from "../../public/images/projects/project3.png";
import project4 from "../../public/images/projects/project4.png";
import project5 from "../../public/images/projects/project5.png";
import project6 from "../../public/images/projects/project6.png";
import project7 from "../../public/images/projects/project7.png";
import Dapp from "../../public/images/projects/Dapp.png";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Skills from "@/components/Skills";

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-soild border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duartion: 0.2 }}
          priority size="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-light
          sm:px-4 sm:text-base">Visit Project</Link>
        </div>
      </div>
    </article>
  )
}
const Project = ({ title, img, link, github, summary}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-gray-300 bg-white p-5 relative overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 dark:bg-gray-800 dark:border-gray-600">
      {/* Background gradient effect */}
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 opacity-20 dark:opacity-10' />

      {/* Image */}
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-2xl">
        <FramerImage 
          src={img} 
          alt={title} 
          className="w-full h-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </Link>

      {/* Content */}
      <div className="w-full flex flex-col items-start justify-between mt-4 space-y-3">
        <Link href={link} target="_blank" className="text-2xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
          <h2 className="my-2">{title}</h2>
        </Link>
        
        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{summary}</p>

        <div className="w-full flex items-center justify-between mt-2">
          {/* GitHub Button */}
          <Link href={github} target="_blank" className="w-8 md:w-6 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Reshma B | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className="pt-16">
          <AnimatedText text="Projects" className="mb-16 lg:!text-2 sm:mb-8 sm:!text-6xl xs:!text-4xl font-mono" />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
           
            <div className='col-span-6 sm:col-span-12'>
              <Project
                img={project1}
                title="MERN Book store Application"
                summary="This is a simple Book Store Project built using the MERN (MongoDB, Express.js, React, and Node.js) stack. This project demonstrates basic CRUD (Create, Read, Update, Delete) operations and Firebase for user authetication."
                link="/"
                github="https://github.com/2126ReshmaB/MERN-BOOK-APP.git"
               />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                img={project2}
                title="Health Care Application"
                summary="The healthcare application developed using Android Studio to provide users with a range of essential features for managing their health and well-being. "
                link="/"
                github="https://github.com/2126ReshmaB/HealTech---Medical-Health-Care-Application.git"
                 />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                img={project3}
                title="DSAQuestor - LeetCode Clone"
                summary="A DSA platform for interview preparation, built with TypeScript, Tailwind CSS, Next.js, React, and Firebase, is designed to help users practice Data Structures and Algorithms (DSA)."
                link="https://drive.google.com/file/d/13mZulo_shpM680-yCFZZsS00Z3_XDzy6/view?usp=sharing"
                github="https://github.com/2126ReshmaB/DSAQuestor-Coding-with-DSA-made-easy..git"
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                img={Dapp}
                title="Dapp"
                summary="This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract."
                link="https://drive.google.com/file/d/13mZulo_shpM680-yCFZZsS00Z3_XDzy6/view?usp=sharing"
                github="https://github.com/2126ReshmaB/chaiDapp.git"
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                img={project4}
                title="Amazon Clone - html and css"
                summary="It is a simple Amazon website developed using HTML and CSS."
                link="/"
                github="https://github.com/2126ReshmaB/Amazon-clone---HTML-and-CSS.git"
                 />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                img={project5}
                title="Blind Supporting system"
                summary="This is a vision enhancer based module specifically for the BLIND VICTIMS. The system is designed in such a way in which the blind person can take the help of AN APPLICATION which inturn sends Real Time Frames to the LAPTOP-BASED WIRELESS NETWORKED SYSTEM."
                link="/"
                github="https://github.com/2126ReshmaB/Bling-Supporting-System-using-Tensorflow-API.git"
                 />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                img={project6}
                title="ToDo List - React"
                summary="A simple To-do list built with React.js."
                link="/"
                github="https://github.com/2126ReshmaB/To-do-list.git"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                img={project7}
                title="CRUD API"
                summary="A simple CRUD API built with MERN stack without."
                link="/"
                github="https://github.com/2126ReshmaB/CRUD-APP.git"
              />
            </div>

          </div>
          <Skills />
          <div>
            <h3 className='font-mono text-black'>Tools:</h3>
            <p className='font-mono'>- Vs Code</p>
            <p className='font-mono'>- Android studio</p>
            <p className='font-mono'>- Postman</p>
            <p className='font-mono'>- GitHub</p>
            <p className='font-mono'>- Spyder</p>
            <p className='font-mono'>- Remix IDE</p>
            <p className='font-mono'>- Metamask</p>
            <p className='font-mono'>- etc.,</p>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects