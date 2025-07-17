import PageHeader from "@/app/components/PageHeader";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import WorkSection from "@/app/components/WorkSection";
import CapabilitiesSection from "@/app/components/CapabilitiesSection";
import UpdatesSection from "@/app/components/UpdatesSection";

export default function Home() {
    return (
        <>
            <PageHeader initBgOpaque={false} />
            <main className="">
                <HeroSection />
                <AboutSection />
                <WorkSection />
                <CapabilitiesSection />
                <UpdatesSection />
            </main>
        </>
    );
}
