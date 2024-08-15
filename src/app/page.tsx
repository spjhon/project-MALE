
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Slider from "@/components/Slider/Slider";
import { data } from "@/components/Slider/data";
import GridGallery from "@/components/GridGallery";
import { photos } from "@/components/data";
import TimeLineDemo from "@/components/TimeLine/VerticalTimeLine";

import { benefitOne, benefitTwo } from "@/components/data";

//Dibujos de animalitos para adornar la pagina sacados de reddit

import drawpet02 from "../../public/draws/drawpet02.webp";
import drawpet03 from "../../public/draws/drawpet03.webp";
import drawpet04 from "../../public/draws/drawpet04.webp";
import drawpet05 from "../../public/draws/drawpet05.webp";
import drawpet06 from "../../public/draws/drawpet06.webp";
import drawpet07 from "../../public/draws/drawpet07.webp";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="¡En MalePet Care estamos aquí para ti y tu peludito!"
        title="¿Por qué MalePets-Care es la elección ideal?"
        icon={drawpet02.src}
      >
        Porque tu mascota estará en las mejores manos, brindándole la seguridad y el amor que necesita mientras tú no estás. ¡Confía en nosotros para mantener a tu mascota feliz y saludable!
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Mira un video"
        title="Explora como  cuidar lo que más importa"
        icon={drawpet05.src}
      >
        Video informativo sobre MalePet Care
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="TESTIMONIOS"
        title="Esto dicen nuestros clientes"
        icon={drawpet03.src}
      >
        Muchos clientes han quedado altamente satisfechos con la calidad del
        servicio ofrecido por MalePet Care
      </SectionTitle>

      <Slider data={data} activeSlide={2}></Slider>

      <Testimonials />

      <SectionTitle
        preTitle="PELUDOS FELICES"
        title="Conoce a los consentidos de MalePets Care"
        icon={drawpet04.src}
      >
        Algunos de nuestros queridos peluditos gozando de nuestro servicio de calidad.
      </SectionTitle>

      <GridGallery galleryID={"my-test-gallery"} images={photos}></GridGallery>

      <SectionTitle
        preTitle="SERVICIO PERZONALIZADO, ATENCION EN CADA DETALLE"
        title="¿Cómo encontrar el servicio de cuidado perfecto para tu peludito?"
        icon={drawpet07.src}
      >
        Servico directo que dejara a tus peludos en buenas manos y regresaran
        con una sonrisa que se nota
      </SectionTitle>

      <TimeLineDemo></TimeLineDemo>

      <SectionTitle
        preTitle="FAQ"
        title="Consultas que recibimos frecuentemente"
        icon={drawpet06.src}
      >
        Dudas de nuestros clientes que se preguntan mas a menudo.
      </SectionTitle>

      <Faq />

      <Cta />
    </Container>
  );
}
