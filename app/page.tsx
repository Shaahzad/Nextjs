import { Navbar } from "@/components/navbar";
import Ronaldo from "../components/icons/images.jpg"
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Feature } from "@/components/Feature";

export default async function Page() {
  return (
    <div className="relative h-screen">
      {/* <Image
        src={Ronaldo}
        alt="Background"
        fill
        className="object-cover object-top"
      /> */}
      {/* <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-50 h-full">
        <Navbar />
        <div className="flex h-full items-center justify-center px-10">
          <div className="text-white text-center">
            <h1 className="text-6xl font-bold">
              True Lover Of CR7
            </h1>
            <p className="mt-4 text-lg">
              Cristiano Ronaldo Hero Section
            </p>
          </div>
        </div>
      </div> */}
      <Hero/>
      <Feature/>
    </div>
  )
}