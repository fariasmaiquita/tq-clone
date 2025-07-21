import StudioHero from "@/app/components/StudioHero";
import StudioIntro from "@/app/components/StudioIntro";

export default function StudioPage() {
    return (
        <main className="motion-translate-y-in-[-100px] motion-opacity-in-0 motion-duration-700 motion-delay-300">
            <StudioHero />
            <StudioIntro />
        </main>
    )
}