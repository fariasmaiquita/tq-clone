'use client';

import { ClientsData } from "@/app/data/ClientsData";
import { MouseEvent, useState } from "react";
import BodyPortal from "@/app/components/BodyPortal";
import FadeInImage from "@/app/components/FadeInImage";

export default function StudioClients() {
    const [mousePos, setMousePos] = useState<{x: number, y: number} | null>(null);
    const [clientId, setClientId] = useState<number | null>(null);

    const handleMouseMove = (e: MouseEvent) => {
        const target = e.target as HTMLDivElement;
        if (target.dataset.client && window.innerWidth >= 1200) {
            setMousePos({x: e.clientX, y: e.clientY});
            setClientId(parseInt(target.dataset.client))
        }
        else {
            setMousePos(null);
            setClientId(null);
        }
    }
    const handleMouseLeave = (e: MouseEvent) => {
        const target = e.target as HTMLDivElement;
        if (target.dataset.client) {
            setMousePos(null);
            setClientId(null);
        }
    }

    const getClient = () => {
        if (clientId !== null && mousePos && window.innerWidth >= 1200) {
            return (
                <BodyPortal>
                    <div className="fixed left-0 top-0 w-[202px] h-[275px] bg-black/40 will-change-transform rounded-[5px] overflow-hidden" style={{transform: `translate3d(${mousePos.x + 15}px, calc(${mousePos.y - 15}px - 100%), 0)`}}>
                        <FadeInImage src={ClientsData[clientId].imgSrc} alt="" sizes="202px" />
                    </div>
                </BodyPortal>
            )
        }

        return null;
    }

    return (
        <section className="min-[810px]:px-[20px] px-[15px] min-[810px]:pt-[60px] pt-[20px] min-[810px]:pb-[200px] pb-[150px]">
            <div className="font-medium">
                Selected Clients
            </div>
            <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="mt-[10px] min-[1200px]:text-[60px] min-[810px]:text-[48px] text-[38px] tracking-[-.03em] font-semibold leading-[70/60] select-none w-4/5">
                {ClientsData.map((item, index) => {
                    return (
                        <div key={index} className="inline-block">
                            <div className="inline-block opacity-40 transition-opacity duration-500 hover:opacity-100" data-client={index}>
                                {`${item.name}${index < ClientsData.length - 1 ? "," : ""}`}
                            </div>
                            {index < ClientsData.length - 1 ? "\u00a0" : ""}
                        </div>
                    )
                })}
            </div>
            {getClient()}
        </section>
    )
}