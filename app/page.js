import ChooseUs from "@/components/ChooseUs";
import HeroSection from "@/components/HeroSection";
import RegisterWithUs from "@/components/RegisterWithUs";
import Image from "next/image";
// import 'globals.css'

export default function Home() {
  return (
   <>
    <HeroSection/>
    <ChooseUs/>
    <RegisterWithUs/>
   </>
  );
}
