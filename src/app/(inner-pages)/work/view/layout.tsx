'use client';

import {MainWorkCatgData} from "@/app/data/WorkData";
import {notFound, useParams} from 'next/navigation';
import Link from "next/link";
import { ReactNode } from "react";

export default function WorkPageLayout({ children }: Readonly<{children: ReactNode }>) {
    const params = useParams();
    const view = (params.view as string).toLowerCase();
    const validViews = ['grid', 'list'];
    const catg_id = Array.isArray(params.catg_id) ? parseInt(params.catg_id[0]) : undefined;

    if (!validViews.includes(view) || (catg_id && !MainWorkCatgData[catg_id])) {
        return notFound();
    }

    return (
        <main className="motion-translate-y-in-[-100px] motion-opacity-in-0 motion-duration-700 motion-delay-300">
            <div className="pt-[150px] min-[810px]:pb-[200px] pb-[150px] min-[810px]:px-[20px] px-[15px]">
                <div className="flex flex-wrap justify-between items-end gap-[20px]">
                    <div className="min-[1200px]:text-[60px] min-[810px]:text-[48px] text-[38px] tracking-[-.03em] leading-[calc(65/60)] font-semibold min-[1200px]:max-w-[800px] min-[810px]:max-w-[600px] max-w-[390px]">
                        {MainWorkCatgData.map((catg, index) => {
                            return (
                                <Link key={index} href={`/work/view/${view}/${index == 0 ? "" : index}`} className={`transition-opacity duration-500 hover:opacity-30 ${(index == catg_id || (catg_id == undefined && index == 0)) ? "" : "opacity-20"}`}>
                                    {catg || "All"}
                                    <span>
                                        { index < MainWorkCatgData.length - 1 ? ", " : "" }
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="text-[14px] tracking-[-.03em] font-semibold capitalize grow text-right">
                        {validViews.map((item, index) => {
                            return (
                                <span key={index}>
                                    <Link href={`/work/view/${item}/${catg_id}`} className={`transition-opacity duration-500 hover:opacity-40 ${item == view ? "opacity-40" : ""}`}>
                                        {item}
                                    </Link>
                                    <span>
                                        { index < validViews.length - 1 ? " / " : "" }
                                    </span>
                                </span>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-[40px]">
                    {children}
                </div>
            </div>
        </main>
    )
}