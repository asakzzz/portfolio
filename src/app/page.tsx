import Image from "next/image";
import Header from "./header";
import { JetBrains_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";
import { Geist } from "next/font/google";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="ml-3 ">
      <title>My portfolio</title>
      <Header />
      <div className=" flex flex-col items-center justify-center gap-8">
      </div>


      <div className=" flex flex-col mb-2 mt-10">
        <h1 className="font-extrabold font-[geist] text-3xl mb-3">ABOUT ME </h1>
        <div>
          <p className=" flex-1 text-2xl text-amber-50/90 font-[geist]">Who I am</p>
          <p className=" flex-2 font-[geist] text-amber-50/70 mr-2 mb-5 ml-3.5">I'm a first year student at <a className="text-amber-50/80" href="https://www.epitech.eu/">EPITECH</a>. I love programming and technology overall</p>
        </div>

        <div>
          <p className=" flex-1 text-2xl text-amber-50/90 font-[geist]">What I study</p>
          <p className=" flex-2 font-[geist] text-amber-50/70 mr-2 mb-5 ml-3.5">As a freshman, I study cybersecurity, AI (data analyzing, models) and Web development (frontend/backend) </p>
        </div>




        {/* talk about who I am and personality */}
        {/* talk about what I can do and what i've done in the past to prove my comp */}
        {/* add picture of myself */}

        <h1 className="font-extrabold font-[geist] text-3xl mb-3">MY WORK</h1>
        {/* screenshots and description of what i've done in the past */}
        {/* pool cyber */}
        {/* etodo backend */}
        {/* first website to demonstrate growth */}
        {/* hyprland setup / show linux ease */}

      
      <ScrollReveal>
        <div className="flex flex-wrap mr-2 mb-2">
          <Image
            src="/readme.png"
            width={390}
            height={400}
            alt="Picture of the author"
            className="mb-2 mr-2 w-auto"

          />

          <Image
            src="/arch_cybers.png"
            width={150}
            height={100}
            alt="Picture of the author"
            className="mb-2 w-auto"
          />
        </div>
      </ScrollReveal>
      <div className="border-t border-b border-amber-50/60 p-3 mb-3.5 -ml-5">
        <h2 className="font-extrabold text-m font-[geist] ml-5 ">Cyber Security Initiation:</h2>
        <p className="font-[geist] mb-3 text-sm text-amber-50/70 mr-2 ml-5">For our cybersecurity project, we had to take advantage of a website flaws and make a report of each of them (how we did it and how could they could be fixed). All said reports are uploaded on Github as markdowns, organized by categories.</p>
      </div>

      </div>
      <ScrollReveal>
        <div className="flex flex-wrap mr-2 mb-2">
          <Image
            src="/etodo_main.png"
            width={390}
            height={400}
            alt="Picture of the author"
            className="mb-2 mr-2 object-cover w-auto"

          />
          <Image
            src="/arch_back.png"
            width={150}
            height={100}
            alt="Picture of the author"
            className="mb-2 object-cover w-auto"

          />
        </div>
      </ScrollReveal>

      <div className="border-t border-b border-amber-50/60 p-3 mb-3.5 -ml-5">
        <h2 className="font-extrabold text-m font-[geist] ml-5">Etodo website:</h2>
        <p className="font-[geist] mb-3 text-sm text-amber-50/70 mr-2 ml-5">One of our first web project was to make a todo webpsite where one could plan their meal for the week. I mainly did the backend and the docker part.</p>
      </div>

      <ScrollReveal>
        <div className="flex flex-wrap mr-2 mb-2">
          <Image
            src="/hyprland.png"
            width={390}
            height={400}
            alt="Picture of the author"
            className="mb-2 mr-2 w-auto"

          />
        </div>
      </ScrollReveal>
      <div className="border-t border-b border-amber-50/60 p-3 mb-3.5 -ml-5">
        <h2 className="font-extrabold text-m font-[geist] ml-5 ">Linux:</h2>
        <p className="font-[geist] mb-3 text-sm text-amber-50/70 mr-2 ml-5">I'm quite familiar with Linux, which is used worldwide for servers/machines that need a little help. Maintaining and customizing an OS is no problem for me.</p>
      </div>


      <ScrollReveal>
        <div className="flex flex-wrap mr-2 mb-2">
          <Image
            src="/first_web.png"
            width={390}
            height={400}
            alt="Picture of the author"
            className="mb-2 mr-2 w-auto"

          />

          <Image
            src="/first_web_responsive.png"
            width={150}
            height={100}
            alt="Picture of the author"
            className="mb-2 w-auto"
          />
        </div>
      </ScrollReveal>
      <div className="border-t border-b border-amber-50/60 p-3 mb-3.5 -ml-5">
        <h2 className="font-extrabold text-m font-[geist] ml-5 ">First frontend:</h2>
        <p className="font-[geist] mb-3 text-sm text-amber-50/70 mr-2 ml-5">This is the first frontend project I've done. This is simply to demonstrate how I progressed in a 6 months timespan</p>
      </div>



    </main>

  );
}