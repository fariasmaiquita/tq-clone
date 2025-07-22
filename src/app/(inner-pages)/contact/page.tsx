import Link from "next/link";
import FadeInImage from "@/app/components/FadeInImage";
import {ContactData, LocationsData} from "@/app/data/ContactData";

export default function ContactPage() {
    return (
        <main className="motion-translate-y-in-[-100px] motion-opacity-in-0 motion-duration-700 motion-delay-300">
            <div className="min-[810px]:px-[20px] px-[15px] pt-[150px]">
                <h2 className="min-[1200px]:text-[60px] min-[810px]:text-[48px] text-[38px] font-semibold tracking-[-.03em]">
                    Get in touch
                </h2>
                <div className="mt-[120px] grid min-[810px]:grid-cols-3 grid-cols-1 gap-x-[20px] gap-y-[40px] font-semibold">
                    {ContactData.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="opacity-40 text-[22px] tracking-[-.03em]">
                                    {item.sector}
                                </div>
                                <div className="mt-[19px]">
                                    {item.name}
                                </div>
                                <Link href={`mailto:${item.email}`} className="mt-[6px] leading-[18px] relative inline-block group">
                                    {item.email}
                                    <div className="absolute bottom-0 w-full border-b origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-0"></div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className="min-[810px]:mt-[120px] mt-[40px] min-[810px]:mb-[200px] mb-[150px] grid min-[810px]:grid-cols-3 grid-cols-1 gap-x-[20px] gap-y-[40px]">
                    {LocationsData.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="rounded-[12px] overflow-hidden relative aspect-[0.77551] bg-black/40">
                                    <FadeInImage src={item.imgSrc} sizes="(min-width: 810px) 33vw, 100vw" alt="" />
                                </div>
                                <div className="mt-[10px] font-semibold">
                                    <div className="opacity-40">
                                        {item.office}
                                    </div>
                                    <div className="mt-[5px]">
                                        {item.address}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}