'use client';

import { TeamData } from "@/app/data/TeamData";
import FadeInImage from "@/app/components/FadeInImage";
import { MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import BodyPortal from "@/app/components/BodyPortal";
import { useBodyScrollLock } from "@/app/hooks/useBodyScrollLock";

export default function StudioTeam() {
    const [memberId, setMemberId] = useState<number | null>(null);
    const [asideDismissed, setAsideDismissed] = useState<boolean>(true);
    const asideRef = useRef<HTMLDivElement | null>(null);
    const scrollYRef = useRef<number>(0);

    const handleAsideClick = (e: MouseEvent<HTMLDivElement>) => {
        const clickedTarget = e.target as HTMLElement;
        if (clickedTarget.matches(".aside-bg")) {
            setAsideDismissed(true);
        }
    }

    useEffect(() => {
        if (memberId !== null) {
            setAsideDismissed(false);
        }
    }, [memberId]);

    useEffect(() => {
        if (asideDismissed && memberId !== null) {
            setTimeout(() => {
                setMemberId(null);
            }, 700);
        }
    }, [asideDismissed]);

    useBodyScrollLock(!asideDismissed, scrollYRef);

    const getAside = () => {
        if (memberId !== null && TeamData[memberId]) {
            const memberData = TeamData[memberId];

            return (
                <div className={`fixed inset-y-0 right-0 bg-white min-[810px]:w-[400px] w-full flex flex-col gap-y-[20px] min-[810px]:px-[20px] px-[15px] py-[20px] overflow-y-auto motion-duration-500 ${asideDismissed ? "motion-opacity-out-0 motion-translate-x-out-100" : "motion-opacity-in-0 motion-translate-x-in-100 motion-delay-200"} `}>
                    <button onClick={() => setAsideDismissed(true)} className="self-end cursor-pointer text-[18px] tracking-[-.03em] font-semibold transition-opacity duration-500 hover:opacity-40 sticky z-10 top-0">
                        Close
                    </button>
                    <div className="bg-black/40 relative aspect-[.8] rounded-[5px] overflow-hidden shrink-0">
                        <FadeInImage src={memberData.imgSrc} alt="" sizes="(min-width: 810px) 340px, calc(100vw - 30px)"/>
                    </div>
                    <div className="text-[22px] tracking-[-.03em] font-semibold leading-[1.04]">
                        <div>{memberData.name}</div>
                        <div className="opacity-40">
                            {memberData.title}
                        </div>
                    </div>
                    <div className="text-[16px] tracking-[-.03em] font-medium leading-[1.2]">
                        {memberData.bio}
                    </div>
                    <Link href="https://www.linkedin.com/in/fariasmaiquita" target="_blank" className="font-semibold leading-[18px] relative inline-block group self-start">
                        Linkedin
                        <div className="absolute bottom-0 w-full border-b origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-0"></div>
                    </Link>
                </div>
            )
        }
        return null;
    }

    return (
        <section className="min-[810px]:px-[20px] px-[15px] min-[810px]:pb-[200px] pb-[150px]">
            <h2 className="min-[810px]:text-[40px] text-[28px] font-semibold tracking-[-.03em]">
                Team
            </h2>
            <div className="min-[810px]:mt-[60px] mt-[30px] min-[1200px]:px-[50px] grid min-[810px]:grid-cols-5 grid-cols-2 min-[1200px]:gap-[60px] gap-[20px]">
                {TeamData.map((item, index) => {
                    return (
                        <button key={index} onClick={() => setMemberId(index)} className="group cursor-pointer text-left">
                            <div className="bg-black/40 relative aspect-[.8] rounded-[5px] overflow-hidden filter grayscale-100 transition-all duration-500 group-hover:grayscale-0">
                                <FadeInImage src={item.imgSrc} alt="" sizes="(min-width: 810px) 20vw, 50vw" />
                            </div>
                            <div className="mt-[8px] font-semibold">
                                <div>{item.name}</div>
                                <div className="mt-[1px] opacity-40">
                                    {item.title}
                                </div>
                            </div>
                        </button>
                    )
                })}
            </div>
            <BodyPortal>
                <div ref={asideRef} onClick={handleAsideClick} className={`aside-bg bg-black/80 fixed inset-0 z-50 motion-duration-500 scrollbar-hide ${asideDismissed ? "motion-opacity-out-0 motion-delay-200" : "motion-opacity-in-0"} ${memberId === null ? "invisible" : ""}`}>
                    {getAside()}
                </div>
            </BodyPortal>
        </section>
    )
}