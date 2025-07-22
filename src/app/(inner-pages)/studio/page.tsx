import StudioHero from "@/app/components/StudioHero";
import StudioIntro from "@/app/components/StudioIntro";
import StudioTeam from "@/app/components/StudioTeam";
import StudioBridge from "@/app/components/StudioBridge";
import StudioServices from "@/app/components/StudioServices";
import StudioClients from "@/app/components/StudioClients";
import StudioCareers from "@/app/components/StudioCareers";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Studio | T.Q.C"
}

export default function StudioPage() {
    return (
        <main className="motion-translate-y-in-[-100px] motion-opacity-in-0 motion-duration-700 motion-delay-300">
            <StudioHero />
            <StudioIntro />
            <StudioTeam />
            <StudioBridge />
            <StudioServices />
            <StudioClients />
            <StudioCareers />
        </main>
    )
}