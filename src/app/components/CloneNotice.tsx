'use client';

import Link from "next/link";
import {MouseEvent, useEffect, useRef, useState} from "react";
import {useBodyScrollLock} from "@/app/hooks/useBodyScrollLock";

export default function CloneNotice() {
    const [noticeDismissed, setNoticeDismissed] = useState<boolean>(true);
    const [noticeHidden, setNoticeHidden] = useState<boolean>(true);
    const scrollYRef = useRef<number>(0);
    const cookieCloneKey = "tqc_clone_notice_okayed";

    const handleDismissClick = (e: MouseEvent<HTMLDivElement>) => {
        const clickedTarget = e.target as HTMLElement;
        if (clickedTarget.matches(".dark-bg, .okay-btn, .okay-btn *")) {

            if (clickedTarget.matches(".okay-btn, .okay-btn *")) {
                const expiryDate = new Date();
                expiryDate.setFullYear(expiryDate.getFullYear() + 1);
                document.cookie = `${cookieCloneKey}=true; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
            }

            setNoticeDismissed(true);

            setTimeout(() => {
                setNoticeHidden(true);
            }, 1000);
        }
    };

    useEffect(() => {
        const hasCloneCookie = () => {
            return document.cookie.split(';').some(item => item.trim().startsWith(`${cookieCloneKey}=`));
        }

        scrollYRef.current = window.scrollY

        if (!hasCloneCookie()) {
            setNoticeDismissed(false);
            setNoticeHidden(false);
        }
    }, []);

    useBodyScrollLock(!noticeDismissed, scrollYRef);

    if (noticeHidden) return null;

    return (
        <div onClick={handleDismissClick} className={`dark-bg fixed inset-0 z-40 bg-black/80 flex justify-center items-center motion-duration-500 ${noticeDismissed ? "motion-opacity-out-0 motion-delay-300" : "motion-opacity-in-0"}`}>
            <div className={`mx-auto rounded-[10px] bg-white px-[25px] py-[20px] w-[435px] max-w-[calc(100%_-_20px)] text-[14px] [tracking-[-.03em]  motion-duration-500 ${noticeDismissed ? "motion-opacity-out-0 motion-translate-y-out-[50px]" : "motion-opacity-in-0 motion-translate-y-in-[50px] motion-delay-300"}`}>
                <div className="text-[20px] font-semibold leading-[1.04] [tracking-[-.03em]">
                    Heads up!
                </div>
                <div className="leading-[1.3] mt-[20px]">
                    <p>
                        {"This site is a personal project by "}
                        <Link href="https://dribbble.com/fmaiquita" target="_blank" className="font-semibold [tracking-[-.03em] transition-opacity duration-500 hover:opacity-40">
                            Farias Maiquita
                        </Link>
                        {", built using Next.js, TypeScript, and Tailwind CSS, and meant for learning and portfolio purposes."}
                    </p>
                    <p className="mt-[20px]">
                        {"It's a recreation of many of the pages of "}
                        <Link href="https://ena.supply/templates/tommas-quinn" target="_blank" className="font-semibold [tracking-[-.03em] transition-opacity duration-500 hover:opacity-40">
                            TommasQuinn Framer Portfolio Template
                        </Link>
                        {" preview. All design credits goes to the original creator "}
                        <Link href="https://ena.supply" target="_blank" className="font-semibold [tracking-[-.03em] transition-opacity duration-500 hover:opacity-40">
                            ena supply
                        </Link>.
                    </p>
                    <p className="mt-[20px]">
                        {"View the original preview at "}
                        <Link href="https://tommas-quinn.framer.website" target="_blank" className="font-semibold [tracking-[-.03em] transition-opacity duration-500 hover:opacity-40">
                            tommas-quinn.framer.website
                        </Link>
                    </p>
                </div>

                <button className="okay-btn mt-[20px] text-[14px] tracking-[-.03em] font-semibold leading-[18px] relative inline-block group cursor-pointer">
                    I Understand
                    <div className="absolute bottom-0 w-full border-b origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-0"></div>
                </button>
            </div>
        </div>
    )
}