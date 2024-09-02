import HEADER from "../components/header";
import FOOTER from "../components/footer";
import HERO from "../components/landingPage/Hero";
import FAQ from "../components/landingPage/faq";
import THREEFEATURES from "../components/landingPage/threefeatures";
import BLOG from '../routes/blog';

import {useRef} from "react"
import { motion } from "framer-motion"



export default function Index() {
  const scrollRef = useRef(null)

  return (
    
    <main className="flex flex-col bg-base-100">
      <HEADER />
      <HERO/>
      <FOOTER />
    </main>
  );
}