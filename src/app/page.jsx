import Navbar from "./_components/Navbar/navbar";
import Footer from "./_components/Footer/footer";
import Hero from "./_components/heroSection/hero";
import About from "./_components/aboutSection/about";
import Faq from "./_components/faqSection/faq";
import Speaker from "./_components/speakerSection/speaker";
import Events from "./_components/eventSection/events";
import Schedule from "./_components/scheduleSection/schedule";
import Pre from "./_components/preSection/pre";
import Partner from "./_components/partnerSection/partner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Speaker />
      <Events />
      <Pre />
      <Schedule />
      <Partner />
      <Faq />
      <Footer />
    </>
  );
}