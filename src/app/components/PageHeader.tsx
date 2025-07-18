'use client';

import Link from "next/link";
import {useState, useRef, useEffect} from "react";
import { HeaderNavData } from "@/app/data/NavData";

export default function PageHeader() {
    const [navOpened, setNavOpened] = useState<boolean>(false);
    const [isOverBgImage, setIsOverBgImage] = useState<boolean>(true);
    const headerRef = useRef<HTMLDivElement | null>(null);
    const scrollYRef = useRef<number>(0);

    useEffect(() => {
        const body = document.body;

        if (navOpened) {
            scrollYRef.current = window.scrollY;
            body.style.position = 'fixed';
            body.style.top = `-${scrollYRef.current}px`;
            body.style.width = '100%';
        } else {
            body.style.position = '';
            body.style.top = '';
            body.style.width = '';
            window.scrollTo(0, scrollYRef.current);
        }

        return () => {
            body.style.position = '';
            body.style.top = '';
            body.style.width = '';
        };
    }, [navOpened]);

    useEffect(() => {
        const handleScroll = () => {
            const header = headerRef.current;
            if (!header) return;

            const headerHeight = header.offsetHeight;
            const headerTop = 0;
            const headerBottom = headerTop + headerHeight;

            const bgSections = document.querySelectorAll<HTMLElement>('.has-bg-img');

            let overBgImage = false;

            bgSections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionBottom = rect.bottom;

                if (sectionTop < headerBottom && sectionBottom > headerTop) {
                    overBgImage = true;
                }
            });

            setIsOverBgImage(overBgImage);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <header className="max-[1200px]:min-[810px]:h-[58px] max-[810px]:h-[49px]">
            <div ref={headerRef} className={`isolate fixed z-30 inset-x-0 top-0 min-[810px]:px-[20px] px-[15px] min-[810px]:h-[58px] h-[49px] grid items-center min-[1200px]:grid-cols-3 grid-cols-2 gap-[20px] font-semibold min-[810px]:text-[18px] text-[14px] tracking-[-0.03em] max-[1200px]:bg-white ${isOverBgImage ? "min-[1200px]:text-white" : ""}`}>
                <div className={`bg-white fixed -z-10 inset-x-0 h-[58px] transition-transform ease-in-out duration-500 ${isOverBgImage ? "min-[1200px]:-translate-y-full" : ""} max-[1200px]:-translate-y-full`}></div>
                <div className="">
                    <Link href="/" className="hover:opacity-40 transition-opacity">T.Q.C</Link>
                </div>
                <nav className={`min-[1200px]:col-start-3 max-[810px]:grid ${navOpened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all ease-in-out duration-500 max-[810px]:absolute top-full inset-x-0`}>
                    <div className="overflow-hidden">
                        <div className="max-[810px]:px-[15px] max-[810px]:pb-[100px] max-[810px]:flex flex-col justify-center max-[810px]:text-[60px] tracking-[-0.03em] max-[810px]:h-[calc(100dvh_-_49px)] max-[810px]:bg-white">
                            {HeaderNavData.map((link, linkIndex) => {
                                return (
                                    <span key={linkIndex}>
                                        <Link href={link.href} className="hover:opacity-40 transition-opacity">
                                            {link.text}
                                        </Link>
                                        <span className="max-[810px]:hidden">
                                            {linkIndex < HeaderNavData.length - 1 ? ", " : ""}
                                        </span>
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </nav>
                <button onClick={() => {
                    if (!navOpened) {
                        scrollYRef.current = window.scrollY;
                    }
                    setNavOpened(!navOpened);
                }} className="relative justify-self-end cursor-pointer min-[810px]:hidden grid overflow-hidden">
                    <span className={`col-start-1 row-start-1 transform transition-transform ease-in-out duration-500 ${navOpened ? "-translate-y-full" : "none"}`}>
                        Menu
                    </span>
                    <span className={`col-start-1 row-start-1 transform transition-transform ease-in-out duration-500 ${navOpened ? "none" : "translate-y-full"}`}>
                        Close
                    </span>
                </button>
            </div>
        </header>
    );
}