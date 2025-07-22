'use client';
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react';
import Link from "next/link";
import { LatestNewsData } from "@/app/data/NewsData";
import FadeInImage from "@/app/components/FadeInImage";

export default function HomeUpdates() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        slidesToScroll: 1,
        align: 'start',
    });

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <section className="min-[810px]:py-[200px] py-[150px]">
            <div className="px-[20px] flex justify-between items-end">
                <h2 className="min-[810px]:text-[40px] text-[28px] tracking-[-.03em] font-semibold">
                    Latest updates
                </h2>
                <div className="flex gap-[10px]">
                    <button className="bg-[#ebebeb] rounded-full cursor-pointer" onClick={scrollPrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 62" className="size-[32px]">
                            <path d="m33.648 20.267 1.183 1.183-9.466 9.466L35 40.551l-1.183 1.183-10.819-10.818 10.65-10.65Z"/>
                        </svg>
                    </button>
                    <button className="bg-[#ebebeb] rounded-full cursor-pointer" onClick={scrollNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 62" className="size-[32px]">
                            <path d="m28.35 41.733-1.183-1.183 9.466-9.466-9.635-9.635 1.183-1.183L39 31.084l-10.65 10.65Z"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="relative overflow-hidden mt-[20px]">
                <div className="embla" ref={emblaRef}>
                    <div className="flex items-stretch">
                        {LatestNewsData.map((itemData, itemIndex) => {
                            if (!itemData) return null;
                            const itemHref = `/news/${itemIndex}`;
                            return (
                                <div key={itemIndex} className="grow-0 shrink-0 min-[810px]:basis-[calc((100%-20px)_/_3)] basis-[calc(250%_/_3_-_17.5px)] min-[810px]:pl-[20px] pl-[15px]">
                                    <Link href={itemHref} className="block bg-black/40 aspect-4/3 relative rounded-[10px] overflow-hidden">
                                        <FadeInImage src={itemData.imgSrc} sizes="(min-width: 810px) 33vw, 83vw" alt="" />
                                    </Link>
                                    <Link href={itemHref} className="text-[14px] tracking-[-.03em] inline-flex flex-wrap gap-x-[5px] mt-[12px] opacity-40">
                                        <span>{itemData.category}</span>
                                        <span>/</span>
                                        <span>{itemData.date}</span>
                                    </Link>
                                    <br />
                                    <Link href={itemHref} className="min-[810px]:max-w-[360px] max-w-[320px] inline-block mt-[10px] pb-[30px] min-[810px]:text-[22px] text-[18px] tracking-[-.03em] font-semibold transition-opacity duration-500 hover:opacity-40">
                                        {itemData.title}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="text-right mt-[20px] px-[20px]">
                <Link href="" className="inline-block text-[14px] tracking-[-.03em] font-semibold leading-[18px] relative group">
                    View All
                    <div className="absolute bottom-0 w-full border-b origin-left transition-transform duration-500 ease-in-out scale-x-0 group-hover:scale-x-100"></div>
                </Link>
            </div>

        </section>
    )
}