'use client';

import { RolesData } from "@/app/data/CareersData";
import { useState } from "react";
import Link from "next/link";
import FadeInImage from "@/app/components/FadeInImage";

export default function CareerRoles() {
    const [roleExpanded, setRoleExpanded] = useState<number>(0);

    return (
        <section className="grid min-[810px]:grid-cols-2 grid-cols-1 items-center max-[810px]:px-[15px] min-[810px]:pb-[200px] pb-[100px]">
            <h3 className="text-[30px] tracking-[-.03em] font-semibold min-[810px]:hidden max-[810px]:row-start-1">
                Open Roles
            </h3>
            <div className="max-[810px]:row-start-3">
                <div className="min-[810px]:w-[580px] w-[600px] max-w-full pl-[20px] pr-[40px] max-[810px]:px-0 mx-auto max-[810px]:mt-[20px]">
                    <h3 className="text-[40px] tracking-[-.03em] font-semibold max-[810px]:hidden">
                        Open Roles
                    </h3>
                    <div className="min-[810px]:min-h-[400px] flex items-center">
                        <div className="">
                            {RolesData.map((item, index) => {
                                const expanded = roleExpanded == index;
                                const commonClasses = "w-[13px] border-b absolute left-1/2 top-1/2 -translate-1/2 transition-transform duration-500 ease-in-out";
                                return (
                                    <div key={index} className="border-b border-b-black/20">
                                        <button onClick={() => setRoleExpanded(index)} className="cursor-pointer flex justify-between items-center w-full py-[10px] text-[16px] tracking-[-.03em] font-semibold">
                                            <span className={`transition-opacity duration-500 ${expanded ? "opacity-40" : ""}`}>
                                                {item.title}
                                            </span>
                                            <div className="size-[20px] relative">
                                                <div className={`${commonClasses} ${expanded ? "" : "rotate-90"}`}></div>
                                                <div className={`${commonClasses} ${expanded ? "" : "rotate-180"}`}></div>
                                            </div>
                                        </button>
                                        <div className={`grid transition-all duration-500 ease-in-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                            <div className="overflow-hidden">
                                                <div className="pt-[8px] pb-[25px]">
                                                    <p className="text-[16px] tracking-[-.03em] font-medium leading-[1.2]">
                                                        {item.description}
                                                    </p>
                                                    <Link href="mailto:fmaiquita@gmail.com" target="_blank" className="inline-block mt-[15px] font-semibold">
                                                        Apply Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black/40 relative overflow-hidden rounded-tl-[10px] rounded-bl-[10px] max-[810px]:rounded-[15px] min-[810px]:h-[90dvh] max-[810px]:row-start-2 max-[810px]:mt-[20px] max-[810px]:aspect-[1.44]">
                {RolesData.map((item, index) => {
                    return (
                        <div key={index} className={`absolute inset-0 transition-transform ease-out duration-1000 ${roleExpanded == index ? "opacity-100 z-10" : "opacity-0 scale-110"}`}>
                            <FadeInImage src={item.imgSrc} sizes="(min-width: 810px) 50vw, calc(100vw - 30px)" alt="" />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}