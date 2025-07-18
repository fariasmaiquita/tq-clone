import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import WorkSection from "@/app/components/WorkSection";
import CapabilitiesSection from "@/app/components/CapabilitiesSection";
import UpdatesSection from "@/app/components/UpdatesSection";
import CTASection from "@/app/components/CTASection";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <WorkSection />
            <CapabilitiesSection />
            <UpdatesSection />
            <CTASection />
        </main>
    );
}
