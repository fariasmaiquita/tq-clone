'use client'

import FadeInImage from "@/app/components/FadeInImage";
import FadeInVideo from "@/app/components/FadeInVideo";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function HeroSection() {
    const slides: { lgMediaSrc: string, smMediaSrc: string, mediaType: "image" | "video", url: string }[] = [
        { lgMediaSrc: "/img/tqc-home-hero-1-lg.webp", smMediaSrc: "/img/tqc-home-hero-1-sm.webp", mediaType: "image", url: "/slide1" },
        { lgMediaSrc: "/img/tqc-home-hero-2-lg.mp4", smMediaSrc: "/img/tqc-home-hero-2-sm.mp4", mediaType: "video", url: "/slide2" },
        { lgMediaSrc: "/img/tqc-home-hero-3-lg.webp", smMediaSrc: "/img/tqc-home-hero-3-sm.webp", mediaType: "image", url: "/slide3" }
    ];

    const [currSlide, setCurrSlide] = useState<number>(0);
    const router = useRouter();

    const getMedia = (mediaSrc: string, mediaType: "image" | "video", alt?: string) => {
        if (mediaType == "image") {
            return (
                <FadeInImage src={mediaSrc} alt={alt || ""} />
            )
        }

        return (
            <FadeInVideo src={mediaSrc} preload="auto" loop playsInline autoPlay muted></FadeInVideo>
        )
    }

    const slideClicked = (slideIndex:number) => {
        if (currSlide == slideIndex) {
            router.push(slides[slideIndex].url);
        } else {
            setCurrSlide(slideIndex);
        }
    }

    return (
        <section className="bg-black/40 min-[810px]:h-dvh h-[92dvh] relative text-white">
            {slides.map((slide, slideIndex) => {
                return (
                    <div key={slideIndex} className={`absolute inset-0 transition-opacity duration-500 ${currSlide == slideIndex ? "opacity-100 z-10" : "opacity-0"}`}>
                        {getMedia(slide.lgMediaSrc, slide.mediaType, "")}
                    </div>
                )
            })}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/0 from-70% to-black/15"></div>
            <h2 className="absolute z-10 max-w-[582px] w-full min-[810px]:px-[20px] px-[15px] min-[810px]:top-1/2 top-[180px] transform -translate-y-1/2 min-[1200px]:text-[60px] min-[810]:text-[48px] text-[38px] tracking-[-0.03em] leading-none font-semibold text-balance">
                Redefining brands for the modern world
            </h2>
            <div className="absolute z-10 min-[810]:pl-[20px] pl-[15px] left-0 bottom-[20px] w-full grid min-[810px]:grid-cols-3 max-[810px]:grid-flow-row gap-[10px] items-end">
                <div className="flex gap-[10px] max-[810px]:flex-col">
                    {slides.map((slide, slideIndex) => {
                        return (
                            <button key={slideIndex} onMouseEnter={() => setCurrSlide(slideIndex)} onClick={() => slideClicked(slideIndex)} className="min-[810px]:w-[120px] w-[calc(171_*_100%_/_794)] aspect-120/85 relative rounded-[5px] overflow-hidden cursor-pointer transition-opacity duration-500 hover:opacity-40">
                                {getMedia(slide.smMediaSrc, slide.mediaType, "")}
                            </button>
                        )
                    })}
                </div>
                <div className="min-[810px]:col-start-3 text-[14px] tracking-[-.03em] font-semibold">
                    {`0${currSlide + 1}/0${slides.length}`}
                </div>
            </div>

        </section>
    )
}