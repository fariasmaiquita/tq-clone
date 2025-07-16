'use client';

import Link from "next/link";
import {useState} from "react";

type PageHeaderProps = {
    initBgOpaque?: boolean
}

export default function PageHeader({initBgOpaque = true}: PageHeaderProps) {
    const [navOpened, setNavOpened] = useState<boolean>(false);

    const navLinks = [
        { href: "", text: "Work" },
        { href: "", text: "Studio" },
        { href: "", text: "News" },
        { href: "", text: "Careers" },
        { href: "", text: "Contact" },
    ];

    return (
        <header className="max-[1200px]:min-[810px]:h-[58px] max-[810px]:h-[49px]">
            <div className={`fixed z-30 inset-x-0 min-[810px]:px-[20px] px-[15px] min-[810px]:h-[58px] h-[49px] grid items-center min-[1200px]:grid-cols-3 grid-cols-2 gap-[20px] font-semibold min-[810px]:text-[18px] text-[14px] tracking-[-0.03em] ${initBgOpaque ? "min-[1200px]:bg-white" : "min-[1200px]:text-white"} max-[1200px]:bg-white`}>
                <div className="">
                    <Link href="/" className="hover:opacity-40 transition-opacity">T.Q.C</Link>
                </div>
                <nav className={`min-[1200px]:col-start-3 max-[810px]:grid ${navOpened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all ease-in-out duration-500 max-[810px]:absolute top-full inset-x-0`}>
                    <div className="overflow-hidden">
                        <div className="max-[810px]:px-[15px] max-[810px]:pb-[100px] max-[810px]:flex flex-col justify-center max-[810px]:text-[60px] tracking-[-0.03em] max-[810px]:h-[calc(100dvh_-_49px)] max-[810px]:bg-white">
                            {navLinks.map((link, linkIndex) => {
                                return (
                                    <span key={linkIndex}>
                                        <Link href={link.href} className="hover:opacity-40 transition-opacity">
                                            {link.text}
                                        </Link>
                                        <span className="max-[810px]:hidden">
                                            {linkIndex < navLinks.length - 1 ? ", " : ""}
                                        </span>
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </nav>
                <button onClick={() => setNavOpened(!navOpened)} className="justify-self-end cursor-pointer min-[810px]:hidden grid overflow-hidden">
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