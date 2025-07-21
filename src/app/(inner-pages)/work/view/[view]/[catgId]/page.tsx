import {WorkData, WorkDataProps, WorkCatgData, MainWorkCatgData} from "@/app/data/WorkData";
import Link from "next/link";
import FadeInImage from "@/app/components/FadeInImage";
import FadeInVideo from "@/app/components/FadeInVideo";
import {notFound} from "next/navigation";

interface WorkViewPageProps {
    params: {
        view: "grid" | "list",
        catgId: string
    };
}

export default function WorkViewPage({ params }: WorkViewPageProps) {
    const view = params.view;
    const viewOpts = ["grid", "list"];
    const catgId = parseInt(params.catgId);

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

    const getWorkDataFromCatg = (): WorkDataProps => {
        if (catgId > 0) {
            const WorkDataSubset: WorkDataProps = [];

            WorkData.forEach((item, index) => {
                if (item && item.categories.includes(catgId)) {
                    WorkDataSubset[index] = item;
                }
            })

            return  WorkDataSubset;
        }

        return WorkData;
    }

    const workDataFromCatg = getWorkDataFromCatg();

    const gridView = () => {
        return (
            <div className="min-[810px]:mt-[40px] mt-[20px] grid min-[810px]:grid-cols-3 grid-cols-1 gap-x-[20px] min-[810px]:gap-y-[40px] gap-y-[20px] motion-translate-y-in-[100px] motion-opacity-in-0 motion-duration-700">
                {workDataFromCatg.map((work, workIndex) => {
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
        )
    }

    const listView = () => {
        return (
            <div className="min-[810px]:mt-[40px] mt-[20px] motion-translate-y-in-[100px] motion-opacity-in-0 motion-duration-700">
                {workDataFromCatg.map((work, workIndex) => {
                    if (!work) return;

                    return (
                        <Link key={workIndex} href={`/work/item/${workIndex}`} className="border-t border-t-black/20 py-[20px] flex min-[1200px]:gap-[10px] gap-[40px] items-center">
                            <div className="max-[1200px]:hidden shrink-0 basis-0 grow-[0.25] text-[16px] font-semibold tracking-[-.03em] opacity-40">
                                {(workIndex < 10 ? "0" : "") + workIndex}
                            </div>
                            <div className="min-[1200px]:text-[32px] min-[810px]:text-[26px] text-[20px] tracking-[-.03em] flex max-[1200px]:flex-col gap-x-[8px] shrink-0 basis-0 grow">
                                <div className="font-semibold">
                                    {work.title}
                                </div>
                                <div className="opacity-40">
                                    {work.description}
                                </div>
                            </div>
                            <div className="max-[810px]:hidden shrink-0 basis-0 grow-[0.5] text-[16px] font-semibold tracking-[-.03em] opacity-40 flex gap-[5px] max-[1200px]:flex-col">
                                {work.categories.map((catg, cIndex) => {
                                    return (
                                        <span key={cIndex}>
                                        {WorkCatgData[catg]}
                                            {cIndex < work.categories.length - 1 ? "," : ""}
                                    </span>
                                    )
                                })}
                            </div>
                            <div className="shrink-0 min-[810px]:grow-0 grow-[0.6] max-[810px]:basis-0 min-[810px]:w-[211px] w[1px] aspect-[calc(211/148)] relative bg-black/40 rounded-[8px] overflow-hidden">
                                {getMedia(work.mediaType, work.mediaSrc.small, "275px")}
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }

    if (catgId > 0 && !MainWorkCatgData[catgId]) {
        return notFound();
    }

    return (
        <>
            <div className="flex flex-wrap justify-between items-end gap-[20px]">
                <div className="min-[1200px]:text-[60px] min-[810px]:text-[48px] text-[38px] tracking-[-.03em] leading-[calc(65/60)] font-semibold min-[1200px]:max-w-[800px] min-[810px]:max-w-[600px] max-w-[390px]">
                    {MainWorkCatgData.map((catg, index) => {
                        return (
                            <Link key={index} href={`/work/view/${view}/${index}`} className={`transition-opacity duration-500 hover:opacity-30 ${(index == catgId || (catgId == 0 && index == 0)) ? "" : "opacity-20"}`}>
                                {catg || "All"}
                                <span>
                                    { index < MainWorkCatgData.length - 1 ? ", " : "" }
                                </span>
                            </Link>
                        )
                    })}
                </div>
                <div className="font-semibold grow text-right">
                    {viewOpts.map((item, index) => {
                        return (
                            <span key={index}>
                                <Link href={`/work/view/${item}/${catgId}`} className={`capitalize transition-opacity duration-500 hover:opacity-40 ${item == view ? "opacity-40" : ""}`}>
                                    {item}
                                </Link>
                                <span>
                                    { index < viewOpts.length - 1 ? " / " : "" }
                                </span>
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className="mt-[40px] motion-translate-y-in-[100px] motion-opacity-in-0 motion-duration-700 motion-delay-300">
                {view == "grid" ? gridView() : listView() }
            </div>
        </>
    )
}