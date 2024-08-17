import { Container } from "@/components/Container";
import heroImg from "../../../public/img/heroAbout.webp"
import { FC } from "react";
import Image from "next/image";

const AboutPage: FC = function () {
  return (
    <Container>
    <Container className="flex flex-wrap ">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="pt-10 text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:pt-0 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Un Equipo Apacionado por el Bienestar Animal
            </h1>
            <p className="text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              
              Conoce un poco sobre nosotros, nuestra historia y por que tu michi o lo,ito estara en las mejores manos
            </p>

            
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="500"
              height="500"
              className={"transition-transform duration-300 transform hover:scale-105 object-cover rounded-2xl"}
              alt="Hero Illustration"
              loading="eager"
              
            />
          </div>
        </div>
      </Container>
      </Container>
  );
};

export default AboutPage;
