import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Slider from "@/components/Slider/Slider";
import {data} from "@/components/Slider/data";


import { benefitOne, benefitTwo } from "@/components/data";


export default function Home() {
  return (
    <Container>
    
      <Hero />
      <SectionTitle
        preTitle="¡En MalePet Care estamos aquí para ti y tu peludito!"
        title="¿Por qué elegirnos?"
      >
        Por que tu mascota estará en las mejores manos, brindandole la seguridad y el amor que necesita mientras tú no estás. ¡Confia en nosotros para mantener a tu mascota feliz y saludable!
    
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
     

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Slider data={data} activeSlide= {2} ></Slider>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
