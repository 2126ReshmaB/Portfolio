import { motion } from "framer-motion";
import React from "react";

const quote = {
  initial:{
    opacity:1,
  },
  animate:{
    opacity:1,
    transition:{
      delay:0.8,
      staggerChildren:0.08,
    }
  }
}
const singleword = {
  initial:{
    opacity:0,
    y:50,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duaration:1
    }
  }
}

const AnimatedText = ({text,className=""}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidde sm:py-0'>
      <motion.h1 className={`inline-block w-full text-dark fornt-bold capitalize text-8xl dark:text-light ${className}`}
      variants={quote}
      initial="initial"
      animate="animate">
        {
          text.split(" ").map((word,index) =>
          <motion.span key={word+'-'+index} className="inline-block"
          variants={singleword}
          >
            {word}&nbsp;
          </motion.span>
        )
        }
      </motion.h1>
    </div>
  )
}
export default AnimatedText