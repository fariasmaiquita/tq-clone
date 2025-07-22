import HomeHero from "@/app/components/HomeHero";
import HomeAbout from "@/app/components/HomeAbout";
import HomeWork from "@/app/components/HomeWork";
import HomeCapabilities from "@/app/components/HomeCapabilities";
import HomeUpdates from "@/app/components/HomeUpdates";
import HomeCTA from "@/app/components/HomeCTA";

export default function HomePage() {
    return (
        <main className="motion-translate-y-in-[-100px] motion-opacity-in-0 motion-duration-700 motion-delay-300">
            <HomeHero />
            <HomeAbout />
            <HomeWork />
            <HomeCapabilities />
            <HomeUpdates />
            <HomeCTA />
        </main>
    );
}
