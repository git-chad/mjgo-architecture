import { Montserrat } from "next/font/google";
import { Cabin } from "next/font/google";
import Image from "next/image";
import profilePic from "/public/profile-pic.png";

const montserrat = Montserrat({ subsets: ["latin"] });
const cabin = Cabin({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function About() {

  return (
    <section className="grid-bg min-h-screen w-full flex flex-col justify-center items-center bg-gray-100">
      <div className="container mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
        <div className="flex-1 space-y-6">
          <h2
            className={`${montserrat.className} font-black text-5xl md:text-6xl lg:text-7xl leading-tight`}
          >
            About me
          </h2>
          <p
            className={`anim-text ${cabin.className} text-lg md:text-xl leading-relaxed`}
          >
            I&apos;m a creative architect who is deeply passionate about
            marrying the principles of brutalist architecture with
            environmentally friendly design. At the core of my design philosophy
            is the belief that the built environment should exist in harmony
            with the natural world, rather than in opposition to it.
          </p>
          <p className={`${cabin.className} text-lg italic font-bold mt-4`}>
            Studies
          </p>
          <p
            className={`anim-text ${cabin.className} text-lg md:text-xl leading-relaxed mt-2`}
          >
            Having graduated from Ditella University in Buenos Aires, I learned
            the importance of attention to detail and practical knowledge.
            Combining theoretical principles with real-world application has
            been a cornerstone of my academic and professional journey.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center space-y-6">
          <div className="profile-pic overflow-hidden">
            <Image
              src={profilePic}
              width={300}
              alt="Martina J. Gonzalez Orlando"
              objectFit="cover"
            />
          </div>
          <div className="text-center space-y-2 flex flex-col">
            <small className={`${cabin.className} text-xl`}>
              Martina J. Gonzalez Orlando
            </small>
            <small
              className={`${cabin.className} text-lg text-gray-500 italic`}
            >
              Architecture Student
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
