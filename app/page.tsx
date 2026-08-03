import { About } from "@/components/About";
import { BalloonServices } from "@/components/BalloonServices";
import { BookingForm } from "@/components/BookingForm";
import { BusinessSplit } from "@/components/BusinessSplit";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PageEnhancements } from "@/components/PageEnhancements";
import { RentalCatalog } from "@/components/RentalCatalog";
import { VideoReels } from "@/components/VideoReels";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return <>
    <PageEnhancements />
    <Header />
    <main>
      <Hero />
      <BusinessSplit />
      <RentalCatalog />
      <BalloonServices />
      <VideoReels />
      <Gallery />
      <WhyChooseUs />
      <BookingForm />
      <About />
    </main>
    <Footer />
  </>;
}
