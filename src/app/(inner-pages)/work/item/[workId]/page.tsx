import FadeInImage from "@/app/components/FadeInImage";
import Link from "next/link";
import { ThreeMoreWorkData, WorkData, WorkDataProps } from "@/app/data/WorkData";
import {notFound} from "next/navigation";
import FadeInVideo from "@/app/components/FadeInVideo";

export default async function WorkItemPage({ params }: { params: Promise<{ workId: string }> }) {
    const pageParams = await params;
    const workId = parseInt(pageParams.workId);

    if (!WorkData[workId]) {
        return notFound();
    }

    const moreWorkData: WorkDataProps = ThreeMoreWorkData(workId);

    const getMedia = (mediaType: "image" | "video", mediaSrc: string, sizes: string) => {
        const className = "transform transition-transform duration-1000 ease-out group-hover:scale-104";
        if (mediaType == "image") {
            return (
                <FadeInImage src={mediaSrc} sizes={sizes} alt="" className={className} />
            )
        }

        return (
            <FadeInVideo src={mediaSrc} preload="auto" loop playsInline autoPlay muted className={className}></FadeInVideo>
        )
    }

    return (
        <main className="motion-translate-y-in-[-100px] motion-opacity-in-0 motion-duration-700 motion-delay-300">
            <div className="pt-[140px] min-[810px]:pb-[200px] pb-[150px] min-[810px]:px-[20px] px-[15px]">
                <div className="flex max-[810px]:flex-col gap-x-[10px] gap-y-[1px] min-[810px]:text-[48px] text-[38px] tracking-[-.03em]">
                    <div className="font-semibold">
                        Velvo
                    </div>
                    <div className="opacity-40">
                        Innovative elegance
                    </div>
                </div>
                <div className="mt-[125px] max-w-[800px] grid min-[810px]:grid-cols-3 grid-cols-1 gap-x-[10px] gap-y-[5px] font-semibold">
                    <div className="flex gap-[5px]">
                        <div className="opacity-40">
                            Client:
                        </div>
                        <div>
                            Velvo
                        </div>
                    </div>
                    <div className="flex gap-[5px]">
                        <div className="opacity-40">
                            Year:
                        </div>
                        <div>
                            2024
                        </div>
                    </div>
                    <div className="flex gap-[5px]">
                        <div className="opacity-40">
                            Type:
                        </div>
                        <div>
                            Print, Strategy
                        </div>
                    </div>
                </div>
                <div className="mt-[20px] aspect-3/2 bg-black/40 relative rounded-[15px] overflow-hidden">
                    <FadeInImage src="/img/work/tqc-work-01-2000w.avif" sizes="100vw" alt="" />
                </div>
                <div className="grid min-[810px]:grid-cols-2 grid-cols-1 gap-[20px] mt-[20px]">
                    <div className="bg-black/40 relative aspect-[0.75] rounded-[15px] overflow-hidden">
                        <FadeInImage src="/img/work/tqc-work-01-2000w.avif" sizes="(min-width: 810px) 50vw, 100vw" alt="" />
                    </div>
                    <div className="bg-black/40 relative aspect-[0.75] rounded-[15px] overflow-hidden">
                        <FadeInImage src="/img/work/tqc-work-01-2000w.avif" sizes="(min-width: 810px) 50vw, 100vw" alt="" />
                    </div>
                </div>
                <div className="min-[810px]:py-[80px] py-[60px] min-[1200px]:text-[48px] min-[810px]:text-[38px] text-[28px] tracking-[-.03em] font-semibold opacity-40 min-[810px]:max-w-[920px] max-w-[420px]">
                    A new standard in premium performance and design, bringing advanced technology to elevate every space.
                </div>
                <div className="aspect-3/2 bg-black/40 relative rounded-[15px] overflow-hidden">
                    <FadeInImage src="/img/work/tqc-work-01-2000w.avif" sizes="100vw" alt="" />
                </div>
                <div className="grid min-[810px]:grid-cols-2 grid-cols-1 gap-[20px] mt-[20px]">
                    <div className="bg-black/40 relative aspect-square rounded-[15px] overflow-hidden">
                        <FadeInImage src="/img/work/tqc-work-01-2000w.avif" sizes="(min-width: 810px) 50vw, 100vw" alt="" />
                    </div>
                    <div className="bg-black/40 relative aspect-square rounded-[15px] overflow-hidden">
                        <FadeInImage src="/img/work/tqc-work-01-2000w.avif" sizes="(min-width: 810px) 50vw, 100vw" alt="" />
                    </div>
                </div>
                <div className="mt-[20px] aspect-3/2 bg-black/40 relative rounded-[15px] overflow-hidden">
                    <FadeInImage src="/img/work/tqc-work-01-2000w.avif" sizes="100vw" alt="" />
                </div>
                <div className="mt-[60px] min-[810px]:grid min-[1200px]:grid-cols-3 grid-cols-2 gap-[20px]">
                    <div className="min-[1200px]:col-start-3 col-start-2">
                        <div className="opacity-40 font-semibold">
                            Project Description
                        </div>
                        <div className="mt-[10px] leading-[1.3] font-medium">
                            <p>
                                {"Velvo is redefining precision and performance in modern technology. Originating as an innovative design hub, Velvo has rapidly grown into a powerhouse of engineering and aesthetic excellence, bridging the gap between form and function in groundbreaking ways. We’re committed to pushing the limits of what’s possible, crafting products that don’t just perform exceptionally—they transform everyday experiences."}
                            </p>
                            <p className="mt-[20px]">
                                {"From sleek, high-efficiency home appliances to industrial-grade solutions, Velvo’s technologies help customers elevate their environment with powerful, intuitive tools. As champions of sustainable innovation, we design with both purpose and planet in mind, utilizing advanced materials and energy-efficient systems. Our mission is to create a lasting impact, empowering users to live smarter, cleaner, and with unparalleled style."}
                            </p>
                        </div>
                        <div className="mt-[40px]">
                            <div className="opacity-40 font-semibold">
                                Credits
                            </div>
                            <div className="mt-[10px] font-medium flex flex-wrap gap-x-[5px] gap-y-[2.5px]">
                                <div className="opacity-40">
                                    Design:
                                </div>
                                <div>
                                    Ethan Brooks
                                </div>
                                <div className="w-full"></div>
                                <div className="opacity-40">
                                    Art Direction:
                                </div>
                                <div>
                                    Lily Anders
                                </div>
                                <div className="w-full"></div>
                                <div className="opacity-40">
                                    Motion Design:
                                </div>
                                <div>
                                    Mason Reid
                                </div>
                                <div className="w-full"></div>
                                <div className="opacity-40">
                                    Project Manager:
                                </div>
                                <div>
                                    Sophie Caldwell
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-end gap-[10px] min-[810px]:pt-[200px] pt-[150px]">
                    <h2 className="min-[810px]:text-[40px] text-[28px] tracking-[-.03em] font-semibold">
                        More works
                    </h2>
                    <Link href="/work/view/grid/0" className="font-semibold leading-[18px] relative group">
                        View All
                        <div className="absolute bottom-0 w-full border-b origin-left transition-transform duration-500 ease-in-out scale-x-0 group-hover:scale-x-100"></div>
                    </Link>
                </div>
                <div className="min-[810px]:mt-[40px] mt-[20px] grid min-[810px]:grid-cols-3 grid-cols-1 gap-x-[20px] min-[810px]:gap-y-[40px] gap-y-[20px]">
                    {moreWorkData.map((work, workIndex) => {
                        if (!work) return;

                        const aspectRatios = {
                            "1": "aspect-square",
                            "4/3": "aspect-4/3",
                            "16/9": "aspect-16/9"
                        };

                        return (
                            <Link key={workIndex} href={`/work/item/${workIndex}`} className={`group bg-black/40 relative overflow-hidden rounded-[15px] ${aspectRatios[work.aspectRatio]}`}>
                                {getMedia(work.mediaType, work.mediaSrc.largest, "(min-width: 810) 33vw, 100vw")}
                                <div className="absolute left-0 bottom-[15px] w-full px-[15px] text-[16px] flex gap-[5px]">
                                    <div className="tracking-[-.03em] text-white font-semibold">
                                        {work.title}
                                    </div>
                                    <div className="tracking-[-.03em] text-white/50">
                                        {work.description}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}