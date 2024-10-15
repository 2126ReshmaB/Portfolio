import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg font-mono dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-center lg:flex-col lg:py-6">
        <span>"The beautiful thing about learning is that no one can take it away from you." - B.B. King</span>
        
      </Layout>
    </footer>
  )
}

export default Footer