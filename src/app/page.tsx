import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import WorkSection from "@/app/components/WorkSection";
import CapabilitiesSection from "@/app/components/CapabilitiesSection";
import UpdatesSection from "@/app/components/UpdatesSection";
import CTASection from "@/app/components/CTASection";

export default function HomePage() {
    return (
        <main className="motion-translate-y-in-[-100px] motion-opacity-in-0 motion-duration-700 motion-delay-300">
            <HeroSection />
            <AboutSection />
            <WorkSection />
            <CapabilitiesSection />
            <UpdatesSection />
            <CTASection />
        </main>
    );
}
