import FadeInImage from "@/app/components/FadeInImage";
import Link from "next/link";

export default function StudioCareers() {
    return (
        <section className="has-bg-img h-dvh min-[810px]:px-[20px] px-[15px] min-[810px]:mb-[200px] mb-[150px] flex items-center relative">
            <FadeInImage src="/img/studio/tqc-studio-careers.avif" alt="" sizes="100vw" className="max-[810px]:object-[80%_43.6%]" />
            <div className="relative border-t border-t-white/20 pt-[10px] flex max-[810px]:flex-col gap-[10px] text-white w-full">
                <div className="font-medium grow-[.5] shrink-0 basis-0">
                    Join us
                </div>
                <div className="basis-0 grow shrink-0">
                    <p className="min-[1200px]:text-[60px] min-[810px]:text-[48px] text-[38px] tracking-[-.03em] font-semibold min-[810px]:w-[530px]">
                        We always look for talented individuals.
                    </p>
                    <Link href="" className="mt-[10px] font-semibold leading-[18px] relative inline-block group">
                        Join the team
                        <div className="absolute bottom-0 w-full border-b border-b-white origin-right transition-transform duration-500 ease-in-out group-hover:scale-x-0"></div>
                    </Link>
                </div>
            </div>
        </section>
    )
}