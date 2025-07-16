'use client';
import { CapabilitiesData } from "@/app/data/CapabilitiesData";
import FadeInImage from "@/app/components/FadeInImage";
import {useState} from "react";

export default function CapabilitiesSection() {
    const [currSlide, setCurrSlide] = useState<number>(0);

    return (
        <section className="min-[810px]:h-[105dvh] relative flex flex-col min-[810px]:justify-center">
            <div className="bg-black/40 min-[810px]:absolute relative inset-0 max-[810px]:aspect-1219/1000 overflow-hidden">
                {CapabilitiesData.map((capItem, itemIndex) => {
                    return (
                        <div key={itemIndex} className={`absolute inset-0 transition-transform ease-out duration-1000 ${currSlide == itemIndex ? "opacity-100 z-10" : "opacity-0 scale-106"}`}>
                            <FadeInImage src={capItem.imgSrc} sizes="100vw" alt="" />
                        </div>
                    )
                })}
            </div>
            <div className="relative z-20 mx-[20px] pt-[20px] max-[810px]:pb-[20px] border-t border-t-white/20 min-[810px]:grid grid-cols-3 min-[810px]:text-white min-[810px]:min-h-[377px] max-[810px]:mt-[20px]">
                <div className="text-[14px] font-medium tracking-[-.03em]">
                    Capabilities
                </div>
                <div className="col-start-3 flex flex-col min-[810px]:gap-[10px] gap-[5px] select-none font-semibold min-[1200px]:text-[60px] min-[810px]:text-[48px] text-[38px] max-[810px]:mt-[20px]">
                    {CapabilitiesData.map((capItem, itemIndex) => {
                        return (
                            <div key={itemIndex} onMouseEnter={() => setCurrSlide(itemIndex)} className={`tracking-[-.03em] transition-opacity duration-500 ${currSlide == itemIndex ? "opacity-100" : "opacity-20"}`}>
                                {capItem.title}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}