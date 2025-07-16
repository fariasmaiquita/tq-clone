// import Image from "next/image";
import PageHeader from "@/app/components/PageHeader";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";

export default function Home() {
    return (
        <>
            <PageHeader initBgOpaque={false} />
            <main className="">
                <HeroSection />
                <AboutSection />
            </main>
        </>
    );
}
