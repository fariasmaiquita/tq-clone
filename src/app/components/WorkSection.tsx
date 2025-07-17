import Link from "next/link";
import { LatestWorkData } from "@/app/data/WorkData";
import FadeInImage from "@/app/components/FadeInImage";
import FadeInVideo from "@/app/components/FadeInVideo";

export default function WorkSection() {
    const getMedia = (mediaType: "image" | "video", mediaSrc: string) => {
        const className = "transform transition-transform duration-1000 ease-out group-hover:scale-104";
        if (mediaType == "image") {
            return (
                <FadeInImage src={mediaSrc} sizes="(min-width: 810) 33vw, 100vw" alt="" className={className} />
            )
        }

        return (
            <FadeInVideo src={mediaSrc} preload="auto" loop playsInline autoPlay muted className={className}></FadeInVideo>
        )
    }

    return (
        <section className="min-[810px]:px-[20px] px-[15px] min-[810px]:pb-[200px] pb-[150px]">
            <div className="flex justify-between items-end gap-[10px]">
                <h2 className="min-[810px]:text-[40px] text-[28px] tracking-[-.03em] font-semibold">
                    Latest work
                </h2>
                <Link href="" className="text-[14px] tracking-[-.03em] font-semibold leading-[18px] relative group">
                    View All
                    <div className="absolute bottom-0 w-full border-b origin-left transition-transform duration-500 ease-in-out scale-x-0 group-hover:scale-x-100"></div>
                </Link>
            </div>
            <div className="min-[810px]:mt-[40px] mt-[20px] grid min-[810px]:grid-cols-3 grid-cols-1 gap-x-[20px] min-[810px]:gap-y-[40px] gap-y-[20px]">
                {LatestWorkData.map((work, workIndex) => {
                    const aspectRatios = {
                        "1": "aspect-square",
                        "4/3": "aspect-4/3",
                        "16/9": "aspect-16/9"
                    };

                    return (
                        <Link key={workIndex} href="" className={`group bg-black/40 relative overflow-hidden rounded-[15px] ${aspectRatios[work.aspectRatio]}`}>
                            {getMedia(work.mediaType, work.mediaSrc.largest)}
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
        </section>
    )
}