import { NewsData } from "@/app/data/NewsData";
import Link from "next/link";
import FadeInImage from "@/app/components/FadeInImage";
import HomeCTA from "@/app/components/HomeCTA";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "News | T.Q.C"
}

export default function NewsPage() {
    return (
        <main className="motion-translate-y-in-[-100px] motion-opacity-in-0 motion-duration-700 motion-delay-300">
            <div className="min-[810px]:px-[20px] px-[15px] pb-[200px]">
                <div className="pt-[200px] pb-[100px] min-[1200px]:text-[60px] min-[810px]:text-[48px] text-[38px] tracking-[-.03em] max-w-[550px] font-semibold">
                    The home of news, insights and updates
                </div>
                <div className="flex flex-wrap gap-x-[15px] min-[810px]:gap-y-[30px] gap-y-[40px]">
                    {NewsData.map((itemData, itemIndex) => {
                        if (!itemData) return null;
                        const itemHref = `/news/${itemIndex}`;
                        return (
                            <div key={itemIndex} className={`${itemIndex > 1 ? "min-[810px]:grow min-[810px]:w-[calc((100%-38.54%-30px)/2)] max-[810px]:basis-full" : "min-[810px]:shrink-0 min-[810px]:w-[38.54%] max-[810px]:basis-full"}`}>
                                <Link href={itemHref} className="block bg-black/40 aspect-4/3 relative rounded-[10px] overflow-hidden">
                                    <FadeInImage src={itemData.imgSrc} sizes="(min-width: 810px) 33vw, calc(100vw - 30px)" alt="" />
                                </Link>
                                <Link href={itemHref} className="text-[14px] tracking-[-.03em] inline-flex flex-wrap gap-x-[5px] mt-[12px] opacity-40">
                                    <span>{itemData.category}</span>
                                    <span>/</span>
                                    <span>{itemData.date}</span>
                                </Link>
                                <br />
                                <Link href={itemHref} className="min-[810px]:max-w-[360px] max-w-[320px] inline-block mt-[10px] min-[810px]:text-[22px] text-[18px] tracking-[-.03em] font-semibold transition-opacity duration-500 hover:opacity-40">
                                    {itemData.title}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <HomeCTA />
        </main>
    )
}