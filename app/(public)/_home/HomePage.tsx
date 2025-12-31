import AppDownload from "./AppDownload";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Features from "./Features";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Offers from "./Offers";
import Partners from "./Partners";
import Pricing from "./Pricing";
import Services from "./Services";
import Stats from "./Stats";
import Testimonials from "./Testimonials";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Partners />
            <Services />
            <HowItWorks />
            <Features />
            <Stats />
            <Offers />
            <Pricing />
            <Testimonials />
            <AppDownload />
            <FAQ />
            <Contact />
        </>
    );
}
